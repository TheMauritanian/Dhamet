window.translations = {
  ar: {
    // ===================
    // General & Metadata
    // ===================
    page_title: "لعبة ظامت الموريتانية",
    meta_description: "العب لعبة ظامت الموريتانية التقليدية أونلاين مجانًا ضد الكمبيوتر أو أصدقائك، مع شرح القواعد والتحديات.",
    meta_keywords: "لعبة ظامت, الداما الموريتانية, الضامة الموريتانية, ألعاب صحراوية, ألعاب بدوية, الظامة الموريتانية, ألعاب استراتيجية, ألعاب موريتانية, ألعاب تقليدية",
    schema_game_type: "لعبة تقليدية",
    schema_game_name: "لعبة ظامت الموريتانية",
    schema_game_genre: "لعبة استراتيجية",
    schema_game_description: "العب لعبة ظامت الموريتانية التقليدية أونلاين مجانًا ضد الكمبيوتر أو ضد أصدقائك.",

    game: {
      title: "لعبة ظامت الموريتانية",
    },
    // ===================
    // UI and common
    // ===================
    ui: {
      language: "اللغة",
      stats: "الإحصائيات",
      aiState: "حالة الذكاء الاصطناعي:",
      noEndChain: "لا يمكن إنهاء السلسلة الآن.",
      noUndo: "لا يوجد تراجع متاح.",
      inviteDeclined: "تم رفض الدعوة.",
      undoAccepted: "تم قبول التراجع.",
      undoDeclined: "تم رفض التراجع.",
      reconnecting: "انقطع الاتصال — محاولة إعادة الاتصال...",
      reconnectFailed: "فشل إعادة الاتصال بالخادم.",
    },
    players: {
      white: "⚪ الأبيض",
      black: "⚫ الأسود",
    },
    stats: {
      left: "القطع المتبقية",
      kings: "الظائم (الملك)",
      captured: "المأسورة",
    },
    status: {
      default: "...",
      draw: "انتهت المباراة بالتعادل",
      win: "انتهت المباراة – الفائز:",
      turn: "الدور الآن على ",
      forcedMove: "مرحلة الافتتاح الإجباري: النقلة المسموحة هي ${from}→${to}",
      online: "وضعية اللعب عبر الإنترنت",
      onlineEnded: "تم إنهاء المباراة عبر الإنترنت",
    },

    // ===================
    // Buttons
    // ===================
    buttons: {
      endKill: "إنهاء الأسر",
      soufla: "سوفلة",
      undo: "تراجع",
      hint: "تلميح",
      rules: "تعليمات",
      settings: "الإعدادات",
      newGame: "لعبة جديدة",
      save: "حفظ لعبة",
      resume: "استئناف لعبة",
      pickOnline: "اختر لاعبًا متصلاً",
      endOnline: "إنهاء المباراة",
      exportHuman: "تصدير نموذج JSON",
    },

    // ===================
    // Modals
    // ===================
    modals: {
      error: "خطأ",
      close: "إغلاق",
      yes: "نعم",
      no: "لا",
      apply: "تطبيق",
      save: "حفظ",
      cancel: "إلغاء",
      applyPenalty: "تطبيق العقوبة",
      gameOver: {
        winTitle: "🎉 تهانينا، لقد فزت!",
        winBody: "لقد أزلت جميع قطع خصمك. هل تريد لعب مباراة جديدة؟",
        loseTitle: "GAME OVER",
        loseBody: "لقد أزال خصمك جميع قطعك. حظ أوفر في المرة القادمة! هل تريد لعب مباراة جديدة؟",
        drawTitle: "تعادل",
        drawBody: "انتهت المباراة بالتعادل. هل تريد لعب مباراة جديدة؟",
      },
      forcedOpening: {
        title: "الافتتاح الإجباري",
        body: "في الافتتاح الإجباري هناك 5 نقلات إجبارية لكل لاعب يجب أن تلتزم بها، وبعد انتهاء النقلات الافتتاحية يمكنك تحريك القطع بكل حرية.<br><br>النقلة الإجبارية حالياً هي المحددة بالسهم الأحمر.",
      },
      forcedOpeningOver: {
        title: "الافتتاح الإجباري",
        body: "انتهت النقلات الافتتاحية، يمكنك تحريك القطع بكل حرية.",
      },
      settings: {
        title: "الإعدادات",
      },
      soufla: {
        titleSelf: "بالفعل هناك سوفلة لصالحك.",
        removeOne: "إزالة قطعة مخالفة واحدة: ${cell}",
        forceOne: "إجبار سلسلة أطول: ${cell} → ${path}",
        header: "السوفلة",
        none: "لا توجد سوفلة في حركة الحاسوب الأخيرة. لقد قام الحاسوب بالنقلة القانونية.",
      },
      rules: {
        title: "📜 قواعد لعبة الظامت الموريتانية",
      },
      hint: {
        title: "تلميح",
        desc: "المسار المقترح معروض بصرياً على الرقعة.",
      },
      undo: {
        title: "التراجع",
        notAllowedTitle: "التراجع غير مسموح",
        notAllowedBody: "لا يمكن التراجع أثناء النقلات الافتتاحية الإجبارية.",
        confirm: "هل تريد التراجع عن آخر نقلة؟",
      },
      newGame: {
        title: "بدء لعبة جديدة",
        confirm: "هل أنت متأكد من إنهاء اللعبة الحالية وبدء جديدة؟",
      },
      online: {
        unavailableTitle: "اللعب عبر الإنترنت",
        unavailableBody: "هذه الميزة غير متاحة حاليا. جاري العمل على تطويرها.",
      },
      firstCaptureHint: {
        title: "تنبيه حول كيفية تنفيذ الأسر",
        line1: "لإنهاء الأسر يجب الضغط على زر إنهاء الأسر الموجود باللون الأحمر في الشريط الجانبي، لن ينتقل الدور إلى اللاعب الآخر حتى تضغط على هذا الزر.",
        line2: "بالنسبة للأسر المكون من سلسلة : يجب تنفيذ الأسر خطوة خطوة وأسر كل قطعة على حدة، وعند الانتهاء من جميع الخطوات اضغط على زر إنهاء الأسر لينتقل الدور إلى اللاعب الآخر. لا يمكن اختيار بداية ونهاية السلسلة مباشرة(لتجنب كشف طول السلسلة للاعب).",
      },
    },

    // ===================
    // Settings screen
    // ===================
    settings: {
      thinkTime: "زمن التفكير (مللي ثانية)",
      unlimited: "غير محدود",
      aiCapture: "إجبارية الأسر للحاسوب",
      mandatory: "إجباري",
      random: "عشوائي",
      theme: "الوضع البصري",
      light: "فاتح",
      dark: "داكن",
      longFx: "المؤثرات المطولة",
      coords: "إظهار ترقيم النقاط",
      starter: "من يبدأ",
      advanced: "إعدادات متقدمة",
      heuristic: "الهيوريستك",
      minimax: "مينيمـاكس",
      depth: "عمق:",
      criticalOnly: "حرج فقط",
      mcts: "MCTS",
      simulations: "محاكاة:",
      midgameOnly: "منتصف اللعب فقط",
      mauritanianStrategy: "استراتيجية موريتانية",
      boostCol0: "تعزيز عمود 0",
      lockCol8: "قفل عمود 8",
      avoidFightCol8: "تجنب قتال على 8",
      blendWeights: "أوزان المزج",
      policy: "السياسة (Policy)",
      heur: "هيوريستك",
      mm: "مينيمـاكس",
      mcts_short: "MCTS",
      timeBoost: "زيادة الوقت في الحالات الحرجة (مللي ثانية)",
      timeCap: "الحد الأقصى لزمن الانتظار الإضافي (مللي ثانية)",
      explain: "شرح الإعدادات",
    },

    // ===================
    // Advanced Settings Help (CORRECTED STRUCTURE)
    // ===================
    help: {
      thinkTime: {
        title: "زمن التفكير",
        desc: "المدة التي ينتظرها الحاسوب قبل حساب وتنفيذ نقلة. زيادة الزمن تعطي قرارات أدق غالباً، لكنها تؤخر اللعب وتُرهق الأجهزة الضعيفة. زمن قصير = لعب أسرع لكن أخطاء أكثر. زمن طويل = قوة أعلى لكن بطء ملحوظ خاصة على الهواتف القديمة."
      },
      heuristic: {
        title: "التقييم الهيوريستي",
        desc: "طريقة تقدير سريعة لقوة الوضعية دون بحث عميق، مفيدة لاتخاذ قرار فوري بتكلفة منخفضة على الأداء. تفعيلها يحسّن سرعة الاستجابة، لكنه لا يكفي وحده في المواقف المعقدة. على الأجهزة الضعيفة يُفضّل إبقاؤها مفعّلة لتقليل البطء."
      },
      minimax: {
        title: "خوارزمية Minimax",
        desc: "محرك بحث في شجرة الاحتمالات حتى عمق محدد. كلما زاد العمق زادت قوة اللعب ودقته، لكن الزمن المستغرق يزداد بشكل كبير. خيار «حرج فقط» يفعّل Minimax عند المواقف الحساسة لتقليل البطء. على الأجهزة الضعيفة/المتوسطة: عمق 2–3 مناسب. الأجهزة القوية يمكنها 4 فأعلى مع تقبّل تأخير محسوس."
      },
      mcts: {
        title: "خوارزمية MCTS",
        desc: "تجري محاكاة عشوائية متعددة لتقييم النقلات إحصائياً. زيادة عدد المحاكاة ترفع الجودة لكنها تستهلك وقتاً وطاقة معالجة. خيار «منتصف اللعب فقط» يحدّ التفعيل لمناطق اللعبة الأكثر تعقيداً. على الأجهزة الضعيفة يُنصح بـ 100–200 محاكاة؛ على الأقوى 300–500 مع تحمّل تأخير أكبر."
      },
      mauritanianStrategy: {
        title: "استراتيجية موريتانية",
        desc: "تفضيلات تكتيكية تحافظ على روح اللعب الموريتاني:"
      },
      "boostCol0.desc": "يشجّع التقدّم والهجوم عبر العمود 0. يزيد الضغط الهجومي لكنه قد يترك مناطق أخرى أقل حماية إن أُسرف فيه.",
      "lockCol8.desc": "يميل للدفاع والتحصين على العمود 8 لمنع الاختراق. يرفع الأمان لكنه قد يخفّض النشاط الهجومي ويزيد التعادلات.",
      "avoidFightCol8.desc": "يقلّل الاشتباكات المباشرة على العمود 8 لتجنّب المخاطرة في هذه المنطقة الحساسة. مفيد دفاعياً، لكنه قد يفوّت فرص ربح سريعة.",
      blendWeights: {
        title: "أوزان المزج",
        desc: "تحدد تأثير كل طبقة تقييم في القرار النهائي:"
      },
      blend: {
        policy: "يعكس اقتراح النموذج الأساسي (ONNX/JSON). رفعه يجعل اللعب أكثر اتساقاً مع أسلوب النموذج.",
        heur: "وزن التقييم الهيوريستي السريع. رفعه يزيد السرعة والعملية لكنه قد يقل دقّة في التعقيد.",
        mm: "وزن نتائج Minimax. رفعه يزيد العمق والدقة مقابل زمن أكبر.",
        mcts: "وزن نتائج المحاكاة. رفعه يحسّن الجودة في المواقف الغامضة مع كلفة زمنية."
      },
      timeBoost: {
        title: "زيادة الوقت في الحالات الحرجة",
        desc: "زمن إضافي يمنح للذكاء الاصطناعي تلقائياً عند المواقف الحساسة (ترقية وشيكة، أسر طويل، تهديد مباشر). يزيد القوة في اللحظات المهمة لكنه قد يسبب تأخيراً ملحوظاً. على الأجهزة الضعيفة اختر قيماً صغيرة أو عطّله."
      },
      timeCap: {
        title: "الحد الأقصى للوقت الإضافي",
        desc: "سقف زمني يمنع تراكم الانتظار حتى مع تشغيل الزيادات والبحث المتقدم. خفّضه لتقليل التأخير على الأجهزة الضعيفة، وارفعه إن كانت القوة أهم من السرعة."
      }
    },

    // ===================
    // Hint
    // ===================
    hint: {
      none: "لا يوجد تلميح متاح حالياً.",
    },

    // ===================
    // Log messages
    // ===================
    log: {
      forced: {
        openingStarted: "بدأت النقلات الإجبارية الافتتاحية.",
        openingEnded: "انتهت النقلات الإجبارية الافتتاحية.",
      },
      promote: "تتويج: ${cell} أصبح ظائم (${side}).",
      human: {
        updated: "تم تحديث نموذج JSON وحفظه محلياً.",
        exported: "تم تصدير نموذج JSON.",
        exportFail: "تعذر تصدير نموذج JSON.",
        merged: "تم تحميل ملف JSON الخارجي ودمجه مع النموذج المحلي.",
        localOnly: "فشل تحميل نموذج JSON الخارجي، تم استخدام النموذج المحلي فقط.",
        default: "لم يُعثر على نموذج خارجي أو محلي، تم إنشاء نموذج افتراضي.",
        loadFail: "تعذر تحميل نموذج JSON، تم إنشاء نموذج افتراضي.",
        exportMerged: "📤 تم تصدير نموذج شامل يحتوي على بيانات الملف الخارجي + بيانات التعلم الجديدة.",
        exportNew: "📤 تم تصدير نموذج يحتوي فقط على بيانات التعلم الجديدة (لا يوجد ملف خارجي).",
      },
      soufla: {
        remove: "سوفلة: إزالة ${cell}.",
        force: "سوفلة: إجبار ${from} على سلسلة (${path}).",
      },
      move: "حركة",
      capture: "حركة أسر",
      jump: "قفز",
      remove: "إزالة",
      ai: {
        started: "بدأت نماذج الذكاء الاصطناعي بالعمل.",
        failed: "لم يبدأ نموذج الذكاء الاصطناعي (فشل التحميل).",
        loaded: "تم تحميل ONNX.",
        loadFail: "فشل تحميل ONNX.",
      },
      settings: {
        applied: "تم تطبيق الإعدادات.",
        saved: "تم حفظ الإعدادات.",
      },
      save: {
        done: "تم حفظ الوضعية الحالية للعبة.",
        none: "لا يوجد لعبة محفوظة لاستئنافها.",
        resumed: "تم استئناف اللعبة.",
        error: "تعذر استئناف اللعبة.",
      },
      online: {
        started: "بدأت مباراة عبر الإنترنت.",
        ended: "انتهت مباراة عبر الإنترنت.",
        inviteSent: "تم إرسال دعوة.",
        inviteDeclined: "تم رفض الدعوة.",
        undoAccepted: "تم قبول التراجع.",
        undoDeclined: "تم رفض التراجع.",
        oppJump: "قفز الخصم",
        oppMove: "حركة الخصم",
      },
    },

    // ===================
    // Rules (Full Text) - (CORRECTED STRUCTURE)
    // ===================
     rules: {
        section1: {
            title: "أولاً: كيفية اللعب"
        },
        mode: {
            title: "الوضع:",
            desc: "اللعب ضد الحاسوب أو ضد لاعب عبر الإنترنت."
        },
        start: {
            title: "البداية:",
            desc: "توجد 10 نقلات افتتاحية إلزامية يُنبه عند مخالفتها، ويمكن اختيار من يبدأ أولاً."
        },
        movement: {
            title: "التحريك:",
            desc: "اختر القطعة ثم الهدف؛ إذا كانت النقلة غير قانونية فلن يحدث شيء."
        },
        capture: {
            title: "الأسر:",
            desc: "عند توفره اختر القطعة ثم مكان النزول واضغط \"إنهاء الأسر\"، ولا ينتقل الدور إلا بعد الضغط على هذا الزر."
        },
        chain: {
            title: "السلسلة:",
            desc: "عند وجود أسر لعدة قطع يجب تنفيذه خطوة بخطوة ثم الضغط على زر الإنهاء، ولا يسمح بتحديد بداية السلسلة ونهايتها فقط لتجنّب مساعدة اللاعب في معرفة طولها."
        },
        soufla: {
            title: "السوفلة:",
            desc: "إذا تجاهل الخصم الأسر أو لم يُكمل سلسلة الأسر الأطول، اضغط زر \"سوفلة\" لتظهر عقوبات (إزالة القطعة المخالفة أو إجباره على تنفيذ الأسر)، وإذا تعددت القطع المخالفة يمكنك اختيار واحدة منها."
        },
        computer: {
            title: "الحاسوب:",
            desc: "يطبق السوفلة تلقائياً ضدك، لكنه لا يطالب بها لصالحك إلا إذا ضغطت الزر."
        },
        settings: {
            title: "الإعدادات:",
            desc: "اختيار من يبدأ (أبيض/أسود)، تحديد مدة تفكير الحاسوب، تفعيل أو إلغاء إلزامية الأسر للحاسوب، واختيار الوضع البصري (فاتح/داكن)."
        },
        section2: {
            title: "ثانياً: القواعد الخاصة بالظامة الموريتانية"
        },
        board: {
            title: "الرقعة:",
            desc: "9 خطوط أفقية و9 عمودية و14 مائلاً تشكل 81 نقطة تقاطع، واللعب يتم على النقاط لا المربعات."
        },
        pieces: {
            title: "القطع:",
            desc: "40 قطعة لكل لاعب تملأ 80 نقطة مع ترك المركز فارغاً."
        },
        movementRules: {
            title: "الحركة:",
            desc: "القطعة تتحرك خطوة للأمام عمودياً أو مائلاً (حسب موقعها) ولا يسمح بالرجوع أو الحركة الجانبية، أما الظائم (الملك) فيتحرك بحرية بجميع الاتجاهات متجاوزاً عدة نقاط."
        },
        captureRules: {
            title: "الأسر:",
            desc: "بالقفز إلى خانة خلف الخصم، وهو غير إجباري لكن تجاهله يعد سوفلة."
        },
        souflaRules: {
            title: "السوفلة:",
            desc: "تعني تجاهل الأسر أو عدم تنفيذ سلسلة الأسر الأطول، ويعاقب عليها بإزالة القطعة المخالفة أو إجبارها على تنفيذ الأسر مع إعادة الحركة، وتطبق فقط على القطعة المخالفة؛ وإذا وُجدت عدة سلاسل يعتبر المخالف من يملك السلسلة الأطول."
        },
        promotion: {
            title: "التتويج:",
            desc: "عند الوصول للصف الأخير والاستقرار فيه، أما إذا وصلت ضمن سلسلة قتل تنتهي خارج الصف فلا تعتبر ظائمة بل يجب الاستقرار أولاً قبل انتقال الدور."
        },
        winConditions: {
            title: "الفوز والتعادل:",
            desc: "الفوز يكون بإزالة جميع قطع الخصم، والتعادل عند بقاء ظائم واحد لكل لاعب."
        }
    },


    // ===================
    // Online Play
    // ===================
    online: {
      title: "اللعب عبر الإنترنت",
      nickname: "الاسم المستعار",
      nicknameHint: "يمكن تركه فارغاً أو استخدام حروف/أرقام/رموز.",
      nicknamePh: "اسمك هنا",
      players: "اللاعبون المتصلون",
      refresh: "تحديث",
      noPlayers: "لا يوجد لاعب متصل حالياً.",
      status: {
        ai: "يلعب ضد الحاسوب",
        pvp: "يلعب ضد لاعب آخر",
        free: "متاح – لم يبدأ اللعب بعد",
      },
      invite: "دعوة لعب",
      inviteSent: "تم إرسال الدعوة.",
      incomingInvite: "يريد اللعب ضدك.",
      accept: "قبول",
      decline: "رفض",
      askUndo: "يريد التراجع عن النقلة الأخيرة، هل توافق؟",
      askUndoSent: "تم إرسال طلب التراجع.",
      endTitle: "إنهاء المباراة",
      endConfirm: "هل أنت متأكد من إنهاء المباراة الحالية؟",
    },
  },
  en: {
    // ===================
    // General & Metadata
    // ===================
    page_title: "Zamat Mauritanian Game",
    meta_description: "Play the traditional Mauritanian game of Zamat online for free against the computer or your friends, with rules and challenges explained.",
    meta_keywords: "Zamat game, mauritanian Dama, Zamma, Dhamet, Zamet, Zamma, Mauritanian checkers, Damat, desert games, nomadic games, strategy games, Mauritanian games, traditional games",
    schema_game_type: "Traditional Game",
    schema_game_name: "Zamat Mauritanian Game",
    schema_game_genre: "Strategy Game",
    schema_game_description: "Play the traditional Mauritanian game of Zamat online for free against the computer or your friends.",

    game: {
      title: "Zamat Mauritanian Game",
    },

    // ===================
    // UI and common
    // ===================
    ui: {
      language: "Language",
      stats: "Statistics",
      aiState: "AI Status:",
      noEndChain: "Cannot end the chain now.",
      noUndo: "No undo available.",
      inviteDeclined: "Invitation declined.",
      undoAccepted: "Undo request accepted.",
      undoDeclined: "Undo request declined.",
      reconnecting: "Connection lost — attempting to reconnect...",
      reconnectFailed: "Failed to reconnect to the server.",
    },
    players: {
      white: "⚪ White",
      black: "⚫ Black",
    },
    stats: {
      left: "Pieces Left",
      kings: "Kings",
      captured: "Captured",
    },
    status: {
      default: "...",
      draw: "The match ended in a draw",
      win: "Game Over – Winner:",
      turn: "Turn: ",
      forcedMove: "Forced Opening: The only allowed move is ${from}→${to}",
      online: "Online Play Mode",
      onlineEnded: "The online match has ended",
    },

    // ===================
    // Buttons
    // ===================
    buttons: {
      endKill: "End Capture",
      soufla: "Soufla",
      undo: "Undo",
      hint: "Hint",
      rules: "Instructions",
      settings: "Settings",
      newGame: "New Game",
      save: "Save Game",
      resume: "Resume Game",
      pickOnline: "Choose an Online Player",
      endOnline: "End Match",
      exportHuman: "Export JSON Model",
    },

    // ===================
    // Modals
    // ===================
    modals: {
      error: "Error",
      close: "Close",
      yes: "Yes",
      no: "No",
      apply: "Apply",
      save: "Save",
      cancel: "Cancel",
      applyPenalty: "Apply Penalty",
      gameOver: {
        winTitle: "🎉 Congratulations, you won!",
        winBody: "You have captured all of your opponent's pieces. Do you want to play a new game?",
        loseTitle: "GAME OVER",
        loseBody: "Your opponent has captured all of your pieces. Better luck next time! Do you want to play a new game?",
        drawTitle: "Draw",
        drawBody: "The match ended in a draw. Do you want to play a new game?",
      },
      forcedOpening: {
        title: "Forced Opening",
        body: "In the forced opening, there are 5 mandatory moves for each player that you must follow. After the opening moves are complete, you can move your pieces freely.<br><br>The current mandatory move is indicated by the red arrow.",
      },
      forcedOpeningOver: {
        title: "Forced Opening",
        body: "The opening moves are complete. You can now move your pieces freely.",
      },
      settings: {
        title: "Settings",
      },
      soufla: {
        titleSelf: "A 'Soufla' is available in your favor.",
        removeOne: "Remove one offending piece: ${cell}",
        forceOne: "Force a longer chain: ${cell} → ${path}",
        header: "Soufla",
        none: "No 'Soufla' in the computer's last move. The computer made a legal move.",
      },
      rules: {
        title: "📜 Rules of the Mauritanian Zamat Game",
      },
      hint: {
        title: "Hint",
        desc: "The suggested path is visually displayed on the board.",
      },
      undo: {
        title: "Undo",
        notAllowedTitle: "Undo Not Allowed",
        notAllowedBody: "Undo is not allowed during the mandatory opening moves.",
        confirm: "Are you sure you want to undo the last move?",
      },
      newGame: {
        title: "Start New Game",
        confirm: "Are you sure you want to end the current game and start a new one?",
      },
      online: {
        unavailableTitle: "Online Play",
        unavailableBody: "This feature is currently unavailable. It is under development.",
      },
      firstCaptureHint: {
        title: "Notice on How to Execute a Capture",
        line1: "To end the capture, you must click the End Capture button, shown in red in the sidebar. The turn will not pass to the other player until you press this button.",
        line2: "For a capture consisting of a sequence: you must perform the capture step by step, capturing each piece individually. Once all steps are completed, click the End Capture button to pass the turn to the other player. You cannot directly select the start and end of the sequence (to avoid revealing the full length of the sequence to the player).",
      },
    },

    // ===================
    // Settings screen
    // ===================
    settings: {
      thinkTime: "Think Time (ms)",
      unlimited: "Unlimited",
      aiCapture: "AI Mandatory Capture",
      mandatory: "Mandatory",
      random: "Random",
      theme: "Visual Theme",
      light: "Light",
      dark: "Dark",
      longFx: "Extended Effects",
      coords: "Show Coordinates",
      starter: "Who Starts",
      advanced: "Advanced Settings",
      heuristic: "Heuristic",
      minimax: "Minimax",
      depth: "Depth:",
      criticalOnly: "Critical Only",
      mcts: "MCTS",
      simulations: "Simulations:",
      midgameOnly: "Midgame Only",
      mauritanianStrategy: "Mauritanian Strategy",
      boostCol0: "Boost Column 0",
      lockCol8: "Lock Column 8",
      avoidFightCol8: "Avoid Fight on 8",
      blendWeights: "Blend Weights",
      policy: "Policy",
      heur: "Heur",
      mm: "MM",
      mcts_short: "MCTS",
      timeBoost: "Extra Time in Critical Situations (ms)",
      timeCap: "Maximum Extra Time (ms)",
      explain: "Explain Settings",
    },

    // ===================
    // Advanced Settings Help (CORRECTED STRUCTURE)
    // ===================
    help: {
      thinkTime: {
        title: "Think Time",
        desc: "The duration the computer waits before calculating and executing a move. Increasing the time often results in more accurate decisions, but delays play and can strain weaker devices. Short time = faster play but more mistakes. Long time = higher strength but noticeable slowdown, especially on older phones."
      },
      heuristic: {
        title: "Heuristic Evaluation",
        desc: "A quick method to estimate the strength of a position without deep search, useful for making immediate decisions at low performance cost. Enabling it improves responsiveness, but it alone is insufficient in complex situations. On weaker devices, it is recommended to keep it enabled to reduce lag."
      },
      minimax: {
        title: "Minimax Algorithm",
        desc: "A search engine through the game tree to a fixed depth. The deeper the search, the stronger and more accurate the play, but the time required increases significantly. 'Critical only' mode activates Minimax only in sensitive situations to reduce lag. On weak/medium devices: depth 2–3 is suitable. Strong devices can use 4 or more with noticeable delay."
      },
      mcts: {
        title: "MCTS Algorithm",
        desc: "Performs multiple random simulations to statistically evaluate moves. Increasing the number of simulations improves quality but consumes more time and processing power. 'Midgame only' mode limits activation to the most complex parts of the game. On weak devices, 100–200 simulations are recommended; on stronger ones, 300–500 with more delay tolerance."
      },
      mauritanianStrategy: {
        title: "Mauritanian Strategy",
        desc: "Tactical preferences that preserve the spirit of Mauritanian play:"
      },
      "boostCol0.desc": "Encourages advancing and attacking via column 0. Increases offensive pressure but may leave other areas less protected if overused.",
      "lockCol8.desc": "Favors defense and fortification on column 8 to prevent breakthroughs. Increases safety but may reduce offensive activity and increase draws.",
      "avoidFightCol8.desc": "Reduces direct engagements on column 8 to avoid risk in this sensitive area. Useful defensively, but may miss quick winning chances.",
      blendWeights: {
        title: "Blend Weights",
        desc: "Determines the influence of each evaluation layer in the final decision:"
      },
      blend: {
        policy: "Reflects the base model's suggestion (ONNX/JSON). Increasing it makes play more consistent with the model's style.",
        heur: "Weight of quick heuristic evaluation. Increasing it boosts speed and practicality but may reduce accuracy in complexity.",
        mm: "Weight of Minimax results. Increasing it boosts depth and accuracy at the cost of more time.",
        mcts: "Weight of simulation results. Increasing it improves quality in unclear situations with a time cost."
      },
      timeBoost: {
        title: "Extra Time in Critical Situations",
        desc: "Additional time automatically granted to the AI in sensitive situations (imminent promotion, long capture, direct threat). Increases strength in key moments but may cause noticeable delays. On weak devices, choose small values or disable."
      },
      timeCap: {
        title: "Maximum Extra Time",
        desc: "A time ceiling that prevents excessive waiting even with boosts and advanced search enabled. Lower it to reduce delays on weak devices, raise it if strength is more important than speed."
      }
    },

    // ===================
    // Hint
    // ===================
    hint: {
      none: "No hint is currently available.",
    },

    // ===================
    // Log messages
    // ===================
    log: {
      forced: {
        openingStarted: "The mandatory opening moves have started.",
        openingEnded: "The mandatory opening moves have ended.",
      },
      promote: "Promotion: ${cell} became a king (${side}).",
      human: {
        updated: "JSON model updated and saved locally.",
        exported: "JSON model exported.",
        exportFail: "Failed to export JSON model.",
        merged: "External JSON file loaded and merged with the local model.",
        localOnly: "Failed to load external JSON model, using local model only.",
        default: "No external or local model found, a default model was created.",
        loadFail: "Failed to load JSON model, a default model was created.",
        exportMerged: "📤 Exported a comprehensive model containing external file data + new learning data.",
        exportNew: "📤 Exported a model containing only new learning data (no external file).",
      },
      soufla: {
        remove: "Soufla: Removed ${cell}.",
        force: "Soufla: Forced ${from} into a chain (${path}).",
      },
      move: "Move",
      capture: "Capture Move",
      jump: "Jump",
      remove: "Remove",
      ai: {
        started: "AI models have started working.",
        failed: "AI model did not start (load failed).",
        loaded: "ONNX loaded.",
        loadFail: "ONNX failed to load.",
      },
      settings: {
        applied: "Settings applied.",
        saved: "Settings saved.",
      },
      save: {
        done: "The current game state has been saved.",
        none: "No saved game to resume.",
        resumed: "Game resumed.",
        error: "Failed to resume game.",
      },
      online: {
        started: "An online match has started.",
        ended: "The online match has ended.",
        inviteSent: "Invitation sent.",
        inviteDeclined: "Invitation declined.",
        undoAccepted: "Undo request accepted.",
        undoDeclined: "Undo request declined.",
        oppJump: "Opponent Jump",
        oppMove: "Opponent Move",
      },
    },

    // ===================
    // Rules (Full Text) - (CORRECTED STRUCTURE)
    // ===================
    rules: {
        section1: {
            title: "First: How to Play"
        },
        mode: {
            title: "Mode:",
            desc: "Play against the computer or against a player online."
        },
        start: {
            title: "Start:",
            desc: "There are 10 mandatory opening moves; a warning is given if violated. You can choose who starts first."
        },
        movement: {
            title: "Moving:",
            desc: "Select the piece, then the destination. If the move is illegal, nothing will happen."
        },
        capture: {
            title: "Capture:",
            desc: "When available, select the piece, then the landing spot, and press \"End Capture\". The turn does not pass until this button is pressed."
        },
        chain: {
            title: "Chain Capture:",
            desc: "When capturing multiple pieces, it must be done step-by-step, then press the \"End Capture\" button. You cannot just select the start and end of the chain to avoid helping the player know its length."
        },
        soufla: {
            title: "Soufla:",
            desc: "If the opponent ignores a capture or doesn't complete the longest capture chain, press the \"Soufla\" button to see penalties (remove the offending piece or force the capture). If there are multiple offending pieces, you can choose one."
        },
        computer: {
            title: "Computer:",
            desc: "The AI applies \"Soufla\" automatically against you, but it won't claim it for you unless you press the button."
        },
        settings: {
            title: "Settings:",
            desc: "Choose who starts (White/Black), set the computer's thinking time, enable/disable mandatory capture for the AI, and choose the visual theme (Light/Dark)."
        },
        section2: {
            title: "Second: Specific Rules of Mauritanian Zamat"
        },
        board: {
            title: "Board:",
            desc: "9 horizontal, 9 vertical, and 14 diagonal lines form 81 intersection points. Play is on the points, not the squares."
        },
        pieces: {
            title: "Pieces:",
            desc: "40 pieces for each player, filling 80 points with the center left empty."
        },
        movementRules: {
            title: "Movement:",
            desc: "A piece moves one step forward vertically or diagonally (depending on its position). Moving backward or sideways is not allowed. A king moves freely in all directions, crossing multiple points."
        },
        captureRules: {
            title: "Capture:",
            desc: "By jumping to a space behind an opponent's piece. It is not mandatory, but ignoring it is a \"Soufla\"."
        },
        souflaRules: {
            title: "Soufla:",
            desc: "Ignoring a capture or not completing the longest capture chain. The penalty is removing the offending piece or forcing it to perform the capture, with the move being reset. It applies only to the offending piece; if multiple chains exist, the player with the longest chain is considered the offender."
        },
        promotion: {
            title: "Promotion (Kinging):",
            desc: "When a piece reaches and settles on the last rank. If it reaches it as part of a capture chain that ends outside the last rank, it is not promoted; it must first settle there before the turn passes."
        },
        winConditions: {
            title: "Win and Draw:",
            desc: "A win is achieved by capturing all of the opponent's pieces. A draw occurs when only one king remains for each player."
        }
    },


    // ===================
    // Online Play
    // ===================
    online: {
      title: "Online Play",
      nickname: "Nickname",
      nicknameHint: "Can be left empty or use letters/numbers/symbols.",
      nicknamePh: "Your name here",
      players: "Online Players",
      refresh: "Refresh",
      noPlayers: "No players are currently online.",
      status: {
        ai: "Playing vs AI",
        pvp: "Playing vs Player",
        free: "Available - Not in a game",
      },
      invite: "Invite to Play",
      inviteSent: "Invitation sent.",
      incomingInvite: "wants to play against you.",
      accept: "Accept",
      decline: "Decline",
      askUndo: "wants to undo the last move, do you agree?",
      askUndoSent: "Undo request sent.",
      endTitle: "End Match",
      endConfirm: "Are you sure you want to end the current match?",
    },
  },
  fr: {
    // ===================
    // General & Metadata
    // ===================
    page_title: "Jeu de Zamat Mauritanien",
    meta_description: "Jouez gratuitement en ligne au jeu traditionnel mauritanien de Zamat contre l'ordinateur ou vos amis, avec explication des règles et des défis.",
    meta_keywords: "Jeu de Zamat, Dames mauritaniennes, Damat, Dhamet, Zamma, jeux du désert, jeux nomades, jeux de stratégie, jeux mauritaniens, jeux traditionnels",
    schema_game_type: "Jeu Traditionnel",
    schema_game_name: "Jeu de Zamat Mauritanien",
    schema_game_genre: "Jeu de Stratégie",
    schema_game_description: "Jouez gratuitement en ligne au jeu traditionnel mauritanien de Zamat contre l'ordinateur ou vos amis.",

    game: {
      title: "Jeu de Zamat Mauritanien",
    },

    // ===================
    // UI and common
    // ===================
    ui: {
      language: "Langue",
      stats: "Statistiques",
      aiState: "Statut de l'IA :",
      noEndChain: "Impossible de terminer la chaîne maintenant.",
      noUndo: "Aucune annulation disponible.",
      inviteDeclined: "Invitation refusée.",
      undoAccepted: "Demande d'annulation acceptée.",
      undoDeclined: "Demande d'annulation refusée.",
      reconnecting: "Connexion perdue — tentative de reconnexion...",
      reconnectFailed: "Échec de la reconnexion au serveur.",
    },
    players: {
      white: "⚪ Blanc",
      black: "⚫ Noir",
    },
    stats: {
      left: "Pièces restantes",
      kings: "Dames",
      captured: "Capturées",
    },
    status: {
      default: "...",
      draw: "La partie s'est terminée par un match nul",
      win: "Partie terminée – Vainqueur :",
      turn: "Tour de : ",
      forcedMove: "Ouverture forcée : Le seul coup autorisé est ${from}→${to}",
      online: "Mode de jeu en ligne",
      onlineEnded: "Le match en ligne est terminé",
    },

    // ===================
    // Buttons
    // ===================
    buttons: {
      endKill: "Fin de capture",
      soufla: "Soufla",
      undo: "Annuler",
      hint: "Indice",
      rules: "Instructions",
      settings: "Paramètres",
      newGame: "Nouvelle partie",
      save: "Sauvegarder",
      resume: "Reprendre",
      pickOnline: "Choisir un joueur en ligne",
      endOnline: "Terminer le match",
      exportHuman: "Exporter le modèle JSON",
    },

    // ===================
    // Modals
    // ===================
    modals: {
      error: "Erreur",
      close: "Fermer",
      yes: "Oui",
      no: "Non",
      apply: "Appliquer",
      save: "Enregistrer",
      cancel: "Annuler",
      applyPenalty: "Appliquer la pénalité",
      gameOver: {
        winTitle: "🎉 Félicitations, vous avez gagné !",
        winBody: "Vous avez capturé toutes les pièces de votre adversaire. Voulez-vous jouer une nouvelle partie ?",
        loseTitle: "PARTIE TERMINÉE",
        loseBody: "Votre adversaire a capturé toutes vos pièces. Meilleure chance la prochaine fois ! Voulez-vous jouer une nouvelle partie ?",
        drawTitle: "Match nul",
        drawBody: "La partie s'est terminée par un match nul. Voulez-vous jouer une nouvelle partie ?",
      },
      forcedOpening: {
        title: "Ouverture forcée",
        body: "Dans l'ouverture forcée, il y a 5 coups obligatoires pour chaque joueur que vous devez suivre. Une fois les coups d'ouverture terminés, vous pouvez déplacer vos pièces librement.<br><br>Le coup obligatoire actuel est indiqué par la flèche rouge.",
      },
      forcedOpeningOver: {
        title: "Ouverture forcée",
        body: "Les coups d'ouverture sont terminés. Vous pouvez maintenant déplacer vos pièces librement.",
      },
      settings: {
        title: "Paramètres",
      },
      soufla: {
        titleSelf: "Une 'Soufla' est disponible en votre faveur.",
        removeOne: "Retirer une pièce fautive : ${cell}",
        forceOne: "Forcer une chaîne plus longue : ${cell} → ${path}",
        header: "Soufla",
        none: "Pas de 'Soufla' dans le dernier coup de l'ordinateur. L'ordinateur a joué un coup légal.",
      },
      rules: {
        title: "📜 Règles du jeu de Zamat Mauritanien",
      },
      hint: {
        title: "Indice",
        desc: "Le chemin suggéré est affiché visuellement sur le plateau.",
      },
      undo: {
        title: "Annuler",
        notAllowedTitle: "Annulation non autorisée",
        notAllowedBody: "L'annulation n'est pas autorisée pendant les coups d'ouverture obligatoires.",
        confirm: "Êtes-vous sûr de vouloir annuler le dernier coup ?",
      },
      newGame: {
        title: "Commencer une nouvelle partie",
        confirm: "Êtes-vous sûr de vouloir terminer la partie actuelle et en commencer une nouvelle ?",
      },
      online: {
        unavailableTitle: "Jeu en ligne",
        unavailableBody: "Cette fonctionnalité est actuellement indisponible. Elle est en cours de développement.",
      },
      firstCaptureHint: {
        title: "Avertissement sur la manière d'exécuter la capture",
        line1: "Pour terminer la capture, vous devez appuyer sur le bouton Terminer la capture, situé en rouge dans la barre latérale. Le tour ne passera pas au joueur suivant tant que vous n'aurez pas appuyé sur ce bouton.",
        line2: "Pour une capture composée d'une chaîne : vous devez effectuer la capture étape par étape et capturer chaque pièce séparément. Une fois toutes les étapes terminées, appuyez sur le bouton Terminer la capture pour passer le tour au joueur suivant. Il n'est pas possible de sélectionner directement le début et la fin de la chaîne (afin d'éviter de révéler la longueur de la chaîne au joueur).",
      },
    },

    // ===================
    // Settings screen
    // ===================
    settings: {
      thinkTime: "Temps de réflexion (ms)",
      unlimited: "Illimité",
      aiCapture: "Capture obligatoire pour l'IA",
      mandatory: "Obligatoire",
      random: "Aléatoire",
      theme: "Thème visuel",
      light: "Clair",
      dark: "Sombre",
      longFx: "Effets étendus",
      coords: "Afficher les coordonnées",
      starter: "Qui commence",
      advanced: "Paramètres avancés",
      heuristic: "Heuristique",
      minimax: "Minimax",
      depth: "Profondeur :",
      criticalOnly: "Critique seulement",
      mcts: "MCTS",
      simulations: "Simulations :",
      midgameOnly: "Milieu de partie seulement",
      mauritanianStrategy: "Stratégie mauritanienne",
      boostCol0: "Renforcer colonne 0",
      lockCol8: "Bloquer colonne 8",
      avoidFightCol8: "Éviter combat sur 8",
      blendWeights: "Poids de mélange",
      policy: "Politique (Policy)",
      heur: "Heuristique",
      mm: "Minimax",
      mcts_short: "MCTS",
      timeBoost: "Temps supplémentaire en situations critiques (ms)",
      timeCap: "Temps supplémentaire maximum (ms)",
      explain: "Expliquer les paramètres",
    },

    // ===================
    // Advanced Settings Help (CORRECTED STRUCTURE)
    // ===================
    help: {
      thinkTime: {
        title: "Temps de réflexion",
        desc: "La durée pendant laquelle l'ordinateur attend avant de calculer et d'exécuter un coup. Augmenter le temps aboutit souvent à des décisions plus précises, mais retarde le jeu et peut surcharger les appareils moins puissants. Temps court = jeu plus rapide mais plus d'erreurs. Temps long = force plus élevée mais ralentissement notable, surtout sur les anciens téléphones."
      },
      heuristic: {
        title: "Évaluation Heuristique",
        desc: "Une méthode rapide pour estimer la force d'une position sans recherche approfondie, utile pour prendre des décisions immédiates à faible coût de performance. L'activer améliore la réactivité, mais elle seule est insuffisante dans les situations complexes. Sur les appareils moins puissants, il est recommandé de la laisser activée pour réduire le décalage."
      },
      minimax: {
        title: "Algorithme Minimax",
        desc: "Un moteur de recherche dans l'arbre de jeu jusqu'à une profondeur fixe. Plus la recherche est profonde, plus le jeu est fort et précis, mais le temps requis augmente considérablement. Le mode 'Critique seulement' active Minimax uniquement dans les situations sensibles pour réduire le décalage. Sur les appareils faibles/moyens : une profondeur de 2–3 est appropriée. Les appareils puissants peuvent utiliser 4 ou plus avec un retard notable."
      },
      mcts: {
        title: "Algorithme MCTS",
        desc: "Effectue plusieurs simulations aléatoires pour évaluer statistiquement les coups. Augmenter le nombre de simulations améliore la qualité mais consomme plus de temps et de puissance de traitement. Le mode 'Milieu de partie seulement' limite l'activation aux parties les plus complexes du jeu. Sur les appareils faibles, 100–200 simulations sont recommandées ; sur les plus puissants, 300–500 avec une plus grande tolérance au retard."
      },
      mauritanianStrategy: {
        title: "Stratégie Mauritanienne",
        desc: "Préférences tactiques qui préservent l'esprit du jeu mauritanien :"
      },
      "boostCol0.desc": "Encourage l'avancée et l'attaque via la colonne 0. Augmente la pression offensive mais peut laisser d'autres zones moins protégées si surutilisé.",
      "lockCol8.desc": "Favorise la défense et la fortification sur la colonne 8 pour empêcher les percées. Augmente la sécurité mais peut réduire l'activité offensive et augmenter les matchs nuls.",
      "avoidFightCol8.desc": "Réduit les engagements directs sur la colonne 8 pour éviter les risques dans cette zone sensible. Utile défensivement, mais peut manquer des occasions de victoire rapide.",
      blendWeights: {
        title: "Poids de Mélange",
        desc: "Détermine l'influence de chaque couche d'évaluation dans la décision finale :"
      },
      blend: {
        policy: "Reflète la suggestion du modèle de base (ONNX/JSON). L'augmenter rend le jeu plus cohérent avec le style du modèle.",
        heur: "Poids de l'évaluation heuristique rapide. L'augmenter améliore la vitesse et la praticité mais peut réduire la précision dans la complexité.",
        mm: "Poids des résultats de Minimax. L'augmenter améliore la profondeur et la précision au détriment de plus de temps.",
        mcts: "Poids des résultats de la simulation. L'augmenter améliore la qualité dans les situations incertaines avec un coût en temps."
      },
      timeBoost: {
        title: "Temps Supplémentaire en Situations Critiques",
        desc: "Temps additionnel accordé automatiquement à l'IA dans des situations sensibles (promotion imminente, longue capture, menace directe). Augmente la force dans les moments clés mais peut causer des retards notables. Sur les appareils faibles, choisissez des petites valeurs ou désactivez."
      },
      timeCap: {
        title: "Temps Supplémentaire Maximum",
        desc: "Un plafond de temps qui empêche une attente excessive même avec les boosts et la recherche avancée activés. Abaissez-le pour réduire les retards sur les appareils faibles, augmentez-le si la force est plus importante que la vitesse."
      }
    },

    // ===================
    // Hint
    // ===================
    hint: {
      none: "Aucun indice n'est disponible pour le moment.",
    },

    // ===================
    // Log messages
    // ===================
    log: {
      forced: {
        openingStarted: "Les coups d'ouverture obligatoires ont commencé.",
        openingEnded: "Les coups d'ouverture obligatoires sont terminés.",
      },
      promote: "Promotion : ${cell} est devenue une dame (${side}).",
      human: {
        updated: "Modèle JSON mis à jour et sauvegardé localement.",
        exported: "Modèle JSON exporté.",
        exportFail: "Échec de l'exportation du modèle JSON.",
        merged: "Fichier JSON externe chargé et fusionné avec le modèle local.",
        localOnly: "Échec du chargement du modèle JSON externe, utilisation du modèle local uniquement.",
        default: "Aucun modèle externe ou local trouvé, un modèle par défaut a été créé.",
        loadFail: "Échec du chargement du modèle JSON, un modèle par défaut a été créé.",
        exportMerged: "📤 Exportation d'un modèle complet contenant les données du fichier externe + nouvelles données d'apprentissage.",
        exportNew: "📤 Exportation d'un modèle contenant uniquement les nouvelles données d'apprentissage (pas de fichier externe).",
      },
      soufla: {
        remove: "Soufla : ${cell} retiré.",
        force: "Soufla : ${from} forcé dans une chaîne (${path}).",
      },
      move: "Mouvement",
      capture: "Mouvement de capture",
      jump: "Saut",
      remove: "Retrait",
      ai: {
        started: "Les modèles d'IA ont commencé à fonctionner.",
        failed: "Le modèle d'IA n'a pas démarré (échec du chargement).",
        loaded: "ONNX chargé.",
        loadFail: "Échec du chargement d'ONNX.",
      },
      settings: {
        applied: "Paramètres appliqués.",
        saved: "Paramètres sauvegardés.",
      },
      save: {
        done: "L'état actuel de la partie a été sauvegardé.",
        none: "Aucune partie sauvegardée à reprendre.",
        resumed: "Partie reprise.",
        error: "Échec de la reprise de la partie.",
      },
      online: {
        started: "Un match en ligne a commencé.",
        ended: "Le match en ligne est terminé.",
        inviteSent: "Invitation envoyée.",
        inviteDeclined: "Invitation refusée.",
        undoAccepted: "Demande d'annulation acceptée.",
        undoDeclined: "Demande d'annulation refusée.",
        oppJump: "Saut de l'adversaire",
        oppMove: "Mouvement de l'adversaire",
      },
    },

    // ===================
    // Rules (Full Text) - (CORRECTED STRUCTURE)
    // ===================
    rules: {
        section1: {
            title: "Premièrement : Comment jouer"
        },
        mode: {
            title: "Mode :",
            desc: "Jouez contre l'ordinateur ou contre un joueur en ligne."
        },
        start: {
            title: "Début :",
            desc: "Il y a 10 coups d'ouverture obligatoires ; un avertissement est donné en cas de violation. Vous pouvez choisir qui commence en premier."
        },
        movement: {
            title: "Déplacement :",
            desc: "Sélectionnez la pièce, puis la destination. Si le coup est illégal, rien ne se passera."
        },
        capture: {
            title: "Capture :",
            desc: "Lorsqu'elle est disponible, sélectionnez la pièce, puis la case d'atterrissage, et appuyez sur \"Fin de capture\". Le tour ne passe pas tant que ce bouton n'est pas pressé."
        },
        chain: {
            title: "Prise en chaîne :",
            desc: "Lors de la capture de plusieurs pièces, cela doit être fait étape par étape, puis appuyez sur le bouton \"Fin de capture\". Vous ne pouvez pas simplement sélectionnez le début et la fin de la chaîne pour ne pas aider le joueur à connaître sa longueur."
        },
        soufla: {
            title: "Soufla :",
            desc: "Si l'adversaire ignore une capture ou ne complète pas la plus longue chaîne de capture, appuyez sur le bouton \"Soufla\" pour voir les pénalités (retirer la pièce fautive ou forcer la capture). S'il y a plusieurs pièces fautives, vous pouvez en choisir une."
        },
        computer: {
            title: "Ordinateur :",
            desc: "L'IA applique la \"Soufla\" automatiquement contre vous, mais ne la réclamera pas pour vous à moins que vous n'appuyiez sur le bouton."
        },
        settings: {
            title: "Paramètres :",
            desc: "Choisissez qui commence (Blanc/Noir), définissez le temps de réflexion de l'ordinateur, activez/désactivez la capture obligatoire pour l'IA, et choisissez le thème visuel (Clair/Sombre)."
        },
        section2: {
            title: "Deuxièmement : Règles spécifiques du Zamat Mauritanien"
        },
        board: {
            title: "Plateau :",
            desc: "9 lignes horizontales, 9 verticales et 14 diagonales forment 81 points d'intersection. Le jeu se déroule sur les points, pas sur les cases."
        },
        pieces: {
            title: "Pièces :",
            desc: "40 pièces pour chaque joueur, remplissant 80 points avec le centre laissé vide."
        },
        movementRules: {
            title: "Mouvement :",
            desc: "Une pièce se déplace d'une case en avant verticalement ou en diagonale (selon sa position). Le déplacement en arrière ou sur le côté n'est pas autorisé. Une dame se déplace librement dans toutes les directions, traversant plusieurs points."
        },
        captureRules: {
            title: "Capture :",
            desc: "En sautant vers une case derrière la pièce d'un adversaire. Ce n'est pas obligatoire, mais l'ignorer est une \"Soufla\"."
        },
        souflaRules: {
            title: "Soufla :",
            desc: "Ignorer une capture ou ne pas compléter la plus longue chaîne de capture. La pénalité est de retirer la pièce fautive ou de la forcer à effectuer la capture, le coup étant réinitialisé. Cela ne s'applique qu'à la pièce fautive ; si plusieurs chaînes existent, le joueur avec la plus longue chaîne est considéré comme le fautif."
        },
        promotion: {
            title: "Promotion (Damation) :",
            desc: "Lorsqu'une pièce atteint et s'installe sur la dernière rangée. Si elle l'atteint dans le cadre d'une chaîne de capture qui se termine en dehors de la dernière rangée, elle n'est pas promue ; elle doit d'abord s'y installer avant que le tour ne passe."
        },
        winConditions: {
            title: "Victoire et Nul :",
            desc: "Une victoire est obtenue en capturant toutes les pièces de l'adversaire. Un match nul se produit lorsqu'il ne reste qu'une seule dame pour chaque joueur."
        }
    },


    // ===================
    // Online Play
    // ===================
    online: {
      title: "Jeu en ligne",
      nickname: "Pseudo",
      nicknameHint: "Peut être laissé vide ou utiliser des lettres/chiffres/symboles.",
      nicknamePh: "Votre nom ici",
      players: "Joueurs en ligne",
      refresh: "Actualiser",
      noPlayers: "Aucun joueur n'est actuellement en ligne.",
      status: {
        ai: "Joue contre l'IA",
        pvp: "Joue contre un joueur",
        free: "Disponible - Pas en jeu",
      },
      invite: "Inviter à jouer",
      inviteSent: "Invitation envoyée.",
      incomingInvite: "veut jouer contre vous.",
      accept: "Accepter",
      decline: "Refuser",
      askUndo: "veut annuler le dernier coup, êtes-vous d'accord ?",
      askUndoSent: "Demande d'annulation envoyée.",
      endTitle: "Terminer le match",
      endConfirm: "Êtes-vous sûr de vouloir terminer le match actuel ?",
    },
  },
};