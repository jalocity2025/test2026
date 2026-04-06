// --- الجزء الأول: بنك الأسئلة (48 سؤال مستخرج من الصور) ---
const allQuestions = [
    // أسئلة الصواب أو الخطأ (10 أسئلة)
    { "q": "تقوم البوابة الإلكترونية للدولة بربط المواطنين مباشرة مع مواقع الوزارات والمؤسسات الحكومية بكافة أنواعها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يعمل الماسح الضوئي على نقل الصور والرسوم من صيغتها الرقمية إلى صيغة ورقية يمكن تخزينها وعرضها بواسطة الحاسوب.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يمكننا تحديد نمط العرض لطلب صوتي بالعرض التقديمي إما تشغيله تلقائياً أو بالنقر على أي زر أثناء العرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكننا إضافة بيانات تصنيفية لشريحة عرض في برنامج البروبونيت عن طريق النقر على أحد مراعاة الكتابة الموجودة بلوحة تجميع الشريحة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكننا التحكم بحجم مساحة عرض الفيديو بشريحة عرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الوسائل المتعددة هي تقنية يمكن من خلالها بناء نظم معلوماتية يتم فيها المزج بين البيانات النصية والسمعية والمرئية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يقصد بأمن البرمجيات التطبيقية قدرتها على تحديد الأشخاص المخولين باستخدامها ومنع غيرهم.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن إدراج صورة  لشريحة العرض عبر برنامج البوربونيت بأكثر من طريقة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمثل إصدار أذوات العمل  إلكترونياً نموذجاً من خدمات ومعاملات الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يعد رياض الأطفال أقل المجالات التعليمية استفادة من إمكانيات الوسائل المتعددة.", "options": ["صح", "خطأ"], "answer": 1 },
    
    // أسئلة إضافية (صح/خطأ)
    { "q": "الفيروسات WORM (Worm Virus) لا تسبب ضرراً للملفات بل تتسبب في تعطل الشبكة وتوقفها عن العمل.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "إصدار الأصوات المختلفة التي تحتويها ملفات الصوت بأنواعها هي مهمة الماسح الضوئي.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عند استخدام برنامج بوربوينت لتسجيل الصوت يمكننا الاستماع إليه من خلال شرائح العرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "العروض التقديمية تسمح بإدراج تسجيلات صوتية تسجل بواسطة برنامج Power Point.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "أثناء عملية تسجيل الصوت في برنامج العرض التقديمي فإنه يصبح زر البدء بتسجيل الصوت هو العملية الوحيدة الممكن القيام بها.", "options": ["صح", "خطأ"], "answer": 3 },
    
    // أسئلة الاختيار من متعدد
    { "q": "أحد الأعراض التالية ليست من أعراض الإصابة بالفيروسات ......", "options": ["تغير شكل بعض الملفات", "توقف النظام بدون سبب", "توقف بعض التطبيقات البرمجية عن العمل", "زيادة سعة القرص الصلب"], "answer": 3 },
    { "q": "عند تشغيل برنامج Microsoft Power Point ......", "options": ["يقوم البرنامج بإنشاء ملفات صوتية لشرائح العرض", "يطلب من المستخدم تحديد عدد الشرائح المراد تصميمها", "يقوم البرنامج بإضافة عدة شرائح لملف العرض", "تظهر الشاشة الرئيسية للبرنامج"], "answer": 3 },
    { "q": "عند النقر على الخيار (صوت من ملف) من تبويب إدراج فإنه لا يمكننا ......", "options": ["إدراج ملف صوتي مخزن على سطح المكتب", "تحديد نمط العرض للملف الصوتي بعد إدراجه", "البحث عن الملف الصوتي في أي من المجلدات المخزنة بالحاسوب", "إدراج فيلم مسجل مخزن بمجلد نموذج ملفات الفيديو"], "answer": 3 },
    { "q": "جميع ما يلي يمثل التدريب الافتراضي للطيران باستثناء:", "options": ["استجابة نظام التدريب الافتراضي لبعض الأوامر التي يصدرها المتدرب", "تنادي وتفادي أخطاء تدريب الطيارين التي ينجم عنها سقوط الطائرات والضحايا", "توفير واقع افتراضي يشعر معه المتدرب وكأنه يمارس الطيران الحقيقي", "توفير تكاليف الطيران وأجور استغلال موارد الطائرات"], "answer": 3 },
    { "q": "إصدار الأصوات المختلفة التي تحتويها ملفات الصوت بأنواعها هي مهمة:", "options": ["الماسح الضوئي", "القلم الصوتي", "بطاقة الصوت", "شاشة العرض"], "answer": 2 },
    { "q": "عند استخدام برنامج بوربوينت لتسجيل الصوت لا يمكننا:", "options": ["الاستماع إليه من خلال شرائح العرض", "إنجاز ذلك من خلال الشريحة الرئيسية", "تسليم الملف الصوتي", "تخزين الملف الصوتي"], "answer": 2 },
    { "q": "تسهم الوسائل المتعددة ضمن أساليب التعليم في عدة أمور باستثناء:", "options": ["استغلال جميع الحواس البصرية والسمعية لاستيعاب المحتوى التعليمي", "حرية المتعلم في اختيار الطرق التي تناسب ميوله في التعليم", "رقابة الشرح والمناقشة حول محتوى المنهج التعليمي", "تعزيز الاستقلالية في التعليم والاعتماد على النفس"], "answer": 2 },
    { "q": "العروض التقديمية تسمح بإدراج العديد من الوسائل باستثناء:", "options": ["تسجيلات صوتية تسجل بواسطة برنامج Power Point", "صور وموضوعات مختلفة بالفرص الفيزيائية", "تقديم الملفات بشكل متعدد", "تسجيل فيديوهات جديدة"], "answer": 3 },
    { "q": "وسيلة لتأمين البيانات المرسلة عبر الشبكات:", "options": ["أخذ نسخ احتياطية من البيانات", "شراء الحواسيب من شركات عالمية", "تشفير البيانات", "أنظمة التشغيل"], "answer": 2 },
    { "q": "تحويل الحكومة من تقليدية إلى إلكترونية:", "options": ["مضاعفة سرعة خدمة المواطنين في الدوائر الحكومية", "توفير عدد كبير من الموظفين في الدوائر الحكومية", "إجراء تغيرات جوهرية في هياكل وإدارات الدولة وقطاعاتها المختلفة", "زيادة عدد ساعات الدوام الرسمي"], "answer": 2 },
    { "q": "في مرحلة الظهور الحكومي:", "options": ["يتمكن المواطنون من الحصول على المعلومات الحكومية دون إمكانية إرسال أي معلومات من قبل المواطن", "يحصل المواطن على درجة التفاعل المباشر بين المواطن والإدارة الحكومية", "يتم تحديث المعلومات بشكل دوري", "يهتم القانون بتكليف أفضل السبل لحماية البيانات والتنسيق لأعمال القرصنة"], "answer": 0 },
    { "q": "مرحلة تكامل الخدمات وإنجاز المعاملات لها عدة مزايا باستثناء:", "options": ["استخدام التوقيع الإلكتروني للتأكد من هوية صاحب المعاملة", "ربط الإدارات الحكومية المختلفة وإنجاز التعاملات بينها إلكترونياً", "إجراء عمليات السداد الإلكتروني الآمن", "ضرورة الحضور الشخصي لاستكمال إنجاز المعاملات"], "answer": 3 },
    { "q": "التعاملات التي تحدث بين المواطنين وأي إدارة حكومية من أجل طلب خدمة معينة تمثل:", "options": ["المواطن إلى القطاع الخاص", "القطاع الخاص إلى الحكومة", "الحكومة إلى الحكومة", "المواطن إلى الحكومة"], "answer": 3 },
    { "q": "في مجال الصحافة الإلكترونية ساهمت الوسائل المتعددة في عدة نواحي ما عدا:", "options": ["إنتاج مواد إعلامية باللغة الشعورية والإيثار", "تغطية القصص الإخبارية بوسائل تقنية وخصوصاً وسائل التواصل الاجتماعي", "نشر المعلومات عن أحد المتلقين فقط", "نشر المعلومات عن أحد المتلقين فقط"], "answer": 2 },
    { "q": "للواقية من الفيروسات يجب اتخاذ مجموعة من الاحتياطات الأمنية باستثناء:", "options": ["عدم استخدام الإنترنت", "استخدام البرامج المضادة للفيروسات وتحديثها باستمرار", "عدم فتح أي ملف مرفق ضمن أي رسالة بريد إلكتروني من مصدر مجهول", "شراء البرمجيات الأصلية"], "answer": 0 },
    { "q": "مجموعة الرموز الموجودة وسط الشريحة في برنامج العروض التقديمية تمثل المكونات والوسائط المتعددة الممكن:", "options": ["إضافتها للشريحة الحالية", "إضافتها للشريحة السابقة", "حذفها من الشريحة السابقة", "حذفها من الشريحة الحالية"], "answer": 0 },
    { "q": "من مزايا الخدمات الإلكترونية:", "options": ["إمكانية إنجاز الخدمات خلال الدوام الرسمي فقط", "تسهيل إنجاز الأعمال ورفع معدل رقابية المواطنين", "ضياع مستندات المعلومات وصعوبة حفظها وتحفيزها", "زيادة تكاليف إنجاز الخدمات"], "answer": 1 },
    { "q": "أثناء عملية تسجيل الصوت في برنامج العرض التقديمي فإنه يصبح زر ...... هو العملية الوحيدة الممكن القيام بها.", "options": ["تشغيل ما تم تسجيله من أصوات", "الإيقاف", "موافق", "البدء بتسجيل الصوت"], "answer": 3 },
    { "q": "يتم تحديد شخصية المستخدم باستخدام أحد الصفات الشخصية التالية ماعدا:", "options": ["بصمة الأصابع", "طول المستخدم", "قزحية العين", "تمييز الصوت"], "answer": 1 },
    { "q": "ساهم استخدام الوسائط المتعددة في عقد المؤتمرات عن بُعد في عدة نواحي باستثناء:", "options": ["زيادة سرعة أجهزة الحاسوب", "أخذ قرار جماعي حول ما هو مطروح للنقاش", "تأمين الاتصال لعقد اجتماع بين عدة أشخاص في أماكن جغرافية متباعدة", "مناقشة وتبادل الأفكار في جو تفاعلي بين أعضاء المؤتمر"], "answer": 0 },
    { "q": "يمكن إجراء مجموعة من أعمال التحضير على الأفلام الفيديو بواسطة برنامج:", "options": ["Sound Recorder", "منتج الأفلام", "مدير البر", "الرسام"], "answer": 0 },
    { "q": "استغلال النظام المعلوماتية في نشر وتوزيع المعلومات المخلة بالأدب:", "options": ["جريمة يعاقب عليها القانون في جميع الدول", "استخدام الحاسوب في مهام غير المنصوص عليها ضمن الاختصاص الوطني", "نوع من الجرائم التي يترتب عليها أضرار كبيرة مقارنة بالجرائم الأخرى", "جميع ما سبق"], "answer": 0 },
    { "q": "القصاصات الصوتية الجاهزة هي كل ما يلي:", "options": ["أنها تُعد لإظهار أصوات شائعة", "أنه يتم إدراجها من تويوب الصفحة الرئيسية", "أنها متعلقة صوتية قصيرة", "أنها مخزنة في الحاسوب أو يتم تنزيلها من الإنترنت"], "answer": 3 },
    { "q": "ظهور أيقونة أو رمز على شكل مكبر صوت وسط شريحة العرض التقديمي يدل على:", "options": ["جهاز الحاسوب متصل بمكبر صوت", "احتواء الشريحة على ملف نصي", "احتواء الشريحة على ملف صوتي", "احتواء الشريحة على ملف فيديو"], "answer": 2 },
    { "q": "نشر معلومات كاذبة عن مؤسسات أو شخصيات عامة يعد هذا:", "options": ["جريمة إلكترونية", "تجارة الكترونية", "استبدال الكتروني", "تحويل الكتروني"], "answer": 0 },
    { "q": "المواقع واللوائح التي تجذب الدخول والاستغلال غير المصرح للبيانات وحمايتها من التلف:", "options": ["أمن قواعد البيانات", "تشغيل المعلومات", "حماية البرمجيات", "أمن الشبكات والاتصالات"], "answer": 0 },
    { "q": "لإدراج شريحة جديدة بنفس العرض التقديمي لبرنامج Power Point ننقر بزر الفارة الأيمن على:", "options": ["لوحة تجهيز الشريحة", "لوحة كتابة الملاحظات", "منطقة المحطات التفصيلي", "تويوب عرض الشرائح"], "answer": 0 },
    { "q": "الحكومة الإلكترونية توفر للدول المتقدمة فرصاً عديدة منها ......", "options": ["منع مناقشة سياسات الحكومة بشكل عام", "غياب الرقابة على أداء الإدارات الحكومية", "انتشار المحسوبية وغيرها", "تكثيف التواصل بين مؤسسات المجتمع المدني"], "answer": 3 },
    { "q": "صممت برامج العروض التقديمية لعدة أغراض باستثناء ......", "options": ["تقليص مهارات المتحدث", "تنظيم تسلسل الحديث", "تيسير مهمة المتحدث", "منح المتحدث فرصة لتذكر النقاط الرئيسية بالعرض"], "answer": 0 },
    { "q": "يتطلب مفهوم الحكومة التقليدية ......", "options": ["توفير بيئة تحتية متقدمة لتقنية المعلومات والاتصالات", "أن تكون هي الحكم والإدارة يعتمد على استغلال تقنية المعلومات", "الإشراف على مصالح الناس وتنظيم مختلف أنشطتهم الاقتصادية", "إنجاز العديد من الخدمات الإلكترونية المختلفة"], "answer": 2 },
    { "q": "لا تندرج ضمن مخاطر مصدرها برمجيات الشبكات:", "options": ["مخاطر الفيروسات", "إصابة حريق في المباني والمعدات", "تسرب كلمات العبور", "التعليمات الخاطئة بحذف الملفات دون قصد"], "answer": 1 },
    { "q": "ليس من التحديات الفنية التي تواجه نجاح مشاريع الحكومة الإلكترونية للدول النامية:", "options": ["معدل أمانة الحاسوب لدى المواطنين واستعدادهم للتعاطي الإيجابي مع الخدمات الإلكترونية", "معدل وصول الإنترنت للمنازل", "توفير البيئة التحتية الملائمة من تقنيات المعلومات والاتصالات", "نسبة المواطنين المالكين للحاسوب"], "answer": 0 },
    { "q": "من مصادر الصورة المعروضة في برنامج العروض التقديمية (Power Point):", "options": ["القرص المدمج", "ملفات الصور المخزنة بالحاسوب", "أي ذاكرة خارجية موصولة بالحاسوب", "جميع الإجابات السابقة صحيحة"], "answer": 3 }
];

// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 48;  // عدد الأسئلة المطلوب عرضها (يمكن تغييره حسب الحاجة)
const EXAM_DURATION_MINUTES = 60;      // مدة الاختبار بالدقائق (60 دقيقة)
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

// --- اختيار الأسئلة (45 سؤال عشوائي أو كل الأسئلة إذا كان العدد أقل) ---
let questions;
if (allQuestions.length > REQUIRED_QUESTIONS_COUNT) {
    questions = getRandomQuestions(allQuestions, REQUIRED_QUESTIONS_COUNT);
    console.log(`✅ تم اختيار ${questions.length} سؤال عشوائي من أصل ${allQuestions.length}`);
} else {
    questions = [...allQuestions];
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
timerDisplay.style.cssText = "background: #ff5722; color: white; padding: 12px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: bold; font-size: 18px; font-family: monospace;";
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
    
    // تغيير اللون عند اقتراب الوقت
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

// --- دالة تصحيح الإجابات (تظليل الإجابة الصحيحة فقط) ---
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
document.getElementById("submit-btn").addEventListener("click", function () {
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
            unansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            unansweredQuestion.style.backgroundColor = "#fff3cd"; 
            setTimeout(() => unansweredQuestion.style.backgroundColor = "transparent", 2500);
            return; 
        }
    } else {
        if (!confirm("✅ هل أنت متأكد من تسليم الإجابات الآن؟")) return;
    }

    performFinalSubmit(false); 
});

// --- تنفيذ الإرسال النهائي وحساب النتيجة ---
function performFinalSubmit(isAuto) {
    stopTimer();
    
    const submitBtn = document.getElementById("submit-btn");
    const name = document.getElementById("name").value.trim();
    
    submitBtn.disabled = true;
    submitBtn.innerText = "جاري الحفظ...";

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });

    const total = questions.length;
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<h3>✅ تم استلام الإجابات</h3><p>${name}، نتيجتك: ${score} من ${total}</p>`;
    
    const correctBtn = document.getElementById("correct-btn");
    if (correctBtn) correctBtn.style.display = "block";

    sendData(name, score, total, isAuto);
}

function sendData(name, score, total, isAuto) {
    const status = isAuto ? "🔴 تلقائي (انتهاء الوقت)" : "🟢 يدوي";
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const msg = `الحالة: ${status}%0Aالطالب: ${name}%0Aالنتيجة: ${score}/${total}`;
    
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${msg}`);

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