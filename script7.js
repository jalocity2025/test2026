// --- الجزء الأول: مصفوفة الأسئلة ---
const questions  = [
    
       {
        "q": "لتنفيذ حلقة لإدخال عناصر مصفوفة أحادية البعد من 1 إلى 9 نستخدم:",
        "options": [
            "For i=1 To 10",
            "For i=0 To 10",
            "For i=0 To 9",
            "For i=1 To 9"
        ],
        "answer": 3
    },
   
       
    {
        "q": "عند مقارنة جملة الإعلان الأولى والثانية، نستنتج أنهما:\n<div class='code-block'>1: Dim A(4,4) As String\n2: Dim B(1 To 5, 1 To 5) As integer</div>",
        "options": ["تختلفان في عدد العناصر وتتساويان في نوع البيانات", "يتساويان في عدد العناصر ونوع البيانات", "تختلفان في عدد العناصر ونوع البيانات", "يتساويان في عدد العناصر ويختلفان في نوع البيانات"],
        "answer": 3
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
        "q": "يمكن أن تحتوي المصفوفة الواحدة على أنواع بيانات مختلفة",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
   
        {
    "q": "الفرق الجوهري الذي يمنع تحويل \"بعض\" الإجراءات الفرعية إلى دوال وظيفية هو:",
    "options": ["كبر حجم الكود.", "إعادة الإجراء لأكثر من قيمة أو عدم إعادته لأي قيمة.", "استخدام جملة Call.", "مكان كتابة الإجراء."],
    "answer": 1
  },
  
   
    {
        "q": "تستخدم  الدالة (ٍSin)   لحساب :",
        "options": ["جيب تمام الزاوية", "جيب الزاوية", "ظل الزاوية", "تقدير الزاوية"],
        "answer": 1
    },
   
    {
        "q": "المصفوفة التي تحتوي على فهرس واحد تسمى:",
        "options": ["مصفوفة متعددة الأبعاد", "المصفوفة ذات البعد الواحد", "مصفوفة ثلاثية الأبعاد", "المصفوفة ذات البعدين"],
        "answer": 1
    },
    
   {
    "q": "اذا كان لديك الكود التالي في النافذة السيريعة فإن الناتج المتسلسل لهذه الأوامر هو\n<div class='code-block'>? Mid(\"Libya is great\", 7, 2)\n? Left(\"Science\", 3)\n? Len(Trim(\"  VB  \"))</div>",
    "options": [
  
    "is Sci 3 ",
   
   "s Sci 5",
   
   "is Scie 4",
  
    "is Sci 2"
    ],
    "answer": 3
  },
 
 {
    "q": "ناتج تنفيذ Print Int(4.9) + Abs(-4.9) هو",
    "options": [
   
 
     "8",
     
 "0.9",
  
    "8.9"
    ],
    "answer": 2
  },
 
 {
    "q": "ناتج تنفيذ الكود Print LTrim(\" IT\") & Day(#5/20/2026#)  هو",
    "options": [
      "IT 20    ",
      "IT20",
      "IT-20    "
    ],
    "answer": 1
  },
 
 {
    "q": "ماناتج تنفيذالأمر   ( Print Left(\"Salah-Al-Deen\", 7 ",
    "options": [
      "A   ",
      "Salah-A",
      "Sa    ",
      "la"
    ],
    "answer": 1
  },
 
 {
    "q": "إذا كان     \"  S =      \"ALWAHAT  ، ما هو الأمر الذي يطبع كلمة  WAH  فقط",
    "options": [
      "Print Mid(S, 1, 3)  ",
      "Print Left(S, 3)        ",
      "Print Right(S, 3)    ",
      "Print Mid(S, 3, 3)"
    ],
    "answer": 3
  },
  
{
    "q": "الدالة التي تقوم بإرجاع قيمة نصية (String) بناءً على المدخلات هي",
    "options": [
      "Function Calc(X As Integer) As String ",
      "Function Calc(X As String) As Integer       ",
      "Sub Calc(X As String)   ",
      "Dim Calc(10) As String"
    ],
    "answer": 0
  },
  
{
    "q": "أي العبارات التالية غير صحيح فيما يتعلق بالدالة",
    "options": [
      "يتم استدعاؤها بالامر call  ",
      "جميع معاملاتها مدخلات  فقط           ",
      "يجب تحديد نوعه   ",
      "يعيد قيمة واحدة فقط            "
    ],
    "answer": 0
  },
  
{
    "q": "\tلا يمكن أبداً استدعاء دالة وظيفية Function من داخل إجراء فرعي ",
    "options": [
      "صح",
      "خطأ"
    ],
    "answer": 1
  },
  {
    "q": "دالة DateValue لا تعيد الوقت، حتى لو كان المتغير الممرر إليها يحتوي على تاريخ و وقت معاً",
    "options": [
      "صح",
      "خطأ"
    ],
    "answer": 0
  },
  {
    "q": "إذا تم استخدام الجملة Exit Function قبل نهاية الدالة، فإن البرنامج يتوقف تماماً عن العمل وتغلق نافذة النموذج.",
    "options": [
      "صح",
      "خطأ"
    ],
    "answer": 1
  },
 
 {
    "q": "أي ممايلي يمكن استخدامه للسماح للمخولين فقط من الوصول الى البيانات",
    "options": [
      "كلمةالمرور",
      "نسخ احتياطي للبيانات",
      "البريدالالكتروني",
      "منع الدخول عن طريق الانترنت"
    ],
    "answer": 0
  },
    {
        "q": "بناءً على جملة الإعلان، الإسناد الصحيح للموقع الخامس بقيمة 100 هو:\n<div class='code-block'>Dim A(100) As String</div>",
        "options": ["\"100\"=A(4) ", "100=A(4) ", "100=A(5) ", " \"100\"=A(5) "],
        "answer": 0
    },
    {
    "q": "ما ناتج الامر\n<div class='code-block'>Private Sub Form_Load() \nPrint Month(#6/13/2021#)\nEnd Sub</div>",
    "options": [
      "6",
      "13",
      "2021",
      "06"
    ],
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
let timeInSeconds = 45 * 60; // 60 دقيقة
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