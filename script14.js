const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (True/False) من الصفحات 3 و 4
    {
        "q": "لإضافة النص (Visual Basic) لصندوق النص Text1 في لغة البيسك المرئي:",
        "options": [
            "<div dir='ltr' style='display:inline-block;'>Text1.Text = Visual Basic</div>",
            "<div dir='ltr' style='display:inline-block;'>Text1.Text = \"Visual Basic\"</div>",
            "<div dir='ltr' style='display:inline-block;'>Text1 text = \"Visual Basic\"</div>",
            "<div dir='ltr' style='display:inline-block;'>Text1.Caption = \"Visual Basic\"</div>"
        ],
        "answer": 1
    },
{
        "q": "الخطأ فى البرنامج التالي هو خطأ \n <div class='code-block'>Private Sub Form_Load()\n   Command1.Cabtion = true\nEnd Sub</div>",
        "options": ["منطقي", "لغوي"],
        "answer": 1
    },
{
 "q": "البرنامج التالي يقوم برسم :\n<div class='code-block'>Private Sub Form_Load()\nMe.ScaleMode = 3\nMe.Line (30, 30)-(100, 100), vbBlue, BF\nEnd Sub</div>",
    "options": ["رسم مستطيل او مربع ", "رسم دائرة", "لا شئ مما ذكر"],
    "answer": 0
},
{
        "q": "اي من الادوات التالية زر امر",
        "options": ["frmWelcome", "lblName", "cmdFinish", "txtname"],
        "answer": 2
    },
    {
        "q": "Print  بدلا  من   Prent  عند كتابة الامر",
        "options": ["النحوية", "المنطقية", "اللغوية", "الاملائية"],
        "answer": 2
    },
{
        "q": "النافذة التى تستخدم للتبديل بين نافذة النموذج و صفحة محرر الكود هي",
        "options": ["project explorer Window نافذة مستكشف المشروع", "form window نافذة النموذج", "Properties window نافذة اخصائص", "form layout window نافذة شكل النموذج"],
        "answer": 0
    },
    {
        "q": "يمكن اظهار نافذة الخصائص بضغط مفتاح",
        "options": ["F5", "F4", "Ctrl + G"],
        "answer": 1
    },
{
        "q": "في البرنامج التالي تم الإعلان عن مصفوفة ذات بعد واحد عدد عناصرها:\n<div class='code-block'>Private Sub Form_load()\nDim A(3) As string\nFor i = 0 to 3\nPrint A(i) \nNext i\nEnd Sub.</div>",
        "options": ["4 من النوع الحرفي", "4 من النوع الصحيح", "4 من النوع الكسري"],
        "answer": 0 
    },
 {
        "q": "النافذة التى تستخدم لمعرفة مكان ظهور النموذج عند تنفيذ البرنامج",
        "options": ["Immediate Window النافذة السريعة", "form layout window نافذة شكل النموذج", "form window نافذة النموذج"],
        "answer": 1
    },
    { "q": "تسمى المصفوفة التي يتم تحديد عناصرها في جمل البرنامج باستخدام دليل واحد بالمصفوفة ذات البعد الواحد.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تتم عمليات الإدخال والإخراج لأي إجراء فرعي من نوع Sub.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تنتهي الدوال الوظيفية بجملة End Sub.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يتم ضبط خصائص الأدوات أثناء تصميم البرنامج فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "من مهام الجدار الناري منع التواصل مع المواقع التي وردت بها مصطلحات تزدي الأديان.", "options": ["صح", "خطأ"], "answer": 0 },
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
    { "q": "المعلومات الشخصية للمواطنين المخزنة في قواعد البيانات للمؤسسات العامة يمكن الحصول عليها من خدمات الحكومة الالكترونية", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لكل عنصر من عناصر المصفوفة نوع بيانات مختلف عن العناصر الأخرى.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تقوم الخوارزمية بتحديد الأدوات المطلوبة التي توفرها بيئة البرمجة لإنجاز الحل.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "نوع القيمة المعادة من الدالة يجب أن يذكر في جملة الإعلان عن الدالة.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (Multiple Choice) من الصفحات 5 و 6 و 7
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من رقم مكون من أرقام صحيحة وعشرية هي:", "options": ["Trim", "Int", "Chr", "Val"], "answer": 1 },
    
    { "q": "من التحديات التقنية التي تواجه تطبيق الحكومة الإلكترونية:", "options": ["سرعة أداء الحكومة وشفافية إجراءاتها", "ارتفاع معدل أمية الحاسوب لدى المواطنين", "توفير البنية التحتية الملائمة من تقنيات المعلومات والاتصالات", "حرص الحكومات على تعويض دور المواطنين"], "answer": 2 },
    { "q": "يمكن للمواطن تنزيل نسخ إلكترونية من المستندات الحكومية وملؤها إلكترونياً في مرحلة:", "options": ["تكامل الخدمات وإنجاز المعاملات", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "الظهور الحكومي"], "answer": 1 },
    { "q": "النافذة التي تعتبر المكان الرئيسي الذي يتم فيه تصميم البرامج والتطبيقات في لغة بيسك المرئي هي نافذة:", "options": ["النموذج", "الخصائص", "المشروع", "الأدوات"], "answer": 0 },
    { "q": "حجم المصفوفة myarray(3,3) As String هو:", "options": ["6", "16", "12", "9"], "answer": 1 },
    { "q": "بيانات المصفوفة myarray(3,3) As String من النوع:", "options": ["الصحيح", "الحرفي", "الكسري", "المنطقي"], "answer": 1 },
    { "q": "من وسائل تأمين قواعد البيانات:", "options": ["ربط الحواسيب بشبكة الإنترنت دون اتخاذ تدابير حماية", "إتاحة الوصول للبيانات من قبل أي شخص وفي أي وقت", "تشفير البيانات التي يتم حفظها في قواعد البيانات", "توفير أقصى درجات السرية لبيانات الولوج للبيانات"], "answer": 3 },
    { "q": "المصفوفة ذات البعدين تتكون من عدد من:", "options": ["السجلات", "الحقول", "العناصر والمحاور", "الصفوف والأعمدة"], "answer": 3 },
   
    { "q": "قيام شخص باستخدام حاسوب العمل في مهام غير المنصوص عليها ضمن اختصاصه الوظيفي هو تعريف لجريمة:", "options": ["الاحتيال المهني", "سرقة وقت الحاسوب", "انتهاك حقوق الملكية", "المهام المجدولة"], "answer": 1 },
    { "q": "أي مما يلي من خصائص أداة العنوان Label:", "options": ["Change", "Text", "Click", "Caption"], "answer": 3 },
    { "q": "البرمجيات التي لا تحتاج لترخيص ويمكن استخدامها لفترة غير محددة وهي متوفرة بلا تكلفة هي البرمجيات:", "options": ["التطبيقية", "التجارية", "المجانية", "التجريبية"], "answer": 2 },

    { "q": "من أنواع الفيروسات المنتشرة حالياً:", "options": ["الخطير", "التشغيل", "الجدار الناري", "الدودة"], "answer": 3 },
    { "q": "أي العبارات التالية صحيحة حول الإجراء الفرعي؟", "options": ["يمكن أن يكون بدون معاملات", "يرجع قيمة واحدة فقط", "كل معاملاته مدخلات فقط", "يجب تحديد نوعه"], "answer": 0 },
    { "q": "الأداة التي تستخدم لتنفيذ أمر أو أكثر أو لقبول أو رفض قيم أو مدخلات هي زر:", "options": ["Label العنوان", "Command الأمر", "Text النص", "Option الخيار"], "answer": 1 },
    { "q": "دوال مبنية داخل الأداة نفسها تؤدي وظيفة معينة متعلقة بسير عمل هذه الأداة:", "options": ["Events الأحداث", "Properties الخصائص", "Tools الأدوات", "Methods الطرق"], "answer": 3 },
    { "q": "لكي نتمكن من استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع فيجب كتابته في الجزء المسمى:", "options": ["General", "Module", "Load", "Private"], "answer": 1 },
    { "q": "للمصادقة على صحة بيانات المعاملات الإلكترونية يجب إسنادها بـ:", "options": ["التصريح الفني", "التوقيع الإلكتروني", "اتفاقية التصديق", "رخصة الاستخدام"], "answer": 1 },

    // أسئلة المزاوجة (تم تحويلها إلى أسئلة عادية) من الصفحة 8
    { "q": "طريقة تستخدم لاظهار النموذج:", "options": ["Str", "Combo Box", "Show", "Name"], "answer": 2 },
    { "q": "اداة السرد هي", "options": ["Str", "Combo Box", "Show", "Name"], "answer": 1 },
    { "q": "خاصية ", "options": ["Str", "Combo Box", "Show", "Name"], "answer": 3 },
    { "q": "دالة ", "options": ["Str", "Combo Box", "Show", "Name"], "answer": 0 },
    { "q": "تمييز الصوت يعتبر:", "options": ["من مزايا مرحلة التفاعل وتبادل البيانات", "من الصفات الشخصية لتحديد هوية المستخدم", "من وسائل تأمين البيانات المرسلة عبر الشبكات", "من مؤشرات الشفافية التي تميز الحكومات الديمقراطية"], "answer": 1 },
    { "q": "تشفير البيانات يعتبر:", "options": ["من مزايا مرحلة التفاعل وتبادل البيانات", "من الصفات الشخصية لتحديد هوية المستخدم", "من وسائل تأمين البيانات المرسلة عبر الشبكات", "من مؤشرات الشفافية التي تميز الحكومات الديمقراطية"], "answer": 2 },
   
    { "q": "المراجعة والتصحيح للحل تعتبر:", "options": ["من مزايا مرحلة التفاعل وتبادل البيانات", "من الصفات الشخصية لتحديد هوية المستخدم", "من وسائل تأمين البيانات المرسلة عبر الشبكات", "من خطوات حل أي مسألة باستخدام لغة البيسك"], "answer": 3 },
    { "q": "البوابة الإلكترونية تعتبر:", "options": ["من مزايا مرحلة التفاعل وتبادل البيانات", "من الصفات الشخصية لتحديد هوية المستخدم", "من وسائل تأمين البيانات المرسلة عبر الشبكات", "من خطوات حل أي مسألة باستخدام لغة البيسك"], "answer": 0 }
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