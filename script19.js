
const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (True/False) - المجموعة الأولى
    { "q": "تستخدم جملة الإعلان عن المصفوفة لتحديد عدد عناصر المصفوفة ونوع البيانات المراد تخزينها بها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعتبر المصفوفة ذات البعد الواحد عبارة عن صف واحد وعدد من الأعمدة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لكل عنصر من عناصر المصفوفة نوع بيانات مختلف عن العناصر الأخرى.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عند الإعلان عن مصفوفة باستخدام الكلمة المحجوزة Dim فإن الفهرس يبدأ دائماً من الرقم 1.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "لا يجوز استخدام متغير من نوع المصفوفات في التعبيرات الحسابية والمنطقية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستخدم المصفوفات ذات البعدين لتخزين البيانات التي يمكن ترتيبها في شكل جداول.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تستخدم الدوال الوظيفية Function لغرض أداء وظيفة معينة ولا ترجع أي قيمة.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يجب أن يكون اسم الدالة من ضمن الكلمات المحجوزة في لغة البيسك المرئي.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يتم الإعلان عن الإجراء الفرعي من نوع Sub في الجزء العام General من نافذة الشفرة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "عند استدعاء الإجراء الفرعي Sub، لا يشترط تطابق عدد المعاملات مع القيم المرسلة.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستخدم الخصائص Properties لضبط مظهر وسلوك الأدوات في بيئة التطوير.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الحدث Click يحدث عند قيام المستخدم بالنقر المزدوج على زر الفأرة الأيمن.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستخدم أداة مربع النص Text Box لعرض نصوص لا يمكن للمستخدم تعديلها أثناء التشغيل.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستخدم أداة صندوق الاختيار Check Box لاختيار خيار واحد فقط من بين مجموعة خيارات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يعتبر التشفير من أهم الوسائل المستخدمة لحماية البيانات أثناء انتقالها عبر الشبكات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعد الفيروسات برامج حاسوبية مصممة لغرض إلحاق الضرر بنظام التشغيل أو البيانات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لا يمكن للفيروسات الانتقال من جهاز لآخر عبر البريد الإلكتروني.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تعتبر برامج حصان طروادة نوعاً من أنواع البرمجيات المفيدة التي تحمي الجهاز.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "من مزايا الحكومة الإلكترونية تقليل الوقت والجهد اللازمين لإنجاز المعاملات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعد مرحلة النشر الإلكتروني أولى مراحل نضج الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },

    // أسئلة الاختيار من متعدد (Multiple Choice) - المجموعة الأولى
    { "q": "عند الإعلان عن المصفوفة Dim MyArr(5) As Integer، فإن عدد عناصرها هو:", "options": ["4", "5", "6", "1"], "answer": 2 },
    { "q": "الخاصية التي تستخدم لتغيير النص الظاهر على أداة زر الأمر Command Button هي:", "options": ["Name", "Text", "Caption", "Visible"], "answer": 2 },
    { "q": "تستخدم الدالة ............ لتحويل النصوص إلى قيم عددية:", "options": ["Str", "Val", "Int", "Mid"], "answer": 1 },
    { "q": "أي من الأدوات التالية تستخدم لعرض قائمة من العناصر ليختار المستخدم منها؟", "options": ["Label", "Frame", "ListBox", "Timer"], "answer": 2 },
    { "q": "المرحلة التي يتم فيها التفاعل الحقيقي بين المواطن والحكومة وإرسال البيانات واستلامها هي:", "options": ["الظهور الحكومي", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "تكامل الخدمات"], "answer": 2 },
    { "q": "ما هي الأداة التي تستخدم لتجميع مجموعة من الأدوات المرتبطة وظيفياً داخل إطار واحد؟", "options": ["Shape", "Frame", "Image", "Line"], "answer": 1 },
    { "q": "تستخدم جملة ............ لإنهاء تنفيذ البرنامج تماماً ومسحه من الذاكرة:", "options": ["Exit", "End", "Stop", "Close"], "answer": 1 },
    { "q": "أي مما يلي يعتبر من مخاطر الإنترنت والجرائم الإلكترونية؟", "options": ["التشفير", "الجدار الناري", "الاصطياد الإلكتروني", "التوقيع الرقمي"], "answer": 2 },
    { "q": "الأداة التي تستخدم لإضافة الصور إلى النموذج هي:", "options": ["PictureBox", "TextBox", "Label", "CommandButton"], "answer": 0 },
    { "q": "يتم تعريف المصفوفة ذات البعدين (صفوف وأعمدة) باستخدام:", "options": ["دليلين", "دليل واحد", "ثلاثة أدلة", "بدون دليل"], "answer": 0 },

    // أسئلة الصواب والخطأ (True/False) - المجموعة الثانية
    { "q": "يمكننا من شريط القوائم MenuBar إضافة نموذج جديد Add Form للمشروع من خلال القائمة Edit.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "معاملات الدالة Function هي عبارة عن متغيرات تبين مخرجاتها فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الحكومة الإلكترونية هي أسلوب في الحكم والإدارة يعتمد على استخدام تقنية المعلومات والاتصالات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "البرامج الفرعية SUB هي برامج مستقلة تؤدي وظيفة معينة، ويمكن استدعاؤها من البرنامج الرئيسي أو من أي برنامج فرعي آخر.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لإنهاء أو مغادرة الدالة Function دون استكمال تنفيذ الأوامر بها نستخدم الأمر Exit Function.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تستخدم أدوات التحكم لإجراء عمليات الإدخال والإخراج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يجب أن يكون هناك توافق في نوع البيانات في البرنامج الفرعي وفي جملة استدعاؤه.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "للتعامل مع مصفوفة ذات بعدين فإننا نستخدم حلقة دوران واحدة للصفوف والأعمدة في نفس الوقت.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "من مهام الجدار الناري منع التواصل مع المواقع التي وردت بها مصطلحات تزدري الأديان.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتم الإعلان عن المصفوفة باستخدام الكلمة المحجوزة Dim.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "النافذة التي تعتبر المكان الرئيسي الذي يتم فيه تصميم البرامج والتطبيقات هي نافذة النموذج Form.", "options": ["صح", "خطأ"], "answer": 0 },
   // { "q": "لتحديد حالة زر الخيار Option Button هل هو محدد أم لا نستخدم الخاصية Value.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لا يسهم الجدار الناري Firewall في حماية قواعد البيانات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تعتبر مرحلة الظهور الحكومي أولى مراحل نضج الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "من وسائل تأمين قواعد البيانات توفير أقصى درجات السرية لبيانات الولوج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تسمى المصفوفة التي يتم تحديد عناصرها في جمل البرنامج باستخدام دليل واحد بالمصفوفة ذات البعد الواحد.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "عند الرغبة في استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع فيجب كتابته في الجزء المسمى Module.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من رقم مكون من أرقام صحيحة وعشرية هي الدالة Int.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن للمواطن تنزيل نسخ إلكترونية من المستندات الحكومية وملؤها إلكترونياً في مرحلة التفاعل وتبادل البيانات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "قرصنة البرمجيات هي عملية نسخ البرمجيات واستخدامها أو تداولها دون إذن مالكيها.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (Multiple Choice) - المجموعة الثانية
    { "q": "حجم المصفوفة Dim A(4, 5) As Integer هو:", "options": ["9 عناصر", "20 عنصر", "30 عنصر", "25 عنصر"], "answer": 2 },
    { "q": "الأداة التي تستخدم لعرض أكثر من خيار وانتقاء خيار واحد فقط هي:", "options": ["صندوق القائمة ListBox", "زر الأمر CommandButton", "صندوق التحقق CheckBox", "زر الخيار OptionButton"], "answer": 3 },
    { "q": "لكي نتمكن من استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع يجب كتابته في:", "options": ["General", "Module", "Load", "Private"], "answer": 1 },
    { "q": "البرمجيات التي لا تحتاج لترخيص ويمكن استخدامها لفترة غير محددة بلا تكلفة هي:", "options": ["التطبيقية", "التجارية", "المجانية", "التجريبية"], "answer": 2 },
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من الرقم هي:", "options": ["Trim", "Int", "Chr", "Val"], "answer": 1 },
    { "q": "من أنواع الفيروسات المنتشرة حالياً:", "options": ["الخطير", "التشغيل", "الجدار الناري", "الدودة"], "answer": 3 },
    { "q": "المصادقة على صحة بيانات المعاملات الإلكترونية تتطلب إسنادها بـ:", "options": ["التصريح الفني", "التوقيع الإلكتروني", "اتفاقية التصديق", "رخصة الاستخدام"], "answer": 1 },
   // { "q": "لإضافة عنصر لصندوق القائمة ListBox نستخدم الطريقة (Method):", "options": ["AddList", "InsertItem", "MovList", "AddItem"], "answer": 3 },
    { "q": "الحدث KeyPress يحدث عند:", "options": ["إبقاء الضغط على الفأرة", "نقل الأداة", "ضغط مفتاح من لوحة المفاتيح", "إنهاء الضغط"], "answer": 2 },
    { "q": "المرحلة التي يتم فيها التفاعل الحقيقي وإرسال واستلام البيانات هي:", "options": ["الظهور الحكومي", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "تكامل الخدمات"], "answer": 2 },

    // أسئلة المزاوجة والمنطق
    { "q": "يعتبر التشهير الإلكتروني من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات", "لوائح حماية قواعد البيانات"], "answer": 0 },
    { "q": "يعتبر حصان طروادة (Trojan Horse) من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات", "لوائح حماية قواعد البيانات"], "answer": 1 },
    { "q": "يعتبر التشفير الإلكتروني من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات المرسلة", "مستويات حماية البرمجيات"], "answer": 2 },
    { "q": "يعتبر تحديد صلاحيات الاستخدام من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "مستويات حماية البرمجيات", "وسائل حماية البيانات"], "answer": 2 },
    { "q": "يعتبر توفير أقصى درجات السرية لبيانات الولوج من:", "options": ["أنواع الفيروسات", "لوائح حماية قواعد البيانات", "جرائم الحاسوب", "وسائل حماية البيانات"], "answer": 1 }
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