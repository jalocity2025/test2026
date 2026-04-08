
const fullQuestionBank = [
    // أسئلة الصواب أو الخطأ (True/False) من الصفحات 3 و 4
{ "q": "حق مؤلف أي عمل فكري في عدم السماح للآخرين باستخدامه دون إذن يسمى:", "options": ["الملكية الفكرية", "حرية التفكير", "الاصطياد الإلكتروني", "قرصنة المعلومات"], "answer": 0 },
 { "q": "حرية الاطلاع على المعلومات الحكومية تعتبر:", "options": ["من مزايا مرحلة التفاعل وتبادل البيانات", "من الصفات الشخصية لتحديد هوية المستخدم", "من وسائل تأمين البيانات المرسلة عبر الشبكات", "من مؤشرات الشفافية التي تميز الحكومات الديمقراطية"], "answer": 3 },
    { "q": "فيروس حصان طروادة لا يسبب ضرر للملفات وانما يصنع نسخا على النظم الأخرى في الشبكة بسرعة هائلة ويسبب في تعطيل الشبكة.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "من الممكن الاستغناء عن برامج تسجيل الصوت الأخرى واستخدام برنامج بوربوينت لتسجيل الصوت وتخزينه في ملف صوتي.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الأكشاك الالكترونية للخدمات الشاملة لا تعتبر من قنوات التواصل مع الحكومة الالكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عند استخدام مؤشرات الحركة فإن كل عناصر الشريحة يتم عرضها في آن واحد.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "جريمة سرقة وقت الحاسوب هي استخدام حواسيب المؤسسات الحكومية أو التجارية في مهام غير المنصوص عليها ضمن عقد التوظيف أو الاستخدام.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "لا تعتبر كاميرا التصوير الرقمي إحدى طرفيات الحاسوب المستخدمة لإنتاج الصور الرقمية الثابتة ومقاطع الفيديو.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تتمثل جريمة الاصطياد الالكتروني في قيام قراصنة المعلومات بانتحال شخصية مؤسسات مالية كالمصارف أو جمعيات الإغاثة من أجل التمويه والخداع وكسب المال غير المشروع.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "السماعات هي احدى طرفيات الحاسوب المستخدمة في تسجيل الأصوات.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "عملية نسخ الكتب والمؤلفات الالكترونية المنشورة عبر الانترنت وإعادة طباعتها وبيعها تعتبر عملاً قانونياً على الدوام.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تشفير البيانات والمعلومات يتمثل في تحويل البيانات الأصلية بطريقة معينة قبل ارسالها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الوسائط المتعددة قادرة على إثراء مدارك الأطفال الحسية في مرحلة رياض الأطفال.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الصور والرسوم المتحركة هي مقاطع يتم انتاجها كسلسلة من الصور أو الرسوم الثابتة المنفصلة التي تعرض بصورة تزامنية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "التدريب الإلكتروني يقوم على استغلال الوسائط المتعددة في تجهيز نماذج تشبيهية يقوم المتدرب بالتعامل معها وكأنها نماذج طبيعية.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "من مزايا التدريب الإلكتروني توفير مستلزمات التدريب الاستهلاكية وإجراء عمليات التدريب في أي وقت حسب رغبة المتدرب.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تقدم الوسائط المتعددة شكلاً جديداً من الإعلام يقوم على إشراك الجمهور وعدم التعامل مع المستخدم على أنه متلقٍ فقط.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تبرز خدمة البوابة الالكترونية في مرحلة الظهور الحكومي ضمن مراحل إنجاز الحكومة الالكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "الإنسان لا يستطيع أن يتذكر سوى 20% من المعلومات التي يتلقاها بواسطة السمع والمشاهدة والممارسة معاً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "البرمجيات التجارية تظل ملكية خاصة لمنتجها، وللمستخدم الحق في استغلالها فقط بعد دفع ثمنها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "المتحدث الماهر يستخدم العروض التقليدية في دعم مهاراته الفطرية فيلقي عرضاً أكثر تشويقاً وإتقاناً.", "options": ["صح", "خطأ"], "answer": 0 },

    // أسئلة الاختيار من متعدد (Multiple Choice) من الصفحات 4، 5، 7، 8
    { "q": "لا يعتبر من عناصر الوسائط المتعددة:", "options": ["الصور والرسوم المتحركة", "قواعد البيانات", "النص", "الصوت"], "answer": 1 },
    { "q": "الامتداد bmp يعتبر امتداداً لملف:", "options": ["صوتي", "فيديو", "صورة", "جميع ماسبق غير صحيح"], "answer": 2 },
    { "q": "يمكن للمواطنين تنزيل نسخ الكترونية من المستندات الحكومية وملؤها الكترونيا ثم ارسالها الى الدائرة الحكومية عبر البريد الالكتروني يتم ذلك في مرحلة:", "options": ["النشر", "تكامل الخدمات", "الظهور الحكومي", "التفاعل"], "answer": 0 },
    { "q": "العروض التقديمية تسمح بإدراج العديد من الوسائل التالية عدا واحدة هي:", "options": ["قصاصة صوت جاهزة", "تسجيلات فيديو تسجل بواسطة برنامج بوربوينت", "تسجيلات صوتية تسجل بواسطة برنامج بوربوينت", "قصاصة فيديو جاهزة"], "answer": 1 },
    { "q": "اي من المصطلحات التالية يعتبر امتداداً لملف صوتي:", "options": ["GIF", "bmp", "Mpeg", "Mp3"], "answer": 3 },
    { "q": "استخدام الوسائط المتعددة ضمن اساليب التعليم:", "options": ["يجعل قدرة البشر محدودة في استيعاب المعلومات والتعامل معها", "يسهم في انخفاض جودة محتوى المنهج التعليمي", "يجعل التعليم أكثر رتابة في الشرح", "يمنح الطالب فرصة أكبر في الاستيعاب والاستمتاع بالتعليم"], "answer": 3 },
    { "q": "يهتم مؤثر توكيد بـ:", "options": ["إضافة مؤثر تكبير أو تصغير للنص", "إضافة مؤثر خروج وإخفاء للنص", "تحديد مسار حركة العنصر أثناء العرض", "تحديد طريقة دخول العنصر قبل العرض"], "answer": 0 },
    { "q": "من تطبيقات الوسائط المتعددة:", "options": ["الصحة الإلكترونية", "التدريب الإلكتروني", "عقد مؤتمرات عن بُعد", "جميع ما سبق صحيح"], "answer": 3 },
    { "q": "يمكن عرض ملفات الوسائط المتعددة ذات الامتداد (jpeg) بواسطة:", "options": ["برنامج منتج الافلام Movie Maker", "برنامج ميديا بلاير Media Player", "برنامج الرسام Paint", "جميع ماسبق غير صحيح"], "answer": 2 },
    { "q": "لكي تستطيع كمحدث أن تجذب انتباه الحاضرين للمحاضرة تستعين بـ:", "options": ["المؤثرات الحركية ضمن عناصر شرائح العرض", "استخدام الخطوط بأحجام كبيرة والوان متعددة", "وضع العرض بكاملة في شريحة واحدة", "جميع ماسبق غير صحيح"], "answer": 0 },
    { "q": "الوسائط التقليدية لتدوين المعلومات هي:", "options": ["النصوص الورقية", "الحواسيب الشخصية", "البريد الإلكتروني", "جميع ماسبق صحيح"], "answer": 0 },
    { "q": "رغم أهميتها الكبيرة فإن العروض التقديمية قد تؤدي إلى نتائج عكسية نتيجة:", "options": ["عدم امكانية تجهيز عروض تقديمية", "نفور الناس عن التعامل بالتقنية الحديثة", "رداءة تنسيق المعلومات على شرائح العرض", "جميع ماسبق غير صحيح"], "answer": 2 },
    { "q": "من الأجهزة المستخدمة في إنتاج وعرض الوسائط المتعددة:", "options": ["الطابعة", "الماسح الضوئي", "لوحة المفاتيح", "جميع ماسبق صحيح"], "answer": 1 },
    { "q": "المؤثرات الحركية يمكن اضافتها إلى:", "options": ["الصور فقط", "الصور والنصوص", "النصوص فقط", "جميع ما سبق غير صحيح"], "answer": 1 },

    // أسئلة المزاوجة (تم تحويلها إلى أسئلة عادية) من الصفحة 8
    { "q": "وسيط لتمثيل أي نوع من المعلومات سواء نصية أو رسومية أو صوتية أو صور متحركة:", "options": ["الوسائط المتعددة", "برنامج Media Player", "برنامج Movie Maker", "الوسيط المعلوماتي"], "answer": 0 },
    { "q": "برنامج Media Player يستخدم لـ:", "options": ["الوسائط المتعددة", "مشاهدة الفيديو في نظام ويندوز", "تحرير وإنتاج أفلام الفيديو", "الوسيط المعلوماتي"], "answer": 1 },
    { "q": "برنامج Movie Maker يستخدم لـ:", "options": ["الوسائط المتعددة", "مشاهدة الفيديو في نظام ويندوز", "تحرير وإنتاج أفلام الفيديو", "الوسيط المعلوماتي"], "answer": 2 },
    { "q": "تقنية يمكن من خلالها بناء نظم معلوماتية يتم فيها المزج بين البيانات النصية والسمعية والبصرية:", "options": ["الوسائط المتعددة", "مشاهدة الفيديو في نظام ويندوز", "تحرير وإنتاج أفلام الفيديو", "الوسيط المعلوماتي"], "answer": 0 },
    { "q": "من أجهزة إنتاج الوسائط المتعددة:", "options": ["ملفات الفيديو والصور", "القرص المدمج", "فيروس الماكرو", "فيروس الدودة"], "answer": 1 },
    { "q": "من أنواع ملفات الوسائط:", "options": ["ملفات الفيديو والصور", "القرص المدمج", "فيروس الماكرو", "فيروس الدودة"], "answer": 0 },
    { "q": "فيروس يصيب البرامج التطبيقية:", "options": ["ملفات الفيديو والصور", "القرص المدمج", "فيروس الماكرو", "فيروس الدودة"], "answer": 2 },
    { "q": "فيروس يصيب الشبكات:", "options": ["ملفات الفيديو والصور", "القرص المدمج", "فيروس الماكرو", "فيروس الدودة"], "answer": 3 }
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