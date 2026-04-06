const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (26 سؤال)
    { "q": "لتفعيل مرحلة الظهور الحكومي يجب على الدولة التوسع في توفير وسائل الاتصال بالإنترنت والهاتف الجوال في مختلف أرجاء البلاد.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "كثرة استخدام مؤثرات الحركة في نفس العرض تشعر الحاضرين للعرض بالملل والرتابة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعتبر عملية عقد المؤتمرات عن بعد بديلاً عن الاجتماع وجهاً لوجه.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "من مزايا الخدمات الإلكترونية إمكانية إنجازها على مدار الساعة في أي وقت ومن أي مكان تتاح فيه وسائل الاتصالات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم تمييز أي ملف بامتداد رمزي معين من قبل البرنامج المنتج له.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن إضافة صوت مصاحب للحركة الانتقالية للشريحة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن استخدام برنامج بوربوينت لتسجيل الصوت وتخزينه في ملف صوتي والاستماع إليه من خلال شرائح العرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الاستعانة بالوسائط المتعددة ضمن العروض التقديمية يجعل المتلقي أقل تركيزاً وانتباهاً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "المؤثرات الانتقالية هي مؤثرات حركية تتعلق بتسلسل ظهور العنصر واتجاه حركته.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "في برنامج بوربوينت من الممكن إدراج مجلدات بها صور إلى شرائح العرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "جرائم الحاسوب هي أي جرائم يكون الحاسوب فيها طرفاً كوسيلة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يعد الاطلاع وتبادل المعلومات الشخصية أمراً قانونياً عندما يتعلق الأمر بمسألة الإضرار بالمصلحة العامة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتمثل أمن الشبكات والاتصالات في تأمين وصول بيانات الشبكة إلى أماكن توجيهها في الوقت المناسب.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تتميز البرمجيات التجارية بأنه يمكن استغلالها أو تعديلها وتطويرها لتعمل بصورة مغايرة لشكلها الأصلية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "ظهر مصطلح الوسائط المتعددة بعد التطور الكبير في تقنيات الحاسوب سواء من حيث سرعة المعالجة أو السعة التخزينية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تقوم الفيروسات بنسخ نفسها من حاسوب لآخر سواء عبر الأقراص المتبادلة أو عبر شبكات الاتصال بين الحواسيب.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن إضافة مؤثرات الحركة إلى النصوص فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تساعد الوسائط المتعددة في تعزيز قدرة الإنسان على التعامل مع المعلومات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الجدار الناري هو برنامج لحماية الحاسوب من الفيروسات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "التوقيع الإلكتروني يستخدم للتحقق من هوية المرسل.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن استخدام كلمة العبور البسيطة مثل تاريخ الميلاد لحماية الحسابات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "البرمجيات مفتوحة المصدر يمكن تعديلها وتطويرها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الحكومة الإلكترونية تساعد في تقليل الفساد الإداري.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "مؤثرات الحركة تجعل العرض التقديمي أكثر حيوية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن إدراج ملفات فيديو في شرائح البوربوينت.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "النسخ غير القانوني للبرامج يعتبر قرصنة.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (30 سؤال)
    { "q": "أي مما يلي ليس من مكونات الشاشة الرئيسية لبرنامج العروض التقديمية (PowerPoint)?", "options": ["لوحة كتابة الملاحظات", "لوحة تجهيز الشريحة", "إرسال وتدليل شريحة العرض", "مساحة المخطط التفصيلي للعرض"], "answer": 2 },
    { "q": "أي مما يلي هو امتداد مميز لملفات الصور?", "options": ["BMP", "WMV", "WMA", "MP3"], "answer": 0 },
    { "q": "تساهم الألعاب التعليمية للأطفال التي تعتمد على الوسائط المتعددة في:", "options": ["زيادة حدة البصر", "تنمية الذكاء", "صعوبة الفهم", "رتابة الشرح"], "answer": 1 },
    { "q": "رمز يظهر على الشريحة للدلالة على احتواء الشريحة على ملف صوتي:", "options": ["نجمة صفراء", "وجه ضاحك", "مربع نص", "مكبر الصوت"], "answer": 3 },
    { "q": "تشمل معاملات الحكومة الإلكترونية:", "options": ["البريد الإلكتروني", "التوظيف الإلكتروني", "تكامل الخدمات", "صيانة الإلكترونيات"], "answer": 2 },
    { "q": "عملية نسخ البرامج واستخدامها بدون دفع ثمنها للشركة أو الشخص الذي قام بتصنيع البرنامج تسمى بـ:", "options": ["قرصنة البرمجيات", "حماية البرمجيات", "النسخ المشروع للبرمجيات", "رخصة البرمجيات"], "answer": 0 },
    { "q": "استنساخ الكتب والمؤلفات الإلكترونية بأنواعها وإعادة نشرها بأسماء أخرى دون ذكر مؤلفها الأصليين يُعد من:", "options": ["طرق دعم البحث العلمي", "المنافسة التجارية بين الشركات", "الاستغلال غير القانوني يعاقب عليه القانون", "طرق تعزيز الملكية الفكرية"], "answer": 2 },
    { "q": "تطبيق للوسائط المتعددة يقوم على تجهيز نماذج تشبيهية للتعامل معها وكأنها نماذج طبيعية:", "options": ["عقد المؤتمرات عن بُعد", "التدريب الافتراضي", "الصحافة الإلكترونية", "التعلم الإلكتروني"], "answer": 1 },
    { "q": "مقاطع صوتية قصيرة تُعد لإظهار أصوات شائعة:", "options": ["نصوص تظهر في المخطط التفصيلي", "ملفات صوتية مخزنة على الحاسوب", "تسجيل صوتي بواسطة برنامج بوربوينت", "قصاصة صوتية جاهزة"], "answer": 3 },
    { "q": "يتم تجهيز الصور الثابتة بواسطة:", "options": ["القلم الضوئي", "الماسح الضوئي", "شاشة العرض", "الطابعة"], "answer": 1 },
    { "q": "أي مما يلي ليس من وسائل التحقق من هويات المستخدمين:", "options": ["بصمة الإصبع", "كلمات العبور", "فصيلة الدم", "تمييز قرنية العين"], "answer": 2 },
    { "q": "تكمن أهمية الحكومة الإلكترونية للبلدان النامية في:", "options": ["كشف وتقليل الفساد الإداري", "عدم توفر منصة لمحاسبة المسؤولين", "غياب معايير الشفافية", "صعوبة إنجاز معاملات المواطنين"], "answer": 0 },
    { "q": "يمكن للمواطنين تلقي الردود حول نواقص استكمال المعاملات ويعد هذا من ميزات مرحلة:", "options": ["النشر الإلكتروني", "التفاعل وتبادل البيانات", "تكامل الخدمات وإنجاز المعاملات", "الظهور الحكومي"], "answer": 1 },
    { "q": "توفر قنوات لإنجاز الخدمات الإلكترونية المختلفة عبر تقنية المعلومات والاتصالات:", "options": ["الخصوصية", "الشفافية", "الحكومة الإلكترونية", "الحكومة التقليدية"], "answer": 2 },
    { "q": "من أعراض الإصابة بالفيروسات:", "options": ["تضخم حجم بعض الملفات", "ازدياد السعة التخزينية للذاكرة الرئيسية", "التحديث التلقائي لبرامج نظم التشغيل", "التغير التلقائي لخلفيات سطح المكتب"], "answer": 0 },
    { "q": "مؤثرات حركية يمكن إضافتها على عناصر الشريحة أثناء عرضها لأول مرة على الشريحة:", "options": ["تحديد مسار الحركة", "حركة الدخول", "حركة الخروج", "تحديد العرض"], "answer": 1 },
    { "q": "يمكن تحديد وتعديل الحركات الانتقالية للشرائح من خلال تبويب:", "options": ["حركات", "عرض", "تأثيرات", "تصميم"], "answer": 0 },
    { "q": "من وسائل تأمين البيانات المرسلة عبر الشبكات:", "options": ["برامج مكافحة الفيروسات", "برامج بدء التشغيل", "تشفير المعلومات", "جدار ناري"], "answer": 2 },
    { "q": "لإضافة مؤثرات حركة خاصة لأحد عناصر الشريحة، من خلال تبويب حركات ننقر على الخيار:", "options": ["حركة مخصصة", "انتقالات", "مؤثرات الحركة", "تأثيرات التحرير"], "answer": 0 },
    { "q": "من سمات مرحلة تكامل الخدمات وإنجاز المعاملات:", "options": ["تجنيب المواطنين اللجوء لمراجعة كل دائرة حكومية على حدة", "زيادة عدد المواقع الحكومية كلاً ونوعاً", "الحصول على المعلومات الحكومية دون إمكانية إرسال أي معلومات", "التفاعل المباشر بين المواطن والإدارة الحكومية"], "answer": 0 },
    { "q": "أحد مؤشرات الشفافية التي تميز الحكومات الديمقراطية:", "options": ["نشر برمجيات رقابية مجانية", "عرض المعلومات الشخصية للجميع", "تعزيز ثقافة سرية أنشطة الحكومة", "الحصول على المعلومات المملوكة للدولة"], "answer": 3 },
    { "q": "يمكن إضافة أي من المكونات والوسائط المتعددة للشريحة عن طريق:", "options": ["التمييز على لوحة كتابة الملاحظات", "الرموز التي تظهر وسط الشريحة", "تحديد تأثيرات التحرير", "علامة تبويب إدراج"], "answer": 3 },
    { "q": "إرسال رسائل بريد إلكتروني إلى الأشخاص والمجموعات البريدية تحتوي على معلومات أو فضائح مالية أو سلوكية مشتركة هي إحدى طرق:", "options": ["التشهير الإلكتروني", "الاصطياد الإلكتروني", "الصحافة الإلكترونية", "النشر الإلكتروني"], "answer": 0 },
    { "q": "عند إضافة مؤثرات حركية لعناصر الشريحة فإنها تعرض:", "options": ["وفق تسلسل معين", "مباشرة على الشريحة", "في آن واحد", "كل عنصر مستقل في شريحة"], "answer": 0 },
    { "q": "يعد معدل وصول الإنترنت للمنازل من تحديات تطبيق الحكومة الإلكترونية:", "options": ["البشرية", "السياسية", "العالمية", "الفنية"], "answer": 3 },
    { "q": "برمجيات ليست مجانية ولكن يمكن استغلالها لعدد من مرات الاستخدام مجاناً:", "options": ["مجانية", "تجارية", "مفتوحة المصدر", "تجريبية"], "answer": 3 },
    { "q": "تقنية يمكن من خلالها بناء نظم معلوماتية يتم فيها المزج بين البيانات النصية والسمعية والمرئية:", "options": ["الشهادة الرقمية", "الوسائط المتعددة", "الحكومة الإلكترونية", "المزج الصوتي"], "answer": 1 },
    { "q": "مجموعة من البرمجيات والأجهزة التي تمثل الحد الفاصل أو الوسيط بين شبكة معلومات وأخرى تتواصل معها:", "options": ["تشفير المعلومات", "الصفات الشخصية", "الجدار الناري", "حماية البرمجيات"], "answer": 2 },
    { "q": "تشمل لوائح أمن قواعد البيانات:", "options": ["توفير أقصى درجات السرية للبيانات", "ضمان إتاحة الوصول للبيانات من قبل المخولين", "توضيح الثغرات الأمنية الموجودة", "عدم إمكانية الوصول للبيانات لأي سبب"], "answer": 1 },
    { "q": "تكمن أهمية الوسائط المتعددة في أنها:", "options": ["تعزز قدرة الإنسان على التعامل واستيعاب المعلومات", "تنشئ فرص استيعاب حجم أقل من البيانات", "تمكن فرصة فهم معلومات بسيطة", "متقدمة على فهم واستيعاب المعلومات المكتوبة نصاً"], "answer": 0 },
    { "q": "عند إضافة مؤثرات الحركة يتم أولاً:", "options": ["اختيار العنصر المراد التحكم في ظهوره", "تحديد اتجاه ظهور العنصر على الشريحة", "تحديد نوع الحركة المخصصة المطلوبة", "اختيار نوع مؤثر الحركة المراد تطبيقه"], "answer": 0 },
    { "q": "التفاعلات التي تتم بين الحكومة والأسواق تندرج تحت التفاعلات بين:", "options": ["الحكومة إلى المواطن", "القطاع الخاص إلى الحكومة", "الحكومة إلى الحكومة", "القطاع الخاص إلى المواطن"], "answer": 1 },
    { "q": "الفرق بين حصان طروادة والفيروسات:", "options": ["ينتقل مع البرامج التطبيقية", "يصيب برامج بدء التشغيل", "يصيب الشبكات", "لا ينتقل ذاتياً"], "answer": 3 },
    { "q": "للتصديق على صحة بيانات المعاملات الإلكترونية يجب إنشاؤها بـ:", "options": ["دليل الإثبات المادي", "رقم بطاقة الائتمان", "التوقيع الإلكتروني", "التوقيع الدوري"], "answer": 2 },
    { "q": "إحدى أدوات العرض التي يمكن من خلالها مشاهدة الوسائط النصية والرسومية وكذلك أفلام الفيديو:", "options": ["بطاقة الصوت", "شاشة العرض", "الماسح الضوئي", "السماعات"], "answer": 1 },
    { "q": "لإضافة عنصر وسائط متعددة إلى شريحة عرض، علينا الذهاب إلى علامة تبويب:", "options": ["الصفحة الرئيسية", "عرض الشرائح", "تصميم", "إدراج"], "answer": 3 },
    { "q": "يمكن إزاحة صورة داخل شريحة العرض باستخدام الفأرة بطريقة:", "options": ["النقر على وسط الصورة", "التأشير على الصورة", "النقر المزدوج على الصورة", "السحب والإفلات للصورة"], "answer": 3 },
    { "q": "وثيقة تحكم استعمال أو إعادة توزيع البرمجيات المحمية بحقوق النسخ:", "options": ["الملكية الفكرية", "الشفافية", "رخصة البرمجيات", "الشهادة الرقمية"], "answer": 2 },
    { "q": "لإضافة مؤثرات تتعلق بتكبير أو تصغير العنصر داخل الشريحة فإننا نستخدم مؤثر:", "options": ["الخروج", "التحريك", "الدخول", "الإنهاء"], "answer": 2 },
    { "q": "صممت برمجيات العروض التقديمية لـ:", "options": ["تسيير مهمة المتحدثين", "تحضير النصوص للطباعة", "إقناع المستمعين", "جعل الحديث بطيئاً"], "answer": 2 }
];
// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 56;
const EXAM_DURATION_MINUTES = 60;
// ========================================

// --- دالة اختيار أسئلة عشوائية بدون تكرار ---
function getRandomQuestions(questionsArray, count) {
    const shuffled = [...questionsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
}

// --- اختيار الأسئلة ---
let questions;
if (fullQuestionBank.length > REQUIRED_QUESTIONS_COUNT) {
    questions = getRandomQuestions(fullQuestionBank, REQUIRED_QUESTIONS_COUNT);
    console.log(`✅ تم اختيار ${questions.length} سؤال عشوائي من أصل ${fullQuestionBank.length}`);
} else {
    questions = [...fullQuestionBank];
    console.log(`📋 عدد الأسئلة (${questions.length}) أقل من أو يساوي ${REQUIRED_QUESTIONS_COUNT}، تم عرض جميع الأسئلة`);
}

// --- خلط الأسئلة المختارة ---
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleQuestions(questions);

// --- عرض عدد الأسئلة للمستخدم ---
const questionsCountDisplay = document.createElement("div");
questionsCountDisplay.id = "questions-count";
questionsCountDisplay.style.cssText = "background: #2196F3; color: white; padding: 12px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: bold; font-size: 16px;";
questionsCountDisplay.innerHTML = `📋 عدد أسئلة الاختبار: ${questions.length} سؤال | ⏱️ مدة الاختبار: ${EXAM_DURATION_MINUTES} دقيقة`;
const container = document.querySelector('.container');
if (container) {
    container.insertBefore(questionsCountDisplay, container.firstChild);
}

// --- إنشاء شريط المؤقت ---
const timerDisplay = document.createElement("div");
timerDisplay.id = "timer-box";
timerDisplay.style.cssText = "background: #4CAF50; color: white; padding: 12px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: bold; font-size: 18px; font-family: monospace;";
if (container) {
    container.insertBefore(timerDisplay, container.firstChild);
}

// --- متغيرات المؤقت ---
let timeInSeconds = EXAM_DURATION_MINUTES * 60;
let timerInterval = null;
let isTimeEnded = false;

// --- دالة تحديث عرض المؤقت ---
function updateTimerDisplay() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    if (timeInSeconds <= 300) {
        timerDisplay.style.background = "#f44336";
        timerDisplay.style.animation = "blink 1s infinite";
    } else if (timeInSeconds <= 600) {
        timerDisplay.style.background = "#ff9800";
    } else {
        timerDisplay.style.background = "#4CAF50";
    }
    
    timerDisplay.innerHTML = `⏱️ الوقت المتبقي: ${minutes}:${seconds}`;
}

// --- دالة بدء المؤقت ---
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(function() {
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isTimeEnded = true;
            timerDisplay.innerHTML = "⏰ انتهى الوقت! تم إرسال الإجابات تلقائياً.";
            timerDisplay.style.background = "#d32f2f";
            autoSubmitQuiz();
        } else {
            timeInSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

// --- دالة إيقاف المؤقت ---
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// --- دالة الإرسال التلقائي عند انتهاء الوقت ---
function autoSubmitQuiz() {
    if (isTimeEnded) return;
    isTimeEnded = true;
    
    const nameField = document.getElementById("name");
    if (!nameField.value.trim()) {
        nameField.value = "طالب (انتهى الوقت)";
    }
    alert("⏰ انتهى وقت الاختبار! سيتم سحب الورقة وإرسال الإجابات الحالية.");
    performFinalSubmit(true);
}

// --- بناء واجهة الأسئلة ---
const quizContainer = document.getElementById("questions");
if (quizContainer) {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.id = `question-${index}`;
        questionDiv.innerHTML = `<div class="question-text"><strong>${index + 1}.</strong> ${question.q}</div>`;
        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("options-container");
        question.options.forEach((option, i) => {
            optionsContainer.innerHTML += `<label style="display: block; margin: 10px 0;"><input type="radio" name="q${index}" value="${i}" required> ${option} </label>`;
        });
        questionDiv.appendChild(optionsContainer);
        quizContainer.appendChild(questionDiv);
    });
}

// --- دالة تصحيح الإجابات ---
function highlightCorrectAnswers() {
    questions.forEach((q, index) => {
        const correctValue = q.answer;
        const labels = document.querySelectorAll(`#question-${index} label`);
        
        labels.forEach((label, i) => {
            label.style.backgroundColor = "transparent";
            label.style.borderRadius = "5px";
            label.style.padding = "5px";
            
            if (i === correctValue) {
                label.style.backgroundColor = "#90EE90";
                label.style.border = "2px solid #228B22";
                label.style.padding = "5px";
                label.style.borderRadius = "5px";
            }
        });
    });
}

// --- معالجة زر الإرسال اليدوي ---
const submitBtn = document.getElementById("submit-btn");
if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        if (isTimeEnded) {
            alert("⏰ انتهى الوقت! لا يمكنك الإرسال يدوياً.");
            return;
        }
        
        const name = document.getElementById("name").value.trim();
        if (!name) { 
            alert("يرجى إدخال الاسم"); 
            document.getElementById("name").focus();
            return; 
        }

        let firstUnansweredIndex = -1;
        let unansweredCount = 0;

        questions.forEach((_, i) => {
            if (!document.querySelector(`input[name="q${i}"]:checked`)) {
                unansweredCount++;
                if (firstUnansweredIndex === -1) firstUnansweredIndex = i;
            }
        });

        if (unansweredCount > 0) {
            const confirmMsg = `⚠️ تنبيه: نسيتم الإجابة عن (${unansweredCount}) سؤال من أصل ${questions.length} سؤال.\n\nهل تريد الإرسال وتتحمل مسؤولية نقص الإجابات؟\n\n(موافق للإرسال / إلغاء للذهاب لأول سؤال ناقص)`;
            
            if (!confirm(confirmMsg)) {
                const unansweredQuestion = document.getElementsByClassName("question")[firstUnansweredIndex];
                if (unansweredQuestion) {
                    unansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    unansweredQuestion.style.backgroundColor = "#fff3cd"; 
                    setTimeout(() => unansweredQuestion.style.backgroundColor = "transparent", 2500);
                }
                return; 
            }
        } else {
            if (!confirm("✅ هل أنت متأكد من تسليم الإجابات الآن؟")) return;
        }

        performFinalSubmit(false); 
    });
}

// --- تنفيذ الإرسال النهائي ---
function performFinalSubmit(isAuto) {
    stopTimer();
    
    const submitBtn = document.getElementById("submit-btn");
    const name = document.getElementById("name").value.trim();
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "جاري الحفظ...";
    }

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });

    const total = questions.length;
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `<h3>✅ تم استلام الإجابات</h3><p>${name}، نتيجتك: ${score} من ${total}</p>`;
    }
    
    const correctBtn = document.getElementById("correct-btn");
    if (correctBtn) correctBtn.style.display = "block";

    sendData(name, score, total, isAuto);
}

function sendData(name, score, total, isAuto) {
    const status = isAuto ? "🔴 تلقائي (انتهاء الوقت)" : "🟢 يدوي";
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const msg = `الحالة: ${status}%0Aالطالب: ${name}%0Aالنتيجة: ${score}/${total}`;
    
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${msg}`).catch(error => console.error("خطأ في الإرسال لتليجرام:", error));

    const scriptURL = "https://script.google.com/macros/s/AKfycbwajDJ0QqcUVyUaD8VNl1axjuSjxgRECp5KIeTaRxpF7p47-Wf3eqa_ACMg5CPb5ObE8Q/exec"; 
    fetch(`${scriptURL}?name=${encodeURIComponent(name)}&score=${encodeURIComponent(score + " / " + total)}`, { method: 'GET', mode: 'no-cors' })
    .then(() => alert("✅ تم حفظ النتيجة في سجل المدرسة بنجاح."))
    .catch(error => console.error("خطأ في الإرسال:", error));
}

// --- إضافة حدث لزر التصحيح ---
const correctBtn = document.getElementById("correct-btn");
if (correctBtn) {
    correctBtn.addEventListener("click", function () {
        highlightCorrectAnswers();
        alert("✅ تم تظليل الإجابات الصحيحة باللون الأخضر!");
    });
}

// --- إضافة تأثير وميض للمؤقت ---
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.7; }
        100% { opacity: 1; }
    }
    #timer-box {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// --- بدء الاختبار فور تحميل الصفحة ---
window.onload = function() {
    startTimer();
    console.log("🚀 تم بدء الاختبار بنجاح!");
    console.log(`📊 عدد الأسئلة: ${questions.length} سؤال`);
    console.log(`⏱️ المدة المتبقية: ${EXAM_DURATION_MINUTES} دقيقة`);
};