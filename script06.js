const questions = [
    {
        "q": "في الوضع التقليدي لتجهيز شرائح العرض التقديمي تظهر مكونات الشريحة بتأثيرات حركية شيقة.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "دائماً ما تتضمن شريحة العرض عناصر يجب أن يتم عرضها في آن واحد.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "يمكن إضافة مؤثرات الحركة على كل عنصر من عناصر شريحة العرض التقديمي.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "مؤثرات الحركة تتعلق بتسلسل ظهور العناصر واتجاه حركتها.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "المراحل الانتقالية هي تأثيرات للتحكم في طريقة عرض الشرائح عند الانتقال من شريحة إلى الشريحة التالية.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "لا يمكننا التحكم في سرعة تأثير المراحل الانتقالية للشريحة.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "يمكننا إضافة صوت مصاحب لعملية الانتقال في المراحل الانتقالية للشرائح.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "يجب تحديد العنصر المراد تطبيق المؤثرات الحركية عليه قبل اختيار المؤثر المطلوب.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "مؤثر الحركة \"توكيد\" يقوم بتطبيق تأثير حركي على العنصر لجذب الاهتمام.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "يمكننا تحديد زمن عرض العناصر على الشريحة.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "يمكننا اختيار نمط واحد فقط من أنماط مؤثرات الحركة.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "يمكننا معاينة المؤثرات الحركية التي تم اختيارها قبل البدء الفعلي للعرض.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "يمكن تطبيق نفس مؤثر الحركة على جميع عناصر الشريحة دفعة واحدة.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "لا يمكننا حذف مؤثر حركي بعد تطبيقه على العنصر.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "المؤثرات الحركية تساهم في جذب انتباه الجمهور وإيصال الرسالة بشكل أفضل.",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "لتطبيق مؤثر حركي على عنصر ما (نص أو صورة)، يجب أولاً:",
        "options": [
            "حذف العنصر.",
            "تغيير لون الخلفية.",
            "تحديد (تنشيط) العنصر المطلوب.",
            "الخروج من البرنامج."
        ],
        "answer": 2
    },
    {
        "q": "مؤثر الحركة الذي يحدد كيفية ظهور العنصر لأول مرة على الشريحة هو:",
        "options": [
            "مؤثر إنهاء.",
            "مؤثر الدخول ",
            "مؤثر توكيد.",
            "مسار الحركة."
        ],
        "answer": 1
    },
    {
        "q": "يسمى التأثير الذي يحدث عند الانتقال من شريحة إلى أخرى بـ:",
        "options": [
            "مؤثر الحركة.",
            "حركة العنصر.",
            "المراحل الانتقالية ",
            "عرض الفيديو."
        ],
        "answer": 2
    },
    {
        "q": "لجذب الانتباه لعنصر موجود بالفعل على الشريحة نستخدم مؤثر:",
        "options": [
            "الدخول.",
            "التوكيد ",
            "الخروج.",
            "مسار الحركة."
        ],
        "answer": 1
    },
    {
        "q": "يمكننا التحكم في سرعة الحركة الانتقالية للشرائح من خلال خيارات:",
        "options": [
            "اللون.",
            "المدة .",
            "الحجم.",
            "نوع الخط."
        ],
        "answer": 1
    },
    {
        "q": "أي مما يلي لا يعتبر من أنواع مؤثرات الحركة في البوربوينت؟",
        "options": [
            "الدخول.",
            "التوكيد.",
            "الحفظ التلقائي.",
            "مسارات الحركة."
        ],
        "answer": 2
    },
    {
        "q": "المؤثر الحركي الذي يهتم بتحديد مسار حركة العنصر أثناء العرض يسمى:",
        "options": [
            "مؤثر الحركة.",
            "مؤثر إنهاء.",
            "مؤثر الدخول.",
            "مسار الحركة "
        ],
        "answer": 3
    },
    {
        "q": "خيارات تحديد زمن عرض العنصر هي:",
        "options": [
            "عند النقر بالفأرة.",
            "مع السابق.",
            "بعد السابق.",
            "جميع الإجابات صحيحة."
        ],
        "answer": 3
    },
    {
        "q": "المؤثر المصاحب للعنصر عند دخوله أو بداية ظهوره على الشريحة يسمى:",
        "options": [
            "مؤثر التحريك.",
            "مؤثر الحركة.",
            "مؤثر الدخول.",
            "جميع الإجابات خاطئة."
        ],
        "answer": 2
    },
    {
        "q": "يمكن تطبيق مؤثرات الحركة على:",
        "options": [
            "الصور.",
            "النصوص.",
            "الرسومات.",
            "جميع الإجابات صحيحة."
        ],
        "answer": 3
    },
    {
        "q": "طريقة عرض الشرائح عند الانتقال من شريحة إلى أخرى تسمى:",
        "options": [
            "مؤثر العرض.",
            "مؤثر الشرائح.",
            "المراحل الانتقالية.",
            "جميع الإجابات صحيحة."
        ],
        "answer": 2
    },
    {
        "q": "المؤثرات الحركية:",
        "options": [
            "تتحكم في تسلسل ظهور العناصر أثناء العرض.",
            "تضيف عنصر التشويق للعرض التقديمي وتجذب الانتباه.",
            "تحدد طريقة ظهور العنصر على الشريحة.",
            "جميع الإجابات صحيحة."
        ],
        "answer": 3
    },
    {
        "q": "عند إعداد العروض التقديمية باستخدام برنامج بوربوينت، نجد تبويب \"حركات\"  خاص بـ:",
        "options": [
            "حركة الشرائح.",
            "حركة العناصر داخل الشريحة.",
            "حفظ الملف.",
            "إدراج الجداول."
        ],
        "answer": 1
    },
    {
        "q": "المؤثرات الحركية يمكن اضافتاها الى",
        "options": [
            "الصور فقط",
            "الصور و النصوص",
            "النصوص فقط",
            "جميع ما سبق غير صحيح"
        ],
        "answer": 1
    },
    {
        "q": "يهتم مؤثر حركة توكيد ب",
        "options": [
            "اضافة مؤثر تكبير او تصغير للعنصر",
            "اضافة مؤثر خروج و اخفاء لعنصر",
            "تحديد مسار حرحة العنصر اثناء العرض",
            "تحديد طريقة دخول العنصر اثناء العرض"
        ],
        "answer": 0
    },
    {
        "q": "المراحل الانتقالية هى تاثيرات ل",
        "options": [
            "التحكم فى طريقة عرض الشرائح فى عملية الانتقال",
            "التحكم فى سرعة تاثير المراحل الانتقالية لكل شريحة",
            "اضافة صوت مصاحب لعملية الانتقال",
            "جميع الاجابات السابقة صحيحة"
        ],
        "answer": 3
    },
    {
        "q": "يمكن اضافة مؤثرات حركية الى",
        "options": [
            "الشرائح التى تحتوي على قصاصات صوتية",
            " الشريحة الاولى للعرض فقط",
            "كل عنصر من عناصر اى شريحة",
            "جميع ما سبق غير صحيح"
        ],
        "answer": 2
    },
    {
        "q": "يتم تطبيق المراحل الانتقالية على",
        "options": [
            "النص",
            "الصورة",
            "الفيديو",
            "الشريحة"
        ],
        "answer": 3
    },
    {
        "q": "يتم تطبيق مؤثر حركة دخول على الشريحة",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 1
    },
    {
        "q": "مسارات التأكيد هى مؤثرات تضاف بهدف ابراز العنصر و لفت انتباة المشاهدين اليه",
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "يتم عرض الشرائح من تبويب",
        "options": [
            "عرض",
            "عرض الشرائح",
            "حركات",
            "ادراج"
        ],
        "answer": 1
    },
    {
        "q": "يستخدم مؤثر توكيد ",
        "options": [
            "لاضافة مؤثرات تتعلق  بتكبير او تصغير اي عنصر بالشريحة",
            "لاضافة مؤثرات تتعلق  بتكبير او تصغير الشريحة",
            "لابراز اسم مقدم العرض",
            "للتحكم باتجاه ظهور الشريحة"
        ],
        "answer": 0
    },
    {
        "q": "هناك العديد من انواع المؤثرات الحركية عدا",
        "options": [
            "مؤثر حركة دخول",
            "مؤثر حركة خروج (انهاء)",
            "مؤثر التحكم بنبرة صوت المتحدث اثناء العرض",
            "مؤثر حركة توكيد"
        ],
        "answer": 2
    }
];
// --- خلط الأسئلة فور التحميل ---
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleQuestions(questions);

// --- بناء واجهة الأسئلة (مرة واحدة فقط) ---
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

// --- إدارة المؤقت (اختياري - يمكن تفعيله إذا أردت) ---
let timeInSeconds = 60 * 60; // 60 دقيقة
const timerDisplay = document.createElement("div");
timerDisplay.id = "timer-box";
if (document.querySelector('.container')) {
    document.body.insertBefore(timerDisplay, document.querySelector('.container'));
}

function startTimer() {
    const countdown = setInterval(function() {
        let minutes = Math.floor(timeInSeconds / 60);
        let seconds = timeInSeconds % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        timerDisplay.innerHTML = `الوقت المتبقي: ${minutes}:${seconds}`;

        if (timeInSeconds <= 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = "انتهى الوقت!";
            autoSubmitQuiz(); 
        }
        timeInSeconds--;
    }, 1000);
}

function autoSubmitQuiz() {
    const nameField = document.getElementById("name");
    if (!nameField.value.trim()) nameField.value = "طالب (انتهى الوقت)";
    alert("انتهى وقت الاختبار! سيتم سحب الورقة وإرسال الإجابات الحالية.");
    performFinalSubmit(true); 
}

// --- معالجة زر الإرسال اليدوي ---
document.getElementById("submit-btn").addEventListener("click", function () {
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
        const confirmMsg = `تنبيه: نسيتم الإجابة عن (${unansweredCount}) سؤال.\n\nهل تريد الإرسال وتتحمل مسؤولية نقص الإجابات؟\n\n(موافق للإرسال / إلغاء للذهاب لأول سؤال ناقص)`;
        
        if (!confirm(confirmMsg)) {
            const unansweredQuestion = document.getElementsByClassName("question")[firstUnansweredIndex];
            unansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            unansweredQuestion.style.backgroundColor = "#fff3cd"; 
            setTimeout(() => unansweredQuestion.style.backgroundColor = "transparent", 2500);
            return; 
        }
    } else {
        if (!confirm("هل أنت متأكد من تسليم الإجابات الآن؟")) return;
    }

    performFinalSubmit(false); 
});

// --- تنفيذ الإرسال النهائي وحساب النتيجة ---
function performFinalSubmit(isAuto) {
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
    resultDiv.innerHTML = `<h3>تم استلام الإجابات</h3><p>${name}، نتيجتك: ${score} من ${total}</p>`;
    
    // إظهار زر التصحيح
    const correctBtn = document.getElementById("correct-btn");
    if (correctBtn) correctBtn.style.display = "block";

    sendData(name, score, total, isAuto);
}

function sendData(name, score, total, isAuto) {
    const status = isAuto ? "🔴 تلقائي" : "🟢 يدوي";
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const msg = `الحالة: ${status}%0Aالطالب: ${name}%0Aالنتيجة: ${score}/${total}`;
    
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${msg}`);

    const scriptURL = "https://script.google.com/macros/s/AKfycbwajDJ0QqcUVyUaD8VNl1axjuSjxgRECp5KIeTaRxpF7p47-Wf3eqa_ACMg5CPb5ObE8Q/exec"; 
    fetch(`${scriptURL}?name=${encodeURIComponent(name)}&score=${encodeURIComponent(score + " / " + total)}`, { method: 'GET', mode: 'no-cors' })
    .then(() => alert("تم حفظ النتيجة في سجل المدرسة بنجاح."))
    .catch(error => console.error("خطأ في الإرسال:", error));
}

// --- إضافة حدث لزر التصحيح ---
const correctBtn = document.getElementById("correct-btn");
if (correctBtn) {
    correctBtn.addEventListener("click", function () {
        highlightCorrectAnswers();
        alert("تم تظليل الإجابات الصحيحة باللون الأخضر!");
    });
}

// --- تشغيل المؤقت (اختياري - قم بإلغاء التعليق إذا أردت تفعيله) ---
// window.onload = startTimer;