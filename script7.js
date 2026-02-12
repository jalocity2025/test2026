// --- الجزء الأول: مصفوفة الأسئلة ---
const questions = [
    {
        "q": "يتم الفصل بين الاداة و الطريقة باستخدام النقطة",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "إخفاء او اظهار زر الأمر نستخدم الخاصية",
        "options": ["caption", "text", "visible", "multiline"],
        "answer": 2
    },
    {
        "q": "يفصل بين الأداة و اسم الحدث بـ",
        "options": ["بنقطة", "بالشرطة التحتية", "بالفاصلة", "بالفاصلة المنقوطة"],
        "answer": 1
    },
    {
        "q": "النافذة التى تستخدم لمعرفة مكان ظهور النموذج عند تنفيذ البرنامج",
        "options": ["Immediate Window النافذة السريعة", "form layout window نافذة شكل النموذج", "form window نافذة النموذج"],
        "answer": 1
    },
    {
        "q": "عند إعلان مصفوفة ذات بعد واحد من 20 عنصرًا رقم صحيحًا نستخدم:",
        "options": [
            "Dim A(19) As Integer",
            "Dim A(20) As Integer",
            "Dim A(1 To 21) As Integer"
        ],
        "answer": 0
    },
    {
        "q": "لتنفيذ حلقة لإدخال عناصر مصفوفة أحادية البعد من 0 إلى 9 نستخدم:",
        "options": [
            "For i=1 To 10",
            "For i=0 To 10",
            "For i=0 To 9",
            "For i=1 To 9"
        ],
        "answer": 2
    },
    {
        "q": "يمكن تنفيذ البرنامج بضغط مفتاح",
        "options": ["F5", "F4", "Ctrl + G"],
        "answer": 0
    },
    {
        "q": "تسمي المصفوفة التي يتم تحديد عناصرها في جمل البرنامج باستخدام دليل واحد بالمصفوفة ذات البعد الواحد",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الحدث Keypress يحدث",
        "options": ["عند عملية ابقاء الضغط على زر الفارة لاسفل", "عند نقل الاداة من مكان لاخر", "عند ضغط احد الحروف على لوحة المفاتيح", "عند انهاء الضغط على زر الفارة"],
        "answer": 2
    },
    {
        "q": "من الاحداث الخاصة بالنموذج و الذي ينفذ تلقائيا عند تحميل النموذج هو",
        "options": ["click", "Load", "mousedown", "show"],
        "answer": 1
    },
    {
        "q": "لاضافة عنوان نستخدم الخاصية caption وهى من خصائص",
        "options": [" Label", "Command Button", "Form", "جميع الاجابات صحيحة"],
        "answer": 3
    },
    {
        "q": "ما ناتج الامر form1.show",
        "options": ["اظهار النموذج", "اخفاء النموذج"],
        "answer": 0
    },
    {
        "q": "عند مقارنة جملة الإعلان الأولى والثانية، نستنتج أنهما:\n<div class='code-block'>1: Dim A(4,4) As String\n2: Dim B(1 To 5, 1 To 5) As integer</div>",
        "options": ["تختلفان في عدد العناصر وتتساويان في نوع البيانات", "يتساويان في عدد العناصر ونوع البيانات", "تختلفان في عدد العناصر ونوع البيانات", "يتساويان في عدد العناصر ويختلفان في نوع البيانات"],
        "answer": 3
    },
    {
        "q": "عند كتابة الامر (prent ) بدلا من الامر ( print ) ينتج خطا من الاخطاء",
        "options": ["النحوية", "المنطقية", "اللغوية", "الاملائية"],
        "answer": 2
    },
    {
        "q": "يقوم البرنامج بتخزين ........ في كل عنصر من عناصر المصفوفة:\n<div class='code-block'>Private Sub Form_load()\nDim A(3,3) As integer\nFor I = 0 to 3\nFor J = 0 to 3\nA(i,j) = i + j\nNext j\nNext I\n...</div>",
        "options": ["مجموع رقمي الصف والعمود", "رقم الصف ورقم العمود", "مجموع عناصر كل عمود", "مجموع عناصر كل صف"],
        "answer": 0
    },
    {
        "q": "فى البرنامج تم تعريف عدد العناصر و نوع بياناتها وهى :\n<div class='code-block'>Private Sub Form_load()\nDim A(3,3) As integer\nFor I = 0 to 3\nFor J = 0 to 3\nA(i,j) = i + j\nNext j\nNext I\n...</div>",
        "options": ["6 من النوع الحرفي", "6 من النوع الصحيح", "3 من النوع الكسري", "16 من النوع الصحيح"],
        "answer": 3
    },
    {
        "q": "توفر البيسك المرئي امكانية اضافة البرمجيات الفرعية لاختيار الامر Add procedure ",
        "options": [ "Project", "Run", "Tools", "File"],
        "answer": 2
    },
    {
        "q": "يمكن اظهار نافذة الخصائص بضغط مفتاح",
        "options": ["F5", "F4", "Ctrl + G"],
        "answer": 1
    },
    {
        "q": "يجب وضع كود الرسم (مثل Circle أو Line) في حدث Load أو Paint ليظهر بشكل صحيح.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يمكن ضبط خصائص الأداة باستخدام نافذة الخصائص اثناء تنفيذ البرنامج",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "جميعها احداث للفارة عدا",
        "options": ["mouseup", "keypress", "mousedown", "click"],
        "answer": 1
    },
    {
        "q": "الخاصية Text خاصية مشتركة بين جميع الادوات",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "لاخفاء النموذج نستخدم الامر",
        "options": ["form1.Hide", "form1.move", "Form1.show", "form1.cls", "لا شئ مما ذكر"],
        "answer": 0
    },
    {
        "q": "فى محرر الكود اذا كتب اسم الاداة صحيحا ثم تطبع النقطة يتم عرض قائمة بالخصائص و الوظائف و الاحداث",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "فى قائمة   debug الامر الذي يقوم بتنفيذ سطر سابق هو",
        "options": ["step into", "step over", "step out", "break point"],
        "answer": 2
    },
    {
        "q": "يمكن أن تحتوي المصفوفة الواحدة على أنواع بيانات مختلفة",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "حدث تمرير مؤشر الفارة فوق زر الامر",
        "options": ["MouseUp", "MouseOver", "MouseDown", "DragOver"],
        "answer": 1
    },
    {
        "q": "من الطرق",
        "options": ["SetFocus", "LostFocus", "GotFocus"],
        "answer": 0
    },
    {
        "q": "يتميز كل عنصر داخل المصفوفة برقم فهرس (الموقع) فريد.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الجملة Dim A(1 To 9) As String تعرف مصفوفة ذات بعد واحد عدد عناصرها (9).",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "القائمة التي تحتوي على أوامر إنشاء مشروع جديد وحفظ محتوياته هي:",
        "options": ["File", "Run", "Project", "Debug"],
        "answer": 0
    },
    {
        "q": "الإطار (Frame) تستخدم هذه الأداة كحاوية لضم العناصر المرتبطة منطقياً أو وظيفياً في مجموعة واحدة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الطريقة (Show) تستخدم مع النموذج لغرض:",
        "options": ["تحريك النموذج", "حذف النموذج", "إخفاء النموذج", "إظهار النموذج"],
        "answer": 3
    },
    {
        "q": "يوصف شكل المصفوفة ذات البعد الواحد بـ:",
        "options": ["عمود واحد أو صف واحد", "عمود واحد وصف واحد", "عمودين وصف واحد", "صفين وعمود واحد"],
        "answer": 0
    },
    {
        "q": "الأداة التي تمكن المبرمج من القيام بمهام محددة على فترات زمنية منتظمة عن طريق ساعة النظام:",
        "options": ["Now", "Time", "Timer", "Time Value"],
        "answer": 2
    },
    {
        "q": "لتوجيه التركيز لزر الأمر نستخدم الطريقة:",
        "options": ["Setfocus", "Movefocus", "Lostfocus", "Gotfocus"],
        "answer": 0
    },
    {
        "q": "يوجد فهرسان للمصفوفة ذات البعد الواحد بـ:",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "تستخدم الخاصية (Height) مع النموذج لتحديد:",
        "options": ["لون النموذج", "ارتفاع النموذج", "عرض النموذج", "عنوان النموذج"],
        "answer": 1
    },
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
        "q": "المصفوفة التي تحتوي على فهرس واحد تسمى:",
        "options": ["مصفوفة متعددة الأبعاد", "المصفوفة ذات البعد الواحد", "مصفوفة ثلاثية الأبعاد", "المصفوفة ذات البعدين"],
        "answer": 1
    },
    {
        "q": "لإدخال نص مكون من عدة سطور في صندوق النص ( Text Box ) نستخدم:",
        "options": ["Multiline = True", "Locked = True", "Locked = False", "Multiline = False"],
        "answer": 0
    },
    {
        "q": "يقوم البرنامج التالي ب:\n<div class='code-block'>Private Sub Form_load()\nDim A(3) As integer\nFor i = 0 to 3\nPrint A(i) \nNext i\nEnd Sub.</div>",
        "options": ["طباعة عناصر المصفوفة", "ادخال عناصر المصفوفة", "لا شئ مما ذكر"],
        "answer": 0
    },
    {
        "q": "في البرنامج التالي تم الإعلان عن مصفوفة ذات بعد واحد عدد عناصرها:\n<div class='code-block'>Private Sub Form_load()\nDim A(3) As string\nFor i = 0 to 3\nPrint A(i) \nNext i\nEnd Sub.</div>",
        "options": ["4 من النوع الحرفي", "4 من النوع الصحيح", "4 من النوع الكسري"],
        "answer": 0 
    },
    {
        "q": "بناءً على جملة الإعلان، الإسناد الصحيح للموقع الخامس بقيمة 100 هو:\n<div class='code-block'>Dim A(100) As String</div>",
        "options": ["\"100\"=A(4) ", "100=A(4) ", "100=A(5) ", " \"100\"=A(5) "],
        "answer": 0
    },
    {
        "q": "لتغيير خلفية النموذجForm في برنامج بيسك المرئي نستخدم الخاصية:",
        "options": ["Backcolor", "Borderstyle", "Forecolor", "Font"],
        "answer": 0
    }
];
// --- 1. خلط الأسئلة فور التحميل ---
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleQuestions(questions);

// --- 2. إدارة المؤقت ---
let timeInSeconds = 60 * 60; // 60 دقيقة
const timerDisplay = document.createElement("div");
timerDisplay.id = "timer-box";
document.body.insertBefore(timerDisplay, document.querySelector('.container'));

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

// --- 3. بناء الأسئلة في الصفحة ---
const quizContainer = document.getElementById("questions");
questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<div class="question-text"><strong>${index + 1}.</strong> ${question.q}</div>`;
    const optionsContainer = document.createElement("div");
    question.options.forEach((option, i) => {
        optionsContainer.innerHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${option}</label>`;
    });
    questionDiv.appendChild(optionsContainer);
    quizContainer.appendChild(questionDiv);
});

// --- 4. معالجة زر الإرسال اليدوي مع خاصية الـ Scroll ---
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

// --- 5. تنفيذ الإرسال النهائي وحساب النتيجة ---
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
    .then(() => alert("تم حفظ النتيجة في سجل المدرسة بنجاح."));
}

window.onload = startTimer;