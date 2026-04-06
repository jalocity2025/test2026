const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ من الصور الجديدة
    { "q": "إحدى التحديات الفنية التي تواجه فرص نجاح تجارب الحكومة الإلكترونية هي نسبة المواطنين المالكين للحواسيب.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الوسائط المتعددة هي تقنية يمكن من خلالها بناء نظم معلوماتية يتم فيها الدمج بين البيانات النصية والسمعية والمرئية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن إزاحة الصورة وتثبيتها في المكان المناسب بالسحب والإفلات عن طريق الفأرة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تظهر أعراض إصابة جهاز الحاسوب بالفيروسات فجأة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "من مزايا الخدمات الإلكترونية خفض تكاليف إنجاز الخدمات لجميع الأطراف (الحكومة والأفراد).", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعتبر شاشة العرض إحدى طرقيات الحاسوب المستخدمة لإنتاج الصور الرقمية الثابتة ومقاطع الفيديو.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يمكن إضافة المؤثرات الخارجية إلى النصوص فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "لتحضير العروض التقديمية الجيدة فإنه لا بد من الاستعانة بالوسائط المتعددة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "في مرحلة الظهور الحكومي من مراحل تطور تطبيق الحكومة الإلكترونية يتم ربط الإدارات الحكومية المختلفة وإنجاز التعامل بينها إلكترونياً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عند استخدام مؤثرات الحركة فإن كل عناصر الشريحة يتم عرضها معاً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الاصطياد الإلكتروني هو عبارة عن اصطياد قراصنة المعلومات وكشفهم وتعريفهم للمساءلة القانونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "استخلاص تاريخ الميلاد ككلمة عبور يزيد من احتمالية تسربها بمجرد الاطلاع عليها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "البرمجيات مفتوحة المصدر هي برمجيات يمكن استغلالها بصورة مجانية لفترة معينة من الزمن.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يمثل المفتاح العام الذي يسلم عادة مع الشهادة الرقمية التوقيع الإلكتروني الشخصي للمواطن.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يعاب على الوسائط المتعددة أنها تتيح للمتعلم حرية اختيار الطرق التي تناسب ميله في التعليم.", "options": ["صح", "خطأ"], "answer": 1 },

    // أسئلة الاختيار من متعدد
    { "q": "أي من المصطلحات التالية يعتبر امتداداً لملف صوتي؟", "options": ["Mp3", "Bmp", "GIF", "Mpeg"], "answer": 0 },
    { "q": "يتمثل تشفير المعلومات في:", "options": ["أخذ نسخ احتياطية من البيانات المرسلة", "استخدام شبكة خاصة في نقل البيانات وعدم استخدام الشبكات العامة", "اختزال البيانات وإرسالها إلى جهاز مستقبل فقط عبر شبكات الاتصال", "تحويل البيانات الأصلية بطريقة معينة قبل إرسالها عبر شبكات المعلومات"], "answer": 3 },
    { "q": "من الممارسات غير القانونية التي تضع مرتكبيها تحت طائلة القانون:", "options": ["استخدام حاسوب خاص بك دون إذن", "الدخول على شبكة الإنترنت دون بريد إلكتروني", "التواصل مع موقع محلي لإنجاز خدمة ما", "النشر والاستخدام غير المصرح به"], "answer": 3 },
    { "q": "أي مما يلي يعتبر من معاملات الحكومة الإلكترونية؟", "options": ["مكافحة الهجرة غير الشرعية", "تقاضي القضاء الإداري إلكترونياً", "استخراج الرخص الإلكترونية", "الرقابة على الصناعات الإلكترونية"], "answer": 2 },
    { "q": "يمكن تمييز نوع الملف من خلال:", "options": ["نوع بيانات الملف", "امتداد الملف", "حجم الملف", "اسم الملف"], "answer": 1 },
    { "q": "تصنف البرمجيات من حيث الاستخدام وحقوق النشر إلى عدة تصنيفات منها:", "options": ["الأصلية", "التخريبية", "التجارية", "الدعائية"], "answer": 2 },
    { "q": "العروض التقديمية تسمح بإدراج العديد من الوسائل التالية عدا واحدة هي:", "options": ["قصاصة صوت جاهزة", "تسجيل صوتي يتم بواسطة برنامج بوربوينت", "قصاصة فيديو جاهزة", "تسجيل فيديو يتم بواسطة برنامج بوربوينت"], "answer": 3 },
    { "q": "يمكن إضافة فيلم مرئي إلى شريحة عرض عن طريق:", "options": ["من قائمة إدراج ثم اختيار فيديو", "من قائمة تصميم ثم اختيار فيديو", "من قائمة عرض ثم اختيار فيديو", "من قائمة أدوات ثم اختيار فيديو"], "answer": 0 },
    { "q": "الجدار الناري هو عبارة عن مصطلح يطلق على:", "options": ["برنامج يقوم بفحص كلمات سر المستخدمين والتأكد من صحتها", "عدد من الغرف محكمة الإغلاق توضع بها مكونات شبكة المعلومات", "مجموعة من البرمجيات والأجهزة التي تمثل الحد الفاصل بين شبكة معلومات وأخرى تتواصل معها", "برنامج يقوم بتحديد صلاحيات المستخدمين"], "answer": 2 },
    { "q": "يتم مؤثر الحركة بـ:", "options": ["تحديد طريقة دخول العنصر أثناء العرض", "تحديد مسار حركة العنصر أثناء العرض", "إضافة مؤثر خروج وإخفاء للعنصر", "إضافة مؤثر تكبير أو تصغير للعنصر"], "answer": 0 },
    { "q": "قرصنة البرمجيات هي:", "options": ["صناعة البرمجيات وبيعها بدون مقابل", "تجهيز أقراص البرمجيات عبر الدول", "عملية نسخ البرامج الأصلية من شبكة المعلومات واستخدامها دون إذن", "بيع البرمجيات بأسعار مضاعفة"], "answer": 2 },
    { "q": "استخدام الوسائط المتعددة ضمن أساليب التعليم:", "options": ["يجعل التعليم أكثر رتابة في الشرح", "يجعل قدرة البشر محدودة في استيعاب المعلومات والتعامل معها", "يسهم في التكيف مع متطلبات المجتمع التعليمي", "يقلل من فعالية العملية التعليمية"], "answer": 2 },
    { "q": "المؤثرات الانتقالية هي تأثيرات لـ:", "options": ["التحكم في طريقة عرض الشرائح في عملية الانتقال", "التحكم في سرعة تأثير المراحل الانتقالية لكل شريحة", "إضافة صوت مصاحب لعملية الانتقال", "التحكم في طريقة عرض النصوص"], "answer": 0 },
    { "q": "جرائم الحاسوب هي:", "options": ["بيع الحواسيب بأعمال مضاعفة", "سرقة قطع غيار أجهزة الحاسوب من المؤسسات والأفراد", "الإجراءات التي يكون الحاسوب وسيلة في تنفيذها", "استخدام الحاسوب بدون ترخيص"], "answer": 2 },
    { "q": "أي من العناصر التالية ليس من عناصر الوسائط المتعددة؟", "options": ["النص", "الصور والرسوم المتحركة", "الصوت", "الروائح"], "answer": 3 },

    // أسئلة المزاوجة (تم تحويلها إلى أسئلة عادية)
    { "q": "أحد المؤثرات المستخدمة في الشرائح لإظهار أصوات شائعة هو:", "options": ["الماسح الضوئي", "مسار الحركة", "الفيديو", "قصاصة صوتية"], "answer": 3 },
    { "q": "أحد مجالات استخدام الوسائط المتعددة:", "options": ["الماسح الضوئي", "مسار الحركة", "التدريب الافتراضي", "قصاصة صوتية"], "answer": 2 },
    { "q": "أحد مؤثرات الحركة المخصصة:", "options": ["الماسح الضوئي", "مسار الحركة", "الفيديو", "قصاصة صوتية"], "answer": 1 },
    { "q": "أحد عناصر الوسائط المتعددة:", "options": ["الماسح الضوئي", "الفيديو", "مسار الحركة", "قصاصة صوتية"], "answer": 1 },
    { "q": "أحد الأجهزة المستخدمة لإنتاج الوسائط المتعددة:", "options": ["الماسح الضوئي", "مسار الحركة", "الفيديو", "قصاصة صوتية"], "answer": 0 },

    // أسئلة المزاوجة من الصورة الأولى
    { "q": "من وسائل تأمين البيانات المرسلة عبر الشبكات:", "options": ["بيانات قزحية العين", "الهواتف النقالة", "تشفير البيانات", "التوقيع الإلكتروني"], "answer": 2 },
    { "q": "يتم استغلال البرمجيات لفترة غير محددة وبدون تكلفة عبر استخدام:", "options": ["بيانات قزحية العين", "الهواتف النقالة", "تشفير البيانات", "البرمجيات المجانية"], "answer": 3 },
    { "q": "تتميز مرحلة تكامل الخدمات وإنجاز المعاملات باستخدام:", "options": ["بيانات قزحية العين", "الهواتف النقالة", "تشفير البيانات", "التوقيع الإلكتروني"], "answer": 3 },
    { "q": "يمكن التواصل مع أنظمة الحكومة الإلكترونية عبر استخدام:", "options": ["بيانات قزحية العين", "الهواتف النقالة", "تشفير البيانات", "التوقيع الإلكتروني"], "answer": 1 },
    { "q": "يمكن التحقق من هوية المستخدمين عبر استخدام:", "options": ["بيانات قزحية العين", "الهواتف النقالة", "تشفير البيانات", "التوقيع الإلكتروني"], "answer": 0 }
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