const fullQuestionBank = [
    // أولاً: أسئلة الصواب والخطأ  
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
    { "q": "لتحديد حالة زر الخيار Option Button هل هو محدد أم لا نستخدم الخاصية Value.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لا يسهم الجدار الناري Firewall في حماية قواعد البيانات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تعتبر مرحلة الظهور الحكومي أولى مراحل نضج الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "من وسائل تأمين قواعد البيانات توفير أقصى درجات السرية لبيانات الولوج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تسمى المصفوفة التي يتم تحديد عناصرها في جمل البرنامج باستخدام دليل واحد بالمصفوفة ذات البعد الواحد.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "عند الرغبة في استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع فيجب كتابته في الجزء المسمى Module.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من رقم مكون من أرقام صحيحة وعشرية هي الدالة Int.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمكن للمواطن تنزيل نسخ إلكترونية من المستندات الحكومية وملؤها إلكترونياً في مرحلة التفاعل وتبادل البيانات.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "قرصنة البرمجيات هي عملية نسخ البرمجيات واستخدامها أو تداولها دون إذن مالكيها.", "options": ["صح", "خطأ"], "answer": 0 },

    // ثانياً: أسئلة الاختيار من متعدد (Multiple Choice)
    { "q": "حجم المصفوفة Dim A(4, 5) As Integer هو:", "options": ["9 عناصر", "20 عنصر", "30 عنصر", "25 عنصر"], "answer": 2 },
    { "q": "الأداة التي تستخدم لعرض أكثر من خيار وانتقاء خيار واحد فقط هي:", "options": ["صندوق القائمة ListBox", "زر الأمر CommandButton", "صندوق التحقق CheckBox", "زر الخيار OptionButton"], "answer": 3 },
    { "q": "لكي نتمكن من استدعاء البرنامج الفرعي من أي نموذج آخر في المشروع يجب كتابته في:", "options": ["General", "Module", "Load", "Private"], "answer": 1 },
   // { "q": "البرمجيات التي لا تحتاج لترخيص ويمكن استخدامها لفترة غير محددة بلا تكلفة هي:", "options": ["التطبيقية", "التجارية", "المجانية", "التجريبية"], "answer": 2 },
    { "q": "الدالة التي ترجع الجزء الصحيح فقط من الرقم هي:", "options": ["Trim", "Int", "Chr", "Val"], "answer": 1 },
    { "q": "من أنواع الفيروسات المنتشرة حالياً:", "options": ["الخطير", "التشغيل", "الجدار الناري", "الدودة"], "answer": 3 },
    { "q": "المصادقة على صحة بيانات المعاملات الإلكترونية تتطلب إسنادها بـ:", "options": ["التصريح الفني", "التوقيع الإلكتروني", "اتفاقية التصديق", "رخصة الاستخدام"], "answer": 1 },
  //  { "q": "لإضافة عنصر لصندوق القائمة ListBox نستخدم الطريقة (Method):", "options": ["AddList", "InsertItem", "MovList", "AddItem"], "answer": 3 },
    { "q": "الحدث KeyPress يحدث عند:", "options": ["إبقاء الضغط على الفأرة", "نقل الأداة", "ضغط مفتاح من لوحة المفاتيح", "إنهاء الضغط"], "answer": 2 },
    { "q": "المرحلة التي يتم فيها التفاعل الحقيقي وإرسال واستلام البيانات هي:", "options": ["الظهور الحكومي", "النشر الإلكتروني", "التفاعل وتبادل البيانات", "تكامل الخدمات"], "answer": 2 },

    // ثالثاً: أسئلة المزاوجة (الجداول)
    { "q": "يعتبر التشهير الإلكتروني من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات", "لوائح حماية قواعد البيانات"], "answer": 0 },
    { "q": "يعتبر حصان طروادة (Trojan Horse) من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات", "لوائح حماية قواعد البيانات"], "answer": 1 },
    { "q": "يعتبر التشفير الإلكتروني من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "وسائل حماية البيانات المرسلة", "مستويات حماية البرمجيات"], "answer": 2 },
    { "q": "يعتبر تحديد صلاحيات الاستخدام من:", "options": ["جرائم الحاسوب", "أنواع الفيروسات", "مستويات حماية البرمجيات", "وسائل حماية البيانات"], "answer": 2 },
    { "q": "يعتبر توفير أقصى درجات السرية لبيانات الولوج من:", "options": ["أنواع الفيروسات", "لوائح حماية قواعد البيانات", "جرائم الحاسوب", "وسائل حماية البيانات"], "answer": 1 },

    // أسئلة الاختيار من متعدد (تكملة)
    { "q": "أي مما يلي لا يعتبر من أعراض الإصابة بفيروس الحاسوب؟", "options": ["تكرار رسائل الخطأ في أكثر من برنامج", "حدوث بطء شديد في تنفيذ بعض التطبيقات", "عدم تعرف الحاسوب على طابعة جديدة تم إضافتها", "توقف بعض التطبيقات البرمجية عن العمل"], "answer": 2 },
  //  { "q": "البرمجيات التجريبية (Shareware) هي برمجيات:", "options": ["غير مجانية ولكن يمكن استغلالها لفترة معينة من الزمن", "يمكن تعديلها لتعمل بصورة مغايرة لنسختها الأصلية", "تحتاج لترخيص متعدد الاستخدام للمؤسسات", "توزع مجاناً ولفترة غير محدودة"], "answer": 0 },
    { "q": "يعرف البرنامج الذي يقوم بشيء آخر غير ما يعتقده مشغل البرنامج، ويتسبب بأضرار للجهاز بـ:", "options": ["قرصنة البرمجيات", "فيروس حصان طروادة (Trojan)", "التلاعب ببيانات الحاسوب", "النسخ غير المصرح به"], "answer": 1 },
    { "q": "أي الجمل التالية تستخدم للإعلان عن مصفوفة ذات بعدين بشكل صحيح؟", "options": ["Dem A(n1,n2) As type", "Sub A(n1) As type", "Dim A(n1, n2) As type", "Dim A(n1) As type"], "answer": 2 },
   // { "q": "الخاصية التي تستخدم لعرض القائمة في ترتيب أبجدي داخل أداة صندوق القائمة (List Box) هي:", "options": ["AddItem", "List", "Sorted", "ListIndex"], "answer": 2 },
    { "q": "النافذة التي تعرض جميع خصائص الأداة المختارة وتتيح إمكانية ضبطها هي نافذة:", "options": ["النموذج", "الأدوات", "الخصائص (Properties)", "القوائم"], "answer": 2 },
    { "q": "من أهم الأحداث الخاصة بالنموذج (Form) والذي ينفذ تلقائياً عند بدء تشغيله هو:", "options": ["Load", "Start", "Click", "Show"], "answer": 0 },
    { "q": "الأداة التي تستخدم لعرض أكثر من خيار وانتقاء أحد الخيارات فقط (خيار وحيد) هي:", "options": ["صندوق القائمة (List Box)", "زر الأمر (Command Button)", "صندوق التحقق (Check Box)", "زر الخيار (Option Button)"], "answer": 3 },

    // أسئلة المزاوجة (المجموعة الأولى)
    { "q": "تعتبر Caption في لغة البيسك المرئي:", "options": ["خاصية", "دالة", "وظيفة", "مصفوفة", "أداة"], "answer": 0 },
    { "q": "تعتبر Format في لغة البيسك المرئي:", "options": ["خاصية", "دالة", "وظيفة", "مصفوفة", "أداة"], "answer": 1 },
    { "q": "تعتبر Show في لغة البيسك المرئي:", "options": ["خاصية", "دالة", "وظيفة", "مصفوفة", "أداة"], "answer": 2 },
    { "q": "تعتبر Fx(10) في لغة البيسك المرئي مثالاً على:", "options": ["خاصية", "دالة", "وظيفة", "مصفوفة", "أداة"], "answer": 3 },
    { "q": "تعتبر Frame في لغة البيسك المرئي:", "options": ["خاصية", "دالة", "وظيفة", "مصفوفة", "أداة"], "answer": 4 },

    // أسئلة المزاوجة (المجموعة الثانية)
    { "q": "يمكن إثبات الهوية في التعاملات الإلكترونية باستخدام:", "options": ["تشفير المعلومات", "الإجراءات الفرعية والدوال", "الإنترنت", "الصفات الشخصية", "التوقيع الإلكتروني"], "answer": 4 },
    { "q": "يمكن التواصل مع أنظمة الحكومة الإلكترونية باستخدام:", "options": ["تشفير المعلومات", "الإجراءات الفرعية والدوال", "الإنترنت", "الصفات الشخصية", "التوقيع الإلكتروني"], "answer": 2 },
    { "q": "يمكن تأمين الاستخدام المشروع للتطبيقات البرمجية (حماية الملكية) باستخدام:", "options": ["تشفير المعلومات", "الإجراءات الفرعية والدوال", "الإنترنت", "الصفات الشخصية", "التوقيع الإلكتروني"], "answer": 3 },
    { "q": "يمكن تقسيم المشروع إلى مجموعة أجزاء برمجية مستقلة باستخدام:", "options": ["تشفير المعلومات", "الإجراءات الفرعية والدوال", "الإنترنت", "الصفات الشخصية", "التوقيع الإلكتروني"], "answer": 1 },
    { "q": "يمكن تأمين البيانات المرسلة عبر الشبكات من المتصنتين باستخدام:", "options": ["تشفير المعلومات", "الإجراءات الفرعية والدوال", "الإنترنت", "الصفات الشخصية", "التوقيع الإلكتروني"], "answer": 0 }
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
