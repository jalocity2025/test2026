const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (12 سؤال)
    { "q": "تتكون دالة المستخدم من مجموعة من الجمل المكتوبة بلغة البيسك المرئي وتؤدي وظيفة محددة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن ضبط خصائص الأدوات أثناء تشغيل البرنامج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم إزالة أي نموذج من المشروع من خلال نافذة شكل النموذج.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يُعد فيروس الحاسوب من البرمجيات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "عند كتابة الإجراء الفرعي في الجزء (General) يمكن استدعاؤه من أي أداة على النموذج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم استدعاء الإجراء الفرعي الخاص بالحدث DblClick عندما ينقر المستخدم نقراً مزدوجاً فوق الأداة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الحدث LostFocus يجبر المؤشر على البقاء داخل صندوق النص إذا كان الصندوق فارغاً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يجب أن يكون عدد المعاملات في جملة الإعلان عن الدالة هو نفس عدد المعاملات في جملة استدعائها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يعد التواصل الشخصي مع أنظمة الحكومة الإلكترونية هو الوسيلة الوحيدة لإنجاز الأعمال والحصول على الخدمات الحكومية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تشفير المعلومات: هو تحوير البيانات الأصلية قبل إرسالها عبر شبكات المعلومات بطريقة مشفرة وغير مفهومة لمستلم هذه البيانات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الحكومة الإلكترونية تستلزم توفر بنية تحتية متقدمة لتقنيات المعلومات والاتصالات الوطنية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "أدوات التحكم: هي برامج جاهزة معدة مسبقاً من قبل المبرمجين لتوفير الوقت والجهد.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (33 سؤال)
    { "q": "أي مما يلي يُعد أول وأهم جزء في حل المشاكل البرمجية:", "options": ["تحديد الأدوات المطلوبة", "كتابة الخوارزميات", "تنفيذ الحل", "تعريف المشكلة"], "answer": 3 },
    { "q": "أي فعل يقوم به المستخدم ينتج عنه رد فعل معين مثل تنفيذ إجراء معين يسمى:", "options": ["Event", "Command", "Property", "Method"], "answer": 0 },
    { "q": "لإنهاء استكمال تنفيذ جمل الدالة الوظيفية في أي موقع قبل الوصول إلى الجملة End Function فإننا نستخدم الجملة:", "options": ["Exit Function", "Exit Sub", "End", "Goto Exit"], "answer": 0 },
    { "q": "من دوال التاريخ والوقت، الدالة Now التي تعطي:", "options": ["التاريخ الحالي فقط", "رقم اليوم من أيام الأسبوع", "الوقت الحالي فقط", "التاريخ والوقت الحاليين"], "answer": 3 },
    { "q": "أي مما يلي من المخاطر التي يستغلها القراصنة لتعطيل عمل الشبكة أو خفض أدائها:", "options": ["الكوارث الطبيعية", "تشفير المعلومات", "أعطال الشبكة", "الفيروسات"], "answer": 3 },
    { "q": "من أهم الأدوات المستخدمة التي يمكن بواسطتها تنفيذ الكثير من التطبيقات والإجراءات هي أداة:", "options": ["زر الأمر", "زر الخيار", "الإطار", "التحكم بالتطبيقات"], "answer": 0 },
    { "q": "من الأمور المهمة التي تميز الدالة عن الإجراء الفرعي:", "options": ["تعيد قيمة واحدة تقوم بتخزينها في اسم الدالة", "يمكن استدعاؤها أكثر من مرة", "تتكون من مجموعة من الجمل المكتوبة بلغة البيسك المرئي", "تؤدي وظائف متعددة"], "answer": 0 },
    { "q": "لإيجاد الجذر التربيعي لرقم معين (X) فإننا نستخدم الدالة:", "options": ["Sqr(X)", "Int(X)", "Sgn(X)", "Abs(X)"], "answer": 0 },
    { "q": "في حالة اختيار أكثر من أداة من نفس النوع فإن نافذة الخصائص تعرض:", "options": ["الخصائص المشتركة فيما بينها", "خصائص الأداة الأخيرة", "الخصائص بترتيب معين", "خصائص الأداة الأولى"], "answer": 0 },
    { "q": "النافذة التي تعطيك فكرة عن مكان ظهور النموذج على الشاشة بعد تنفيذ التطبيق هي نافذة:", "options": ["المشروع", "شكل النموذج", "النموذج", "مستكشف المشروع"], "answer": 2 },
    { "q": "آخر جملة في الإجراء الفرعي هي:", "options": ["Exit", "End Sub", "End Function", "Format"], "answer": 1 },
    { "q": "لإضافة أو تغيير العنوان الذي يظهر على زر الأمر فإننا نكتب الصيغة:",
 "options": ["\"نعم\"=Command1.Name  ", 
"\"نعم\"=Command1.Caption ",
 "\"نعم\"=Command1.Label ",
"\"نعم\"=Command1.Text "],
 "answer": 1 },
    { "q": "سميت الدوال الجاهزة بهذا الاسم لأنه:", "options": ["تقوم بوظيفة محددة مسبقاً", "يقوم المبرمج بكتابتها بكل سهولة", "يمكن استدعاؤها دون كتابة برامجها", "يمكن استدعاؤها من الجزء العام فقط"], "answer": 2 },
    { "q": "لتخزين المشروع في لغة البيسك المرئي فإننا نقوم بـ:", "options": ["تنفيذ البرنامج خطوة خطوة", "التنقل إلى Save from Project menu", "التنقل إلى File ثم Save Project", "التنقل إلى Save from Tools menu"], "answer": 2 },
    { "q": "يبدأ تحديث المعلومات المنشورة على المواقع الحكومية بشكل دوري في مرحلة:", "options": ["التفاعل وتبادل البيانات", "الظهور الحكومي", "النشر الإلكتروني", "تكامل الخدمات"], "answer": 2 },
    { "q": "المكان الرئيسي الذي يتم فيه تصميم البرامج والتطبيقات في لغة البيسك المرئي هو:", "options": ["شريط الأدوات", "شريط القوائم", "نافذة المشروع", "النموذج"], "answer": 3 },
    { "q": "من أهم الأحداث الخاصة بالنموذج والذي ينفذ تلقائياً عند تحميل النموذج هو:", "options": ["Click", "Event", "Show", "Load"], "answer": 3 },
    { "q": "تشمل معاملات الحكومة الإلكترونية:", "options": ["التجارة الإلكترونية", "صيانة المعدات الإلكترونية", "البريد الإلكتروني", "الاتصال الإلكتروني"], "answer": 0 },
    { "q": "تستخدم الدالة Str في:", "options": ["إرجاع عدد معين من الأحرف نهاية النص", "تحويل المتغير الرقمي إلى صيغة نصية", "إرجاع عدد معين من الأحرف بداية النص", "تحويل المتغير النصي إلى صيغة رقمية"], "answer": 1 },
    { "q": "أي مما يلي لا يعد من أعراض الإصابة بالفيروسات:", "options": ["تغير حجم أوقات الملفات", "توقف النظام بدون سبب", "تغير شاشة التوقف بشكل متكرر", "البطء المفاجئ في أداء الحاسوب"], "answer": 2 },
    { "q": "يمكن طباعة محتويات المشروع من خلال القائمة:", "options": ["File", "View", "Project", "Run"], "answer": 0 },
    { "q": "من مكونات بيئة التطوير في البيسك المرئي التي تسهل على المبرمج التعامل مع بعض العناصر الموجودة في شريط القوائم بشكل مباشر:", "options": ["صندوق أدوات التحكم", "نافذة مستكشف المشروع", "شريط الأدوات", "نافذة الخصائص"], "answer": 2 },
    { "q": "تُعد التعاملات بين الحكومة والمصارف الأهلية من تفاعلات الحكومة الإلكترونية التي تتم من:", "options": ["المواطن إلى الحكومة", "القطاع الخاص إلى الحكومة", "الحكومة إلى الحكومة", "الحكومة إلى المواطن"], "answer": 1 },
    { "q": "تُعد بيانات الصفة الشخصية أكثر دقة في تمييز المستخدمين لـ:", "options": ["صعوبة تزويرها أو تقليدها", "سهولة استخدامها وحفظها", "استخدامها لبيانات مشفرة", "وجود جدار ناري بها"], "answer": 0 },
    { "q": "عند وضع أول صندوق نص على نافذة النموذج يكون تلقائياً اسمه البرمجي:", "options": ["Label1", "Command1", "TextBox1", "Text1"], "answer": 3 },
    { "q": "القيمة المعادة من الدالة في الجملة A = Left(\"Good Morning\", 4) هي:", "options": ["Good", "Morn", "Moring", "None of the above"], "answer": 0 },
    { "q": "قيام شخص باستخدام الحاسوب في مهام غير المنصوص عليها ضمن اختصاصه الوظيفي يعد من جرائم الحاسوب وتسمى:", "options": ["سرقة وقت الحاسوب", "العمل عن بعد", "الاستغلال الخاطئ", "سرقة الوظيفة"], "answer": 0 },
    { "q": "تستطيع وضع أي أداة من أدوات التحكم على نافذة النموذج عن طريق:", "options": ["القائمة View ثم تختار الأداة المطلوبة", "النقر المزدوج على الأداة المطلوبة من نافذة النموذج", "القائمة Insert ثم النقر على الأداة المطلوبة", "النقر المزدوج على الأداة المطلوبة من شريط أدوات التحكم"], "answer": 3 },
    { "q": "الأداة التي تستخدم لإدخال البيانات الرقمية أو الحرفية في وقت التصميم أو في وقت التشغيل هي أداة:", "options": ["المربع المركب Combo Box", "العنوان Label", "زر الأمر Command", "صندوق النص Text Box"], "answer": 3 },
    { "q": "لإظهار وإخفاء زر الأمر Command فإننا نستخدم الخاصية:", "options": ["Style", "Visible", "Enabled", "SetFocus"], "answer": 1 },
    { "q": "من مزايا الخدمات الإلكترونية:", "options": ["ارتفاع تكاليف إنجاز الخدمات", "رفع معدل رفاهية المواطنين", "السفر إلى مسافات بعيدة", "رفع معدلات أمية الحاسوب"], "answer": 1 },
    { "q": "تتم إضافة البرامج الفرعية والدوال في بيئة البيسك المرئي من شريط القوائم خلال قائمة:", "options": ["المشروع Project", "الأدوات Tools", "ملف File", "الإضافات Add Ins"], "answer": 0 }
];

// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 45;
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