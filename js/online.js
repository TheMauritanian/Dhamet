

(function OnlineModule(){
  if (typeof window === 'undefined') return;
  const hasCore = () =>
    typeof window.Game !== 'undefined' &&
    typeof window.UI !== 'undefined' &&
    typeof window.Visual !== 'undefined' &&
    typeof window.nowHHMMSS === 'function' &&
    typeof window.t === 'function';

  const qs = (s, r=document) => r.querySelector(s);
  const qsa = (s, r=document) => Array.from(r.querySelectorAll(s));
  const rcToIdx = (r,c)=> r*9 + c;
  const idxToRC = (idx)=> [Math.floor(idx/9), idx%9];

  const tt = (key, vars) => {
    try { return (window.t && window.t(key, vars)) || key; } catch { return key; }
  };

  const SERVER_URL = (window.ZAMAT_SERVER_URL || 'wss://example.com/zamat');

  const Online = {
    socket: null,
    connected: false,
    state: 'idle',         
    me: { id: null, name: '' },
    opp: { id: null, name: '' },
    roomId: null,
    side: null,            
    starter: 'white',      
    rotate: false,          
    recon: { tries: 0, max: 4 },
    ping: { interval: null, last: 0, rtt: null },
    history: [],          
    lockInput: false,      
    backup: {
      ai: {},
      ui: {},
      app: {},
      handlers: {},
      css: { boardTransform: '' },
      names: {},
    }
  };

  const Modal = {
    open(o){ if (!hasCore()) return;
      window.Modal && window.Modal.open(o);
    },
    close(){ window.Modal && window.Modal.close(); }
  };

  function toast(msg){ const el = qs('#toasts'); if(!el) return;
    const t = document.createElement('div'); t.className='toast'; t.textContent=msg;
    el.appendChild(t); setTimeout(()=>t.remove(), 4200);
  }

  function setPlayerNames(whiteName, blackName){
    if (!hasCore()) return;
    Online.backup.names.top ??= qs('#pTopName')?.textContent || '';
    Online.backup.names.bot ??= qs('#pBotName')?.textContent || '';
    if (whiteName) qs('#pTopName').textContent = `⚪ ${whiteName}`;
    if (blackName) qs('#pBotName').textContent = `⚫ ${blackName}`;
    Game.names.top = whiteName || '';
    Game.names.bot = blackName || '';
  }

  function resetPlayerNames(){
    if (!hasCore()) return;
    if (Online.backup.names.top) qs('#pTopName').textContent = Online.backup.names.top;
    if (Online.backup.names.bot) qs('#pBotName').textContent = Online.backup.names.bot;
    Game.names.top = '';
    Game.names.bot = '';
  }

  function applyBoardRotation(rotate){
    const cv = qs('#board');
    if (!cv) return;
    if (Online.backup.css.boardTransform === '') {
      Online.backup.css.boardTransform = cv.style.transform || '';
    }
    cv.style.transform = rotate ? 'rotate(180deg)' : Online.backup.css.boardTransform;
  }

  function wrapBoardClickForRotation(){
    if (!hasCore()) return;
    if (!Online.rotate) return;
    if (!window.Input || typeof Input.onBoardClick !== 'function') return;
    if (!Online.backup.handlers.onBoardClick) {
      Online.backup.handlers.onBoardClick = Input.onBoardClick;
    }
    Input.onBoardClick = function rotatedClick(ev){
      const cv = qs('#board');
      const rect = cv.getBoundingClientRect();
      const x = (ev.offsetX ?? (ev.clientX - rect.left)) * (cv.width/rect.width);
      const y = (ev.offsetY ?? (ev.clientY - rect.top)) * (cv.height/rect.height);
      const rx = cv.width  - x;
      const ry = cv.height - y;
      const fake = { ...ev, offsetX: rx, offsetY: ry, clientX: 0, clientY: 0 };
      return Online.backup.handlers.onBoardClick.call(this, fake);
    };
  }

  function restoreBoardClick(){
    if (!Online.backup.handlers.onBoardClick) return;
    Input.onBoardClick = Online.backup.handlers.onBoardClick;
    Online.backup.handlers.onBoardClick = null;
  }

  function setButtonsOnlineState(active){
    const disable = (sel, v)=>{ const el=qs(sel); if(el) el.disabled=v; };
    const show = (sel, v)=>{ const el=qs(sel); if(el) el.style.display = v?'grid':'none'; };
    const showBlock = (sel, v)=>{ const el=qs(sel); if(el) el.style.display = v?'block':'none'; };

    disable('#btnHint', active);     
    disable('#btnSave', active);      
    disable('#btnResume', active);    
    disable('#btnNew', active);       
    disable('#btnSettings', active);  
    disable('#btnSoufla', false);
    disable('#btnUndo', false);

    showBlock('#btnOnline', !active);
    showBlock('#btnEndOnline', active);

    const aiRow = qsa('.ai-state');
    aiRow.forEach(x => x.style.display = active ? 'none' : '');
  }

  function disableAICompletely(){
    if (!hasCore()) return;
    Online.backup.ai.scheduleMove ??= (window.AI && AI.scheduleMove) || null;
    Online.backup.ai.computeHint ??= (window.AI && AI.computeHint) || null;
    Online.backup.app.humanSide ??= (window.humanSide) || null;
    Online.backup.app.aiSide ??= (window.aiSide) || null;

    if (window.AI){
      AI.scheduleMove = function(){ /* no-op in online */ };
      AI.computeHint = async function(){ return null; };
    }
    window.humanSide = function(){
      if (Online.side === 'white') return +1; 
      if (Online.side === 'black') return -1; 
      return -1;
    };
    window.aiSide = function(){ return -window.humanSide(); };
  }

  function restoreAIDefaults(){
    if (!hasCore()) return;
    if (Online.backup.ai.scheduleMove && window.AI) AI.scheduleMove = Online.backup.ai.scheduleMove;
    if (Online.backup.ai.computeHint && window.AI) AI.computeHint = Online.backup.ai.computeHint;
    if (Online.backup.app.humanSide) window.humanSide = Online.backup.app.humanSide;
    if (Online.backup.app.aiSide) window.aiSide = Online.backup.app.aiSide;
  }

  function enforceHumanRulesForBoth(){
    Game.forcedEnabled = true;
  }

  function startOnlineMatch({ roomId, side, starter, whiteName, blackName, board }){
    if (!hasCore()) return;
    Online.roomId = roomId;
    Online.side = side;                  
    Online.starter = starter || 'white';
    Online.rotate = (side === 'white');  
    Online.state = 'playing';
    Online.history = [];

    Game.settings.starter = (starter === 'white') ? 'white' : 'black';
    if (board && Array.isArray(board) && board.length === 9) {
      Game.board = board;
    } else {
      if (typeof window.setupInitialBoard === 'function') {
        setupInitialBoard();
      } else {
        for(let r=0;r<9;r++){ for(let c=0;c<9;c++){ Game.board[r][c]=0; } }
      }
    }

    applyBoardRotation(Online.rotate);
    wrapBoardClickForRotation();

    disableAICompletely();
    enforceHumanRulesForBoth();
    setButtonsOnlineState(true);

    setPlayerNames(whiteName, blackName);

    UI.status(`${tt('status.online') || 'وضعية اللعب عبر الإنترنت'} — ${tt('status.turn',{side: Game.player===+1 ? (Game.names.top || tt('players.white') || 'الأبيض') : (Game.names.bot || tt('players.black') || 'الأسود')})}`);
    UI.log(`${nowHHMMSS()} ${tt('log.online.started') || 'بدأت مباراة عبر الإنترنت'} — #${Online.roomId}`);
    Visual.draw();
  }

  function endOnlineMatch(reasonText){
    if (!hasCore()) return;
    if (Online.socket){
      try { Online.socket.close(); } catch(e){}
      Online.socket = null;
    }
    Online.connected = false;
    Online.state = 'ended';
    Online.roomId = null;
    Online.opp = {id:null, name:''};

    restoreAIDefaults();
    restoreBoardClick();
    applyBoardRotation(false);
    resetPlayerNames();
    setButtonsOnlineState(false);

    if (typeof window.setupInitialBoard === 'function') setupInitialBoard();

    UI.status(reasonText || (tt('status.onlineEnded') || 'تم إنهاء المباراة عبر الإنترنت'));
    UI.log(`${nowHHMMSS()} ${tt('log.online.ended') || 'انتهت مباراة عبر الإنترنت'}`);
  }

  

  function connect(){
    if (Online.connected) return;
    Online.socket = new WebSocket(SERVER_URL);
    Online.socket.addEventListener('open', onOpen);
    Online.socket.addEventListener('message', onMessage);
    Online.socket.addEventListener('close', onClose);
    Online.socket.addEventListener('error', onError);
  }

  function onOpen(){
    Online.connected = true;
    Online.recon.tries = 0;
    send({ type: 'hello', game: 'zamat' });
    startPing();
    UI.log('[ONLINE] Connected');
    if (Online.state === 'browsing') {
      send({ type: 'listPlayers' });
    }
  }

  function onMessage(ev){
    let msg;
    try { msg = JSON.parse(ev.data); } catch { return; }
    switch(msg.type){

      case 'welcome': {
        Online.me.id = msg.id || Online.me.id;
        UI.log(`[ONLINE] welcome: id=${Online.me.id || 'unknown'}`);
        if (Online.state === 'browsing') send({ type: 'listPlayers' });
        break;
      }

      case 'presence': {
        if (Online.state === 'browsing') {
          send({ type: 'listPlayers' });
        }
        break;
      }

      case 'players': {
        showPlayersListModal(msg.players || []);
        break;
      }

      case 'inviteIncoming': {
        promptInviteIncoming(msg.fromId, msg.fromName);
        break;
      }
      case 'inviteSent': {
        UI.log(`${nowHHMMSS()} ${tt('log.online.inviteSent') || 'تم إرسال دعوة'} → ${msg.toName || '...'}`);
        break;
      }
      case 'inviteDeclined': {
        UI.log(`${nowHHMMSS()} ${tt('log.online.inviteDeclined') || 'تم رفض الدعوة'}`);
        toast(tt('ui.inviteDeclined') || 'تم رفض الدعوة');
        break;
      }

      case 'startGame': {
        startOnlineMatch({
          roomId: msg.roomId,
          side: msg.side,                  
          starter: msg.starter,           
          whiteName: msg.whiteName || 'Player ⚪',
          blackName: msg.blackName || 'Player ⚫',
          board: msg.board || null
        });
        break;
      }

      case 'opponentMove': {
        applyOpponentMove(msg.move);
        break;
      }

      case 'opponentEndKill': {
        if (Game.inChain) {
          if (typeof window.promoteIfNeeded === 'function') {
            promoteIfNeeded(Game.chainPos ?? Game.lastMovedTo);
          }
          Game.inChain = false;
          Game.chainPos = null;
          const btn = qs('#btnEndKill'); if (btn) btn.disabled = true;
          if (typeof window.Turn?.finishTurnAndSoufla === 'function') {
            Turn.finishTurnAndSoufla();
          } else {
            Game.player = -Game.player;
          }
          UI.updateAll();
        }
        break;
      }

      case 'undoRequest': {
        promptUndoRequest(msg.fromName);
        break;
      }
      case 'undoResponse': {
        if (msg.accepted) {
          performUndoLocal();
          toast(tt('ui.undoAccepted') || 'تم قبول التراجع');
          UI.log(`${nowHHMMSS()} ${tt('log.online.undoAccepted') || 'تم قبول التراجع'}`);
        } else {
          toast(tt('ui.undoDeclined') || 'تم رفض التراجع');
          UI.log(`${nowHHMMSS()} ${tt('log.online.undoDeclined') || 'تم رفض التراجع'}`);
        }
        break;
      }

      case 'endGame': {
        endOnlineMatch(tt('status.onlineEnded') || 'تم إنهاء المباراة عبر الإنترنت');
        break;
      }

      case 'ping': {
        send({ type: 'pong', ts: msg.ts });
        break;
      }
      case 'pong': {
        Online.ping.rtt = Date.now() - (msg.ts || Date.now());
        break;
      }

      case 'error': {
        UI.log(`[ONLINE ERROR] ${msg.message || 'Unknown error'}`);
        toast(msg.message || 'خطأ في الاتصال');
        break;
      }

      default:
        break;
    }
  }

  function onClose(){
    Online.connected = false;
    stopPing();
    if (Online.state === 'playing') {
      UI.status(tt('ui.reconnecting') || 'انقطع الاتصال — محاولة إعادة الاتصال...');
      attemptReconnect();
    } else {
      UI.log('[ONLINE] Disconnected');
    }
  }

  function onError(err){
    console.error('[ONLINE] error', err);
  }

  function attemptReconnect(){
    if (Online.recon.tries >= Online.recon.max) {
      UI.status(tt('ui.reconnectFailed') || 'فشل إعادة الاتصال بالخادم.');
      return;
    }
    Online.recon.tries++;
    setTimeout(()=>connect(), 2000 * Online.recon.tries);
  }

  function startPing(){
    stopPing();
    Online.ping.interval = setInterval(()=>{
      const ts = Date.now();
      Online.ping.last = ts;
      send({ type: 'ping', ts });
    }, 5000);
  }
  function stopPing(){
    if (Online.ping.interval) {
      clearInterval(Online.ping.interval);
      Online.ping.interval = null;
    }
  }

  function send(obj){
    if (!Online.connected || !Online.socket) return;
    try { Online.socket.send(JSON.stringify(obj)); } catch {}
  }

  

  function showPlayerPicker(){
    Online.state = 'browsing';
    if (!Online.connected) connect();

    const body = document.createElement('div');
    body.innerHTML = `
      <div class="option-list">
        <div class="option-item">
          <div><b>${tt('online.nickname') || 'الاسم المستعار'}</b><br><span class="muted">${tt('online.nicknameHint') || 'يمكن تركه فارغاً أو استخدام حروف/أرقام/رموز'}</span></div>
          <div><input id="nickInput" placeholder="${tt('online.nicknamePh')||'اسمك هنا'}" /></div>
        </div>
        <div class="option-item">
          <div><b>${tt('online.players') || 'اللاعبون المتصلون'}</b></div>
          <div><button class="btn" id="refreshPlayers">${tt('online.refresh') || 'تحديث'}</button></div>
        </div>
        <div id="playersList" style="max-height:40vh; overflow:auto;"></div>
      </div>
    `;
    const nickStored = localStorage.getItem('zamat.nick') || '';
    const input = body.querySelector('#nickInput'); input.value = nickStored;
    const listEl = body.querySelector('#playersList');

    function renderPlayers(players){
      listEl.innerHTML = '';
      if (!players.length){
        const empty = document.createElement('div');
        empty.className = 'muted';
        empty.style.padding = '10px';
        empty.textContent = tt('online.noPlayers') || 'لا يوجد لاعب متصل حالياً';
        listEl.appendChild(empty);
        return;
      }
      for (const p of players){
        if (p.id === Online.me.id) continue;
        const row = document.createElement('div');
        row.className = 'option-item';
        const statusLabel = p.status==='ai' ? (tt('online.status.ai') || 'يلعب ضد الحاسوب')
                          : p.status==='pvp' ? (tt('online.status.pvp') || 'يلعب ضد لاعب آخر')
                          : (tt('online.status.free') || 'متاح – لم يبدأ اللعب بعد');
        row.innerHTML = `
          <div>
            <div><b>${p.name || ('ID:'+p.id)}</b></div>
            <div class="muted">${statusLabel}</div>
          </div>
          <div>
            <button class="btn ok" data-id="${p.id}" ${p.status!=='free'?'disabled':''}>${tt('online.invite')||'إرسال دعوة'}</button>
          </div>
        `;
        listEl.appendChild(row);
      }
    }

    function requestPlayers(){
      Online.me.name = input.value.trim();
      localStorage.setItem('zamat.nick', Online.me.name);
      send({ type: 'setName', name: Online.me.name || '' });
      send({ type: 'listPlayers' });
    }

    function onListMessage(ev){
      const btn = ev.target.closest('button[data-id]');
      if (!btn) return;
      const toId = btn.getAttribute('data-id');
      Online.lockInput = true;
      send({ type: 'invite', toId, fromName: Online.me.name || '' });
      UI.log(`${nowHHMMSS()} ${tt('log.online.inviteSent') || 'تم إرسال دعوة'} → ${toId}`);
      toast(tt('online.inviteSent') || 'تم إرسال الدعوة');
    }

    body.querySelector('#refreshPlayers').addEventListener('click', requestPlayers);
    listEl.addEventListener('click', onListMessage);

    Modal.open({
      title: tt('online.title') || 'اللعب عبر الإنترنت',
      body,
      buttons: [
        { label: tt('modals.close')||'إغلاق', className:'ghost', onClick: ()=>Modal.close() }
      ],
      onClose: ()=>{
        listEl.removeEventListener('click', onListMessage);
      }
    });

    requestPlayers();
  }

  function showPlayersListModal(players){
    const pl = qs('#playersList');
    if (!pl) return;
    pl.innerHTML = '';
    if (!players.length){
      const empty = document.createElement('div');
      empty.className = 'muted';
      empty.style.padding = '10px';
      empty.textContent = tt('online.noPlayers') || 'لا يوجد لاعب متصل حالياً';
      pl.appendChild(empty);
      return;
    }
    for (const p of players){
      if (p.id === Online.me.id) continue;
      const row = document.createElement('div');
      row.className = 'option-item';
      const statusLabel = p.status==='ai' ? (tt('online.status.ai') || 'يلعب ضد الحاسوب')
                        : p.status==='pvp' ? (tt('online.status.pvp') || 'يلعب ضد لاعب آخر')
                        : (tt('online.status.free') || 'متاح – لم يبدأ اللعب بعد');
      row.innerHTML = `
        <div>
          <div><b>${p.name || ('ID:'+p.id)}</b></div>
          <div class="muted">${statusLabel}</div>
        </div>
        <div>
          <button class="btn ok" data-id="${p.id}" ${p.status!=='free'?'disabled':''}>${tt('online.invite')||'إرسال دعوة'}</button>
        </div>
      `;
      pl.appendChild(row);
    }
  }

  function promptInviteIncoming(fromId, fromName){
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <div style="display:grid; gap:10px;">
        <div>${(fromName || 'لاعب')} ${tt('online.incomingInvite') || 'يريد اللعب ضدك'}</div>
        <div class="option-item">
          <div><b>${tt('online.nickname') || 'اسمك المستعار'}</b></div>
          <div><input id="myNick" placeholder="${tt('online.nicknamePh')||'اسمك هنا'}" /></div>
        </div>
      </div>
    `;
    const input = wrap.querySelector('#myNick');
    input.value = localStorage.getItem('zamat.nick') || '';

    Modal.open({
      title: tt('online.invite') || 'دعوة لعب',
      body: wrap,
      buttons: [
        { label: tt('online.accept')||'قبول', className:'ok', onClick: ()=>{
          const name = input.value.trim();
          Online.me.name = name;
          localStorage.setItem('zamat.nick', name);
          send({ type:'inviteAccept', fromId, myName: name });
          Modal.close();
        }},
        { label: tt('online.decline')||'رفض', className:'danger', onClick: ()=>{
          send({ type:'inviteDecline', fromId });
          Modal.close();
        }},
      ]
    });
  }

  function promptUndoRequest(fromName){
    const body = document.createElement('div');
    body.textContent = `${fromName || 'الطرف الآخر'} ${tt('online.askUndo') || 'يريد التراجع عن النقلة الأخيرة ، هل توافق؟'}`;
    Modal.open({
      title: tt('modals.undo.title') || 'تأكيد التراجع',
      body,
      buttons: [
        { label: tt('modals.yes')||'نعم', className:'ok', onClick: ()=>{
          send({ type:'undoResponse', accepted:true });
          performUndoLocal();
          Modal.close();
        }},
        { label: tt('modals.no')||'لا', className:'ghost', onClick: ()=>{
          send({ type:'undoResponse', accepted:false });
          Modal.close();
        }},
      ]
    });
  }

  function performUndoLocal(){
    if (!Online.history.length) return;
    const snap = Online.history.pop();
    if (typeof window.restoreSnapshot === 'function') {
      restoreSnapshot(snap);
    } else {
      Game.board = snap.board;
      Game.player = snap.player;
      Game.inChain = snap.inChain;
      Game.chainPos = snap.chainPos;
      Game.lastMovedTo = snap.lastMovedTo;
      Game.moveCount = snap.moveCount;
      Visual.draw();
      UI.updateAll();
    }
  }

  function pushSnapshot(){
    if (typeof window.snapshotState === 'function') {
      Online.history.push(snapshotState());
    } else {
      Online.history.push({
        board: JSON.parse(JSON.stringify(Game.board)),
        player: Game.player,
        inChain: Game.inChain,
        chainPos: Game.chainPos,
        lastMovedTo: Game.lastMovedTo,
        moveCount: Game.moveCount,
      });
    }
    if (Online.history.length > 200) Online.history.shift();
  }

  function detectLastStep(prevBoard){
    let from=-1, to=-1;
    let movedVal = 0;
    for(let r=0;r<9;r++){
      for(let c=0;c<9;c++){
        const before = prevBoard[r][c];
        const after  = Game.board[r][c];
        if (before!==0 && after===0) {
          from = rcToIdx(r,c);
          movedVal = before;
        } else if (before===0 && after!==0) {
          to = rcToIdx(r,c);
        }
      }
    }
    if (from>=0 && to>=0) return { from, to, movedVal };
    return null;
  }

  function wrapInputForOnline(){
    if (!window.Input || typeof Input.onBoardClick !== 'function') return;
    if (!Online.backup.handlers.onBoardClick) {
      Online.backup.handlers.onBoardClick = Input.onBoardClick;
    }
    Input.onBoardClick = function(ev){
      if (Online.state !== 'playing') return Online.backup.handlers.onBoardClick.call(this, ev);
      const mySide = (Online.side==='white') ? +1 : -1;
      if (Game.player !== mySide) return;

      const prev = JSON.parse(JSON.stringify(Game.board));
      const beforeMoveCount = Game.moveCount;
      const beforeChain = Game.inChain;
      Online.backup.handlers.onBoardClick.call(this, ev);

      if (Game.moveCount !== beforeMoveCount || Game.lastMovedTo!=null) {
        const step = detectLastStep(prev);
        if (step){
          pushSnapshot();
          send({ type:'move', move:{ from: step.from, to: step.to } });
        }
      }
    };
  }

  function wrapEndKill(){
    const btn = qs('#btnEndKill');
    if (!btn) return;
    if (!Online.backup.handlers.endKill) {
      Online.backup.handlers.endKill = btn.onclick || null;
    }
    btn.addEventListener('click', ()=>{
      if (Online.state !== 'playing') return;
      const mySide = (Online.side==='white') ? +1 : -1;
      if (Game.player !== mySide) return; 
      send({ type:'endKill' });
      pushSnapshot();
    });
  }

  function wrapUndo(){
    const btn = qs('#btnUndo');
    if (!btn) return;
    if (!Online.backup.handlers.undoClick) {
      Online.backup.handlers.undoClick = btn.onclick || null;
    }
    btn.addEventListener('click', (e)=>{
      if (Online.state !== 'playing') return;
      e.preventDefault(); e.stopPropagation();
      send({ type:'undoRequest', fromName: Online.me.name || '' });
      toast(tt('online.askUndoSent') || 'تم إرسال طلب التراجع');
    }, { capture: true });
  }

  function bindEndButton(){
    const endBtn = qs('#btnEndOnline');
    if (!endBtn) return;
    endBtn.addEventListener('click', ()=>{
      Modal.open({
        title: tt('online.endTitle') || 'إنهاء المباراة',
        body: `<div>${tt('online.endConfirm') || 'هل أنت متأكد من إنهاء المباراة الحالية؟'}</div>`,
        buttons: [
          { label: tt('modals.yes')||'نعم', className:'danger', onClick: ()=>{
            send({ type:'endGame' });
            Modal.close();
            endOnlineMatch(tt('status.onlineEnded') || 'تم إنهاء المباراة عبر الإنترنت');
          }},
          { label: tt('modals.no')||'لا', className:'ghost', onClick: ()=>Modal.close() },
        ]
      });
    });
  }

  
  function applyOpponentMove(move){
    if (!move) return;
    const {from, to} = move;
    pushSnapshot();

    const [r1,c1] = idxToRC(from);
    const [r2,c2] = idxToRC(to);
    const v = Game.board[r1][c1];
    if (!v) return;

    const [isCap, jumpedIdx] = (typeof window.classifyCapture==='function') ? classifyCapture(from, to) : [false,null];
    if (isCap){
      const [jr,jc] = idxToRC(jumpedIdx);
      Game.board[r1][c1]=0;
      Game.board[jr][jc]=0;
      Game.board[r2][c2]=v;
      Game.inChain = true;
      Game.chainPos = to;
      Game.lastMovedTo = to;
      Visual.capturedOrderPush(jumpedIdx);
      Visual.setLastMove(from, to);
      UI.log(`${nowHHMMSS()} ${tt('log.online.oppJump')||'قفز الخصم'}: ${r1}.${c1}→${r2}.${c2}، إزالة ${jr}.${jc}`);
      Visual.draw();
    } else {
      Game.board[r1][c1]=0;
      Game.board[r2][c2]=v;
      Game.inChain = false;
      Game.chainPos = null;
      Game.lastMovedTo = to;
      Visual.setLastMove(from, to);
      UI.log(`${nowHHMMSS()} ${tt('log.online.oppMove')||'حركة الخصم'}: ${r1}.${c1}→${r2}.${c2}`);
      if (typeof window.promoteIfNeeded === 'function') promoteIfNeeded(to);
      if (typeof window.Turn?.finishTurnAndSoufla === 'function') Turn.finishTurnAndSoufla();
      Visual.draw();
    }
  }

  
  function bindOnlineButton(){
    const btn = qs('#btnOnline');
    if (!btn) return;
    btn.addEventListener('click', ()=>{
      showPlayerPicker();
    });
  }

  function init(){
    if (!hasCore()) return;
    bindOnlineButton();
    bindEndButton();
    wrapEndKill();
    wrapUndo();
    wrapInputForOnline();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 0);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  window.Online = {
    connect,
    showPlayerPicker,
    startOnlineMatch,
    endOnlineMatch,
    send: (obj)=>send(obj),
    state: ()=>Online.state,
  };

})();
