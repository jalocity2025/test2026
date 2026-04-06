const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (16 سؤال من الصور)
    { "q": "تشمل لوائح قواعد البيانات ضمان إتاحة الوصول للبيانات من قبل المخولين بذلك في أي وقت.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "المصفوفة هي: مجموعة متجاورة من المواقع في الذاكرة تحتوي على عناصر من نفس النوع.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "إمكانية إنجاز الخدمات من أي مكان تتاح فيه وسائل الاتصالات في أوقات الدوام الرسمية فقط من مزايا الخدمات الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "رخصة متعددة الاستخدام تمنح للمؤسسات التي سوف يقوم عدد كبير من موظفيها باستخدام نفس التطبيق البرمجي.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تأشير أحد أزرار الخيارات (Option Buttons) يلغي تأشير الأزرار الأخرى.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن تغيير النص المعروض بأداة العنوان (Label) في وقت التنفيذ داخل البرنامج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم تحديد عناصر المصفوفة ذات البعدين في جمل البرنامج باستخدام دليل واحد.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "أداة الصورة (Image) هي أداة لعرض الصورة وتستعمل كحاوية للعناصر والأدوات الأخرى.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "فتح أي ملف مرفق ضمن رسالة بريد إلكتروني لا يُعرف مصدرها من طرق الوقاية من الفيروسات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم استدعاء الأحداث بكتابة الاسم البرمجي للأداة ثم النقطة ثم اسم الحدث.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن ربط أدوات التحكم بالأوامر البرمجية لتعالج البيانات المدرجة حتى تخرج لنا العملية المطلوبة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تقسيم أي مشروع إلى مجموعة من الأجزاء ينتج عنه ضياع للوقت وصعوبة في التعديل.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تمثل الحكومة الإلكترونية للمواطنين على اختيار سرعة أداء الحكومة وشفافية إجراءاتها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يجب أن يكون هناك توافق في نوع البيانات للمعاملات في جملة الإعلان وجملة الاستدعاء للإجراءات الفرعية أو الدالة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تمثل كلمات العبور أحد المخاطر الأمنية لأنظمة الشبكات والاتصالات التي مصدرها برمجيات الشبكات.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد
    { "q": "يطلق على جميع التعاملات الممكن إنجازها عبر تقنية المعلومات اسم:", "options": ["الحكومة الإلكترونية", "المحافظ العام", "التواصل الإلكتروني", "الخدمات الإلكترونية"], "answer": 3 },
    { "q": "قيمة المتغير y في المقطع (Dim x,y As Integer: y = Abs(x)) بعد التنفيذ هي:", "options": ["Null", "x", "y", "0"], "answer": 3 },
    { "q": "يشكل الهوية الإلكترونية للمواطن:", "options": ["المفتاح العام", "البريد الإلكتروني", "التوقيع الإلكتروني", "المفتاح الخاص"], "answer": 2 },
    { "q": "لتغيير حجم أداة التحكم ولوائها فإننا نستخدم:", "options": ["شريط الأدوات", "شريط أدوات التحكم", "نافذة النموذج", "نافذة الخصائص"], "answer": 3 },
    { "q": "يتم تحديد النماذج والأزرار والأدوات في لغة الفيجوال بيسك المطلوبة لحل المسألة في مرحلة:", "options": ["تحديد الأدوات المطلوبة", "تنفيذ الحل", "تعريف المشكلة", "كتابة الخوارزميات"], "answer": 0 },
  { "q": "وظيفة المقطع \n<div class='code-block'>For i=0 To 2\nFor j=0 To 2\na(i,j)=InputBox(\"\")\n Next j\n Next i</div>","options": ["طباعة عناصر قطر المصفوفة", "إدخال عناصر المصفوفة", "طباعة عناصر المصفوفة", "قراءة عناصر قطر المصفوفة"], "answer": 1 },
    { "q": "من خلال المقطع  ، المصفوفة (a) هي مصفوفة:\n<div class='code-block'>For i=0 To 2\nFor j=0 To 2\na(i,j)=InputBox(\"\")\n Next j\n Next i</div>", "options": ["ذات بعدين", "ذات عمود واحد", "ذات صف واحد", "أحادية البعد"], "answer": 0 },
    { "q": "الجملة (Dim x(1 To 4, 1 To 4) As Single) تمثل مصفوفة ذات بعدين تحتوي على:", "options": ["أربعة صفوف وأربعة أعمدة", "ثلاثة صفوف وثلاثة أعمدة", "أربعة صفوف فقط", "ثلاثة أعمدة فقط"], "answer": 0 },
    { "q": "أي العبارات التالية صحيح فيما يتعلق بالإجراء الفرعي (Sub)?", "options": ["جميع معاملاته مرجعية فقط", "يجب تحديد نوعه", "يعيد قيمة واحدة فقط", "يمكن أن يكون بدون معاملات"], "answer": 3 },
    { "q": "توفر النظم الحكومية الإلكترونية للمواطنين والإدارات فرصة التواصل عبر:", "options": ["التعريف الإلكتروني", "التوقيع الإلكتروني", "الأكشاك الإلكترونية للخدمات الشاملة", "التشغيل الإلكتروني"], "answer": 2 },
    { "q": "القيمة المعادة من الدالة تكون في:", "options": ["نوع الدالة", "معاملات الدالة", "جملة الإعلان عن الدالة", "اسم الدالة"], "answer": 3 },
    { "q": "تستخدم صناديق التحقق (Check Box) لعرض مجموعة خيارات على المستخدم ليختار منها:", "options": ["خيار واحد فأكثر", "ثلاثة خيارات فقط", "خيار واحد فقط", "خيارين فقط"], "answer": 0 },
    { "q": "برامج تقوم بشيء آخر غير ما يعتقده مشغل البرنامج:", "options": ["برمجيات تجارية", "برمجيات مفتوحة المصدر", "برامج مكافحة الفيروسات", "فيروس حصان طروادة"], "answer": 3 },
    { "q": "يمكن التبديل بين نافذة النموذج وبين شاشة محرر الكود من خلال نافذة:", "options": ["الكود", "النموذج", "المشروع", "مستكشف المشروع"], "answer": 3 },
    { "q": "يمكن عند تنفيذ الدالة باستخدام النافذة السريعة (Immediate Window) معرفة:", "options": ["نوع الدالة", "حجم الدالة", "قيم المتغيرات بالدالة", "جملة الإعلان عن الدالة"], "answer": 2 },
    { "q": "يعد نموذجاً من خدمات ومعاملات الحكومة الإلكترونية:", "options": ["رفع أمية الحاسوب", "تخطيط البرامج الإلكترونية", "صيانة المعدات الإلكترونية", "الأحوال الشخصية الإلكترونية"], "answer": 3 },
    { "q": "من أهم الأحداث الخاصة بالنموذج والذي ينفذ تلقائياً عند تحميله هو:", "options": ["Click", "SetFocus", "Show", "Load"], "answer": 3 },
    { "q": "جزء من المشروع يتم فيه كتابة أي إجراء فرعي أو دالة أو إعلان عن متغيرات بحيث تصبح متاحة للاستخدام من أي نموذج أو أداة في المشروع بالكامل:", "options": ["Private", "Public", "Module", "General"], "answer": 2 },
    { "q": "تعد الدالة الجاهزة (Val) من الدوال:", "options": ["الرياضية", "التاريخ والوقت", "الحرفية", "التحويلية"], "answer": 3 },
    { "q": "عند قيام شخص ما باستخدام الحاسوب في مهام غير المنصوص عليها ضمن اختصاصه الوظيفي، فإن ذلك يُعد جريمة تسمى:", "options": ["القرصنة الإلكترونية", "سرقة وقت الحاسوب", "سرقة كلمات العبور", "التشهير الإلكتروني"], "answer": 1 },
    { "q": "عند تنفيذ الأمر (Form1.Cls) ينتج عنه:", "options": ["رسم خط مستقيم على النموذج", "إظهار النموذج", "تحريك النموذج", "مسح ما هو مطبوع على النموذج"], "answer": 3 },
    { "q": "أداة تستخدم لإدخال البيانات الرقمية أو الحرفية في وقت التصميم أو في وقت التشغيل:", "options": ["العنوان (Label)", "الملف", "النموذج (Form)", "صندوق النص (Text Box)"], "answer": 3 },
    { "q": "برمجيات يمكن استغلالها كما هي أو تعديلها وتطويرها تعمل بصورة مغايرة لنسختها الأصلية:", "options": ["تجارية", "مجانية", "مفتوحة المصدر", "تجريبية"], "answer": 2 },
    { "q": "تستخدم جملة الإعلان عن المصفوفة لتحديد:", "options": ["أداة التحكم المرتبطة بالبيانات", "عدد ونوع البيانات المراد تخزينها", "طريقة تنفيذ التطبيق", "طريقة استدعاء البيانات"], "answer": 1 },
    { "q": "للتأكد من عدم وجود أي مخاطر أمنية تتخلل البيانات المستقبلة فإننا نستخدم:", "options": ["حماية البرمجيات", "قرصنة المعلومات", "مبدأ الشفافية", "الجدار الناري"], "answer": 3 },
    { "q": "من خصائص أداة العنوان (Label):", "options": ["DblClick", "Caption", "Move", "Change"], "answer": 1 },
    { "q": "لإيجاد الجذر التربيعي لرقم معين نستخدم الدالة:", "options": ["Abs", "Int", "Math", "Sqr"], "answer": 3 },
    { "q": "إضافة عنوان لأداة زر الأمر (Command Button) تستخدم الخاصية:", "options": ["Name", "Label", "Caption", "Title"], "answer": 2 },
    { "q": "جملة الإعلان لتخزين أسماء (30) طالباً في مصفوفة ذات بعد واحد هي:", "options": ["Dim a(29) As String", "Dim a(30) As Integer", "Dim a(29) As Single", "Dim a(30) As String"], "answer": 0 },
    { "q": "اعتماد مبدأ تشفير البيانات من الأمثلة على:", "options": ["طرق تحديد صلاحيات المستخدم", "طرق الوقاية من الفيروسات", "وسائل مكافحة جرائم الحاسوب", "وسائل تأمين البيانات المرسلة"], "answer": 3 },
    { "q": "من شريط القوائم يمكن إضافة أي عنصر من عناصر المشروع من خلال القائمة:", "options": ["الإضافات (Add Ins)", "الأدوات (Tools)", "ملف (File)", "المشروع (Project)"], "answer": 3 },
    { "q": "يمكن تنفيذ التطبيق في لغة البيسك المرئي من لوحة المفاتيح بالضغط على المفتاح:", "options": ["F4", "Enter", "F5", "Ctrl"], "answer": 2 },
    { "q": "عند وضع أول صندوق نص على نافذة النموذج يكون اسمه البرمجي:", "options": ["Label1", "txt", "Text1", "Box1"], "answer": 2 },
    { "q": "الخاصية التي تجعل زر الأوامر فعالاً بحيث يتقبل الأحداث مثل النقر هي:", "options": ["GotFocus", "LostFocus", "Visible", "Enabled"], "answer": 3 },
    { "q": "في مراحل تطور الحكومة الإلكترونية، يبدأ التفاعل المباشر بين المواطن والإدارة الحكومية المفردة للخدمة في مرحلة:", "options": ["تكامل الخدمات", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "الظهور الحكومي"], "answer": 3 }
];

// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 50;
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