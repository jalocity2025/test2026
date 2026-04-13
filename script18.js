const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (True/False)
   // { "q": "عند التأشير على أحد صناديق التحكم Check Boxes يلغي تأشير الصناديق الأخرى.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تسمى المصفوفة التي يتم تحديد عناصرها في جمل البرنامج باستخدام دليل واحد بالمصفوفة ذات البعد الواحد.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تتم عمليات الإدخال والإخراج لأي إجراء فرعي من نوع Sub.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تنتهي الدوال الوظيفية بجملة End Sub.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يتم ضبط خصائص الأدوات أثناء تصميم البرنامج فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "من مهام الجدار الناري منع التواصل مع المواقع التي وردت بها مصطلحات تزدري الأديان.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الحكومة الإلكترونية تتيح للدول النامية فرصة منافسة بلدان العالم المتقدم في الصناعات الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عندما نقوم بوضع أداة على النموذج يقوم البيسك المرئي بتسميتها تلقائياً.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن تشغيل برامج من خارج بيئة البرمجة من خلال قائمة التنفيذ Run على شريط القوائم.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يجب أن يكون اسم المصفوفة من الكلمات المحجوزة بلغة البيسك المرئي.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستخدم وسائل حماية البرمجيات من أجل تحديد حقوق ملكية البرمجيات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تسهم قرصنة البرمجيات في إفلاس العديد من مؤسسات إنتاج البرمجيات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تستخدم أداة الإطار Frame لضم العناصر المرتبطة منطقياً أو وظيفياً مع بعضها في مجموعة واحدة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يعد تقديم أداء أفضل للخدمات وبتكلفة أغلى من ثمنها الأصلي من مزايا الخدمات الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "بعد تسليم البيانات المشفرة يتم إعادتها إلى صيغتها الأصلية اعتماداً على وسيلة إرسالها.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "حددت المنظمات الدولية عدد مراحل الانتقال من نمط الحكومة التقليدية إلى الإلكترونية بـ 3 مراحل.", "options": ["صح", "خطأ"], "answer": 1 },
   // { "q": "المعلومات الشخصية للمواطنين الموجودة في قواعد البيانات للمؤسسات العامة والخاصة هي ملك لهذه المؤسسات ولها الحق في استغلالها بأي طريقة كبيعها أو تبادلها مع مؤسسات أخرى.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "لكل عنصر من عناصر المصفوفة نوع بيانات مختلف عن العناصر الأخرى.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تقوم الخوارزمية بتحديد الأدوات المطلوبة التي توفرها بيئة البرمجة لإنجاز الحل.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "نوع القيمة المعادة من الدالة يجب أن يذكر في جملة الإعلان عن الدالة.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (Multiple Choice)
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من رقم مكون من أرقام صحيحة وعشرية هي:", "options": ["Trim", "Int", "Chr", "Val"], "answer": 1 },
   // { "q": "حق مؤلف أي عمل فكري في عدم السماح للآخرين باستخدامه دون إذن يسمى:", "options": ["الملكية الفكرية", "حرية التفكير", "الاصطياد الإلكتروني", "قرصنة المعلومات"], "answer": 0 },
    { "q": "من التحديات التقنية التي تواجه تطبيق الحكومة الإلكترونية:", "options": ["سرعة أداء الحكومة وشفافية إجراءاتها", "ارتفاع معدل أمية الحاسوب لدى المواطنين", "توفير البنية التحتية الملائمة من تقنيات المعلومات والاتصالات", "حرص الحكومات على تعويض دور المواطنين"], "answer": 2 },
    { "q": "يمكن للمواطن تنزيل نسخ إلكترونية من المستندات الحكومية وملؤها إلكترونياً في مرحلة:", "options": ["تكامل الخدمات وإنجاز المعاملات", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "الظهور الحكومي"], "answer": 1 },
    { "q": "النافذة التي تعتبر المكان الرئيسي الذي يتم فيه تصميم البرامج والتطبيقات في لغة بيسك المرئي هي نافذة:", "options": ["النموذج", "الخصائص", "المشروع", "الأدوات"], "answer": 0 },
    { "q": "حجم المصفوفة myarray(3,3) As String هو:", "options": ["6", "16", "12", "9"], "answer": 1 },
    { "q": "بيانات المصفوفة myarray (في السؤال السابق) من النوع:", "options": ["الصحيح", "الحرفي", "الكسري", "المنطقي"], "answer": 1 },
    { "q": "من وسائل تأمين قواعد البيانات:", "options": ["ربط الحواسيب بشبكة الإنترنت دون اتخاذ تدابير حماية", "إتاحة الوصول للبيانات من قبل أي شخص وفي أي وقت", "تشفير البيانات التي يتم حفظها في قواعد البيانات", "توفير أقصى درجات السرية لبيانات الولوج للبيانات"], "answer": 3 },
    { "q": "المصفوفة ذات البعدين تتكون من عدد من:", "options": ["السجلات", "الحقول", "العناصر والمحاور", "الصفوف والأعمدة"], "answer": 3 },
   // { "q": "لتحديد حالة زر الخيار Option Button هل هو محدد أو لا تستخدم الخاصية:", "options": ["Checked", "Text", "Option", "Value"], "answer": 3 },
    { "q": "قيام شخص باستخدام حاسوب العمل في مهام غير المنصوص عليها ضمن اختصاصه الوظيفي هو تعريف لجريمة:", "options": ["الاحتيال المهني", "سرقة وقت الحاسوب", "انتهاك حقوق الملكية", "المهام المجدولة"], "answer": 1 },
    { "q": "أي مما يلي من خصائص أداة العنوان Label:", "options": ["Change", "Text", "Click", "Caption"], "answer": 3 },
    { "q": "البرمجيات التي لا تحتاج لترخيص ويمكن استخدامها لفترة غير محددة وهي متوفرة بلا تكلفة هي البرمجيات:", "options": ["التطبيقية", "التجارية", "المجانية", "التجريبية"], "answer": 2 },
   // { "q": "لإضافة عنصر لصندوق القائمة List Box تستخدم الطريقة (Method):", "options": ["AddList", "InsertItem", "MovList", "AddItem"], "answer": 3 },
    { "q": "من أنواع الفيروسات المنتشرة حالياً:", "options": ["الخطير", "التشغيل", "الجدار الناري", "الدودة"], "answer": 3 },
    { "q": "أي العبارات التالية صحيحة حول الإجراء الفرعي؟", "options": ["يمكن أن يكون بدون معاملات", "يرجع قيمة واحدة فقط", "كل معاملاته مدخلات فقط", "يجب تحديد نوعه"], "answer": 0 },
    { "q": "الأداة التي تستخدم لتنفيذ أمر أو أكثر أو لقبول أو رفض قيم أو مدخلات هي زر:", "options": ["العنوان Label", "زر الامر Command Button", "النص Text", "الخيار Option"], "answer": 1 },
    { "q": "إجراءات مبنية داخل الأداة نفسها تؤدي وظيفة معينة متعلقة بسير عمل هذه الأداة:", "options": ["الأحداث Events", "الخصائص Properties", "الأدوات Tools", "الطرق Methods"], "answer": 3 },
    { "q": "لكي نتمكن من استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع فيجب كتابته في الجزء المسمى:", "options": ["General", "Module", "Load", "Private"], "answer": 1 },
    { "q": "للمصادقة على صحة بيانات المعاملات الإلكترونية يجب إسنادها بـ:", "options": ["التصريح الفني", "التوقيع الإلكتروني", "اتفاقية التصديق", "رخصة الاستخدام"], "answer": 1 },

    // أسئلة المزاوجة (تحويل لأسئلة استنتاجية)
    { "q": "أي مما يلي يعتبر مصفوفة (Array)؟", "options": ["A(5)", "طريقة", "أداة", "خاصية"], "answer": 0 },
    { "q": "أي مما يلي يعتبر طريقة (Method)؟", "options": ["A(5)", "Show", "Combo Box", "Name"], "answer": 1 },
    { "q": "أي مما يلي يعتبر أداة (Tool)؟", "options": ["Show", "Combo Box", "Name", "دالة"], "answer": 1 },
    { "q": "أي مما يلي يعتبر خاصية (Property)؟", "options": ["A(5)", "Show", "Combo Box", "Name"], "answer": 3 },
    { "q": "من مزايا مرحلة التفاعل وتبادل البيانات:", "options": ["تمييز الصوت", "تشفير البيانات", "حرية الاطلاع على المعلومات الحكومية", "المراجعة والتصحيح للحل"], "answer": 2 },
    { "q": "من الصفات الشخصية لتحديد هوية المستخدم:", "options": ["تمييز الصوت", "تشفير البيانات", "البوابة الإلكترونية", "خطوات حل المسألة"], "answer": 0 },
    { "q": "من وسائل تأمين البيانات المرسلة عبر الشبكات:", "options": ["تشفير البيانات", "المراجعة والتصحيح للحل", "البوابة الإلكترونية", "مرحلة التفاعل"], "answer": 0 },
    { "q": "تعتبر المراجعة والتصحيح للحل خطوة من:", "options": ["مزايا الحكومة الإلكترونية", "وسائل التأمين", "خطوات حل أي مسألة برمجية", "مراحل النشر الإلكتروني"], "answer": 2 },
    { "q": "توفر واجهة موحدة للوصول لخدمات الحكومة الإلكترونية هي:", "options": ["البوابة الإلكترونية", "تمييز الصوت", "تشفير البيانات", "طريقة Show"], "answer": 0 }
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
    console.log(`? تم اختيار ${questions.length} سؤال عشوائي من أصل ${fullQuestionBank.length}`);
} else {
    questions = [...fullQuestionBank];
    console.log(`?? عدد الأسئلة (${questions.length}) أقل من أو يساوي ${REQUIRED_QUESTIONS_COUNT}، تم عرض جميع الأسئلة`);
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
questionsCountDisplay.innerHTML = `?? عدد أسئلة الاختبار: ${questions.length} سؤال | ?? مدة الاختبار: ${EXAM_DURATION_MINUTES} دقيقة`;
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
    
    timerDisplay.innerHTML = `?? الوقت المتبقي: ${minutes}:${seconds}`;
}

// --- دالة بدء المؤقت ---
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(function() {
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isTimeEnded = true;
            timerDisplay.innerHTML = "? انتهى الوقت! تم إرسال الإجابات تلقائياً.";
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
    alert("? انتهى وقت الاختبار! سيتم سحب الورقة وإرسال الإجابات الحالية.");
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
            alert("? انتهى الوقت! لا يمكنك الإرسال يدوياً.");
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
            const confirmMsg = `?? تنبيه: نسيتم الإجابة عن (${unansweredCount}) سؤال من أصل ${questions.length} سؤال.\n\nهل تريد الإرسال وتتحمل مسؤولية نقص الإجابات؟\n\n(موافق للإرسال / إلغاء للذهاب لأول سؤال ناقص)`;
            
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
            if (!confirm("? هل أنت متأكد من تسليم الإجابات الآن؟")) return;
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
        resultDiv.innerHTML = `<h3>? تم استلام الإجابات</h3><p>${name}، نتيجتك: ${score} من ${total}</p>`;
    }
    
    const correctBtn = document.getElementById("correct-btn");
    if (correctBtn) correctBtn.style.display = "block";

    sendData(name, score, total, isAuto);
}

function sendData(name, score, total, isAuto) {
    const status = isAuto ? "?? تلقائي (انتهاء الوقت)" : "?? يدوي";
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const msg = `الحالة: ${status}%0Aالطالب: ${name}%0Aالنتيجة: ${score}/${total}`;
    
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${msg}`).catch(error => console.error("خطأ في الإرسال لتليجرام:", error));

    const scriptURL = "https://script.google.com/macros/s/AKfycbwajDJ0QqcUVyUaD8VNl1axjuSjxgRECp5KIeTaRxpF7p47-Wf3eqa_ACMg5CPb5ObE8Q/exec"; 
    fetch(`${scriptURL}?name=${encodeURIComponent(name)}&score=${encodeURIComponent(score + " / " + total)}`, { method: 'GET', mode: 'no-cors' })
    .then(() => alert("? تم حفظ النتيجة في سجل المدرسة بنجاح."))
    .catch(error => console.error("خطأ في الإرسال:", error));
}

// --- إضافة حدث لزر التصحيح ---
const correctBtn = document.getElementById("correct-btn");
if (correctBtn) {
    correctBtn.addEventListener("click", function () {
        highlightCorrectAnswers();
        alert("? تم تظليل الإجابات الصحيحة باللون الأخضر!");
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
    console.log("?? تم بدء الاختبار بنجاح!");
    console.log(`?? عدد الأسئلة: ${questions.length} سؤال`);
    console.log(`?? المدة المتبقية: ${EXAM_DURATION_MINUTES} دقيقة`);

};