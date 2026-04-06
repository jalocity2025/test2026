// --- الجزء الأول: بنك الأسئلة (48 سؤال مستخرج من الصور) ---
const allQuestions = [
    // أسئلة الصواب أو الخطأ (12 سؤال)
    { "q": "الحدث (Load) من أهم الأحداث الخاصة بالنموذج والذي ينفذ تلقائياً عند تحميل النموذج.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "زادت فرص الاستغلال السيء لتقنيات الاتصالات والمعلوماتية مع الانتشار الواسع لاستخدامات الحاسوب في أغراض شتى.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تستخدم الخاصية (Visible) لإظهار أو إخفاء زر الأمر (Command Button).", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لا يمكن تغيير النص المعروض بأداة العنوان (Label) مباشرة بالنقر خلاله.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الخصائص (Properties) هي دوال تعود بقيم معينة أو إجراءات تقوم بوظيفة ما ولكن لا تعود بقيم.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "معاملات الإجراء الفرعي (Sub) هي متغيرات لتمثيل البيانات الداخلة والخارجة منها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "استخدام الطريقة (Setfocus) يؤدي إلى وضع المؤشر داخل صندوق النص (Text Box).", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "فيروس الدودة (Worm Virus) يعد من أخطر أنواع الفيروسات لأنه يتم نسخ نفسه ويسبب تعطل الشبكة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تغيب معايير التشغيل وفوضى الرقابة على أداء الإدارات الحكومية المختلفة عند تطبيق نظام الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الـ (Module) هو جزء من المشروع يتم فيه كتابة أي إجراء فرعي أو دالة بحيث تصبح متاحة للاستخدام من نموذج واحد فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الخدمات الإلكترونية هي خدمات يتم إنجازها بالحضور الشخصي لضمان إتمام الإنجاز.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "في جملة استدعاء الإجراء الفرعي (Sub) لا يذكر نوع بيانات المعاملات.", "options": ["صح", "خطأ"], "answer": 0 },
    
    // أسئلة الاختيار من متعدد (36 سؤال)
    { "q": "عملية خداع زوار صفحات الإنترنت وبرامج البريد الإلكتروني وحثهم على كتابة معلوماتهم الحساسة لاستغلالها بصورة غير شرعية تسمى:", "options": ["التشفير الإلكتروني", "التخريب الإلكتروني", "الاصطياد الإلكتروني", "التزوير الإلكتروني"], "answer": 2 },
    { "q": "البيانات المشفرة لا يمكن للمخترق الاستفادة منها لأنها:", "options": ["يجهل مستلم البيانات", "لا يملك حاسوب ذو سرعة عالية", "لا يملك طريقة التشفير", "لا يملك حق الدخول للشبكة"], "answer": 2 },
    { "q": "الجملة البرمجية المستخدمة لإظهار النموذج (Form1):", "options": ["Form1.Show", "Form1.Cls", "Form1.Hide", "Form1.Show = True"], "answer": 0 },
    { "q": "لعرض النصوص دون السماح بتعديلها داخل صندوق النص (Text Box) فإننا نستعين بالخاصية:", "options": ["Visible", "Locked", "Caption", "Text"], "answer": 1 },
    { "q": "الجملة A = Int(8.47) تقوم بتعيين قيمة للمتغير (A) هي:", "options": ["9", "8", "8.7", "8.5"], "answer": 1 },
    { "q": "المعامل المدخل الوحيد للدالة (Function Mark(Grade As Integer) As String) هو المتغير:", "options": ["Mark", "Grade", "Integer", "String"], "answer": 1 },
    { "q": "نوع البيانات المعادة من الدالة (Function Mark(Grade As Integer) As String) هي:", "options": ["عدد كسري", "عدد صحيح", "عدد حقيقي", "سلسلة حرفية"], "answer": 3 },
    { "q": "لتنفيذ البرنامج في لغة البيسك المرئي ننقر على الأمر (Start) من القائمة:", "options": ["Run", "Debug", "Format", "File"], "answer": 0 },
    { "q": "تعد بيانات الصفة الشخصية أكثر دقة في تمييز المستخدمين وذلك لـ:", "options": ["معرفة الجميع لبياناتها", "صعوبة تزويرها أو تقليدها", "الاحتفاظ بها في مكان آمن", "تغييرها من وقت لآخر"], "answer": 1 },
    { "q": "الحدث (MouseUp) يحدث عند:", "options": ["غلق زر الفأرة", "رفع الضغط عن زر الفأرة", "النقر مرة واحدة فوق أداة معينة", "تحريك مؤشر الفأرة فوق الأداة"], "answer": 1 },
    { "q": "القيمة المعادة من الجملة B = Mid('Good-evening-How-are-you', 14, 3):", "options": ["How - are", "evening - How", "- evening", "How"], "answer": 3 },
    { "q": "القائمة التي يتم تشغيل برامج من خارج بيئة البرمجة وذلك لخلق تكامل مع اللغة هي قائمة:", "options": ["الأدوات Tools", "التنسيق Format", "الإضافات Add Ins", "المساعدة Help"], "answer": 2 },
    { "q": "لرسم خط مستقيم أو مربع أو مستطيل على النموذج تستخدم الطريقة:", "options": ["Circle", "Move", "Cls", "Line"], "answer": 3 },
    { "q": "يمكن إنهاء استكمال تنفيذ بقية جمل الإجراء الفرعي في أي موقع قبل الوصول إلى جملة End Sub باستخدام الجملة:", "options": ["End", "End Sub", "Exit Sub", "Goto Sub"], "answer": 2 },
    { "q": "الجملة A = Sqr(36) تقوم بتعيين قيمة للمتغير A هي:", "options": ["216", "36", "4", "6"], "answer": 3 },
    { "q": "يقوم هذا البرنامج بطباعة القيمة: (\na = Abs(-35.23) \nPrint a)", "options": ["-35.2", "35.23", "35", "36"], "answer": 1 },
    { "q": "من الملاحظات التي يجب أن تؤخذ بعين الاعتبار عند عملية استدعاء دالة:", "options": ["عدد مدخلات الدالة نفس عدد مخرجها", "تحديد اسم متغير واحد كمدخل للدالة", "استخدام جملة الاستدعاء Call", "توافق في نوع البيانات للمعاملات في جملتي الإعلان والاستدعاء"], "answer": 3 },
    { "q": "عند كتابة بعض الأوامر بصورة غير صحيحة مثل كتابة حرف خاطئ في أحد حروف الأمر يعد ذلك في لغة البرمجة خطأ:", "options": ["نحوي", "حسابي", "منطقي", "لغوي"], "answer": 0 },
    { "q": "في صندوق النص تستخدم الخاصية ...... لعرض أو إخفاء أشرطة التمرير:", "options": ["MaxLength", "ScrollBars", "Multiline", "Locked"], "answer": 1 },
    { "q": "مجموعة من البرمجيات والأجهزة التي تحمي شبكة المعلومات ولا تسمح بالتواصل مع أي معلومات مرسلة تهدد أمن معلومات الشبكة تسمى:", "options": ["الجدار التاريخي", "الجدار الناري", "قرصنة المعلومات", "الرقابة الإلكترونية"], "answer": 1 },
    { "q": "من التحديات البشرية التي تواجه فرص نجاح تجارب الحكومة الإلكترونية في دول العالم الثالث:", "options": ["تخلف ورداءة البنية التحتية في قطاع الإنترنت", "استعداد المواطنين للتعامل والتعاطي الإيجابي مع الخدمات الإلكترونية", "انخفاض نسبة المواطنين المالكين لأجهزة الحواسيب", "حرص الحكومة على تعزيز دور المواطنين في رقابة الحكومة"], "answer": 2 },
    { "q": "أي من الجمل التالية هي اسم خاطئ لإجراء؟", "options": 
["()Form1_Load",
 "()Command1_Click",
 " \"\"=Label1_Caption "],
 "answer": 2 },
    { "q": "الحدث هو إجراء يبدأ بجملة (Sub) وينتهي بجملة:", "options": ["()Finish", "()End", "End Sub", "()The End"], "answer": 2 },
    { "q": "للتحكم في اتجاه النموذج وجعله من اليمين لليسار يتم تحويل قيمة الخاصة (.............) من False إلى True:", "options": ["RightToLeft", "Arabic", "Alignment", "Style"], "answer": 0 },
    { "q": "تتم التفاعلات التي تتم ضمن تعاملات الحكومة الإلكترونية وتحدث بين عناصر متمثلة في:", "options": ["المواطن والإدارة الحكومية والقطاع الخاص", "المواطن والإدارة الحكومية", "المواطن والقطاع الخاص", "الإدارة الحكومية والقطاع الخاص"], "answer": 0 },
    { "q": "تتم إضافة نموذج إلى المشروع عن طريق قائمة:", "options": ["Project - ثم نقر على الأمر Add Form", "New Project", "View", "File"], "answer": 0 },
    { "q": "لتحريك النموذج أو الأداة بدءاً من الطرف العلوي فإننا نستخدم الخاصية:", "options": ["Left", "Height", "Top", "Width"], "answer": 2 },
    { "q": "يمكن التبديل بين النماذج من خلال النقر المزدوج بالفأرة على اسم النموذج في نافذة:", "options": ["مستكشف المشروع", "شكل النموذج", "الخصائص", "النموذج"], "answer": 0 },
    { "q": "أحد النماذج التالية لا يعد من خدمات ومعاملات الحكومة الإلكترونية:", "options": ["عمليات مكافحة الهجرة غير الشرعية", "الأحوال الشخصية الإلكترونية", "الانتخاب الإلكتروني", "استخراج الرخص وأدوات مزاولة الأعمال"], "answer": 0 },
    { "q": "في الدالة الوظيفية تكون مخرجاتها في:", "options": ["اسمها", "معاملاتها", "الجزء General", "الجزء Module"], "answer": 0 },
    { "q": "الجملة التي تعمل على تغيير نص يظهر داخل أداة العنوان هي:", "options":
 ["\"صباح الخير\"=Label _ Caption  ",
" \"صباح الخير\"=Form1 - Caption  ",
 "\"صباح الخير\"=Command1 - Caption  ",
 "\"صباح الخير\"=Label1 . Caption "],
 "answer": 3 },
    { "q": "يتم استدعاء الإجراء الفرعي من الخارج باستخدام جملة الاستدعاء:", "options": ["Project", "Call", "Sub", "Cell"], "answer": 1 },
    { "q": "برامج جاهزة للاستخدام معدة مسبقاً لتوفر على كاتب البرنامج الوقت والجهد وتستخدم لإجراء عمليات الإدخال والإخراج:", "options": ["الدوال الجاهزة", "أدوات التحكم", "نوافذ الشاشة الرئيسية", "البرامج الفرعية"], "answer": 0 },
    { "q": "المرحلة التي تتميز بأنها مرحلة التواصل ذي الاتجاه الواحد في مراحل تطور الحكومة الإلكترونية هي مرحلة:", "options": ["الشهر الإلكتروني", "التفاعل وتبادل البيانات", "التعرف الإلكتروني", "الظهور الحكومي"], "answer": 3 },
    { "q": "عند وضع أول أداة عنوان على نافذة النموذج يكون اسمها البرمجي الافتراضي هو:", "options": ["Label1", "Form1", "Text1", "Command1"], "answer": 0 },
    { "q": "النقر المزدوج على الأداة المطلوبة من شريط أدوات التحكم يعمل على:", "options": ["تغيير خصائص الأداة", "إدراج الأداة في وسط نافذة النموذج", "تغيير حجم الأداة", "تحريك الأداة على النموذج"], "answer": 1 }
];

// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 48;
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