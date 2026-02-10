const questions = [
    // --- أ المجموعة الأخيرة) ---
 {
        "q": "يتم الفصل بين الاداة و الحدث باستخدام  النقطة",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
 {
        "q": "إخفاء او اظهار  زر الأمر نستخدم الخاصية",
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
            "For i=0 To  9",
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
        "options": [
            "صح",
            "خطأ"
        ],
        "answer": 0
    },
    {
        "q": "  الحدث Keypress يحدث",
        "options": ["عند عملية ابقاء الضغط على زر الفارة لاسفل", "عند نقل الاداة من مكان لاخر", "عند ضغط احد الحروف على لوحة المفاتيح", "عند انهاء الضغط على زر الفارة"],
        "answer": 2
    },
    {
        "q": "من الاحداث الخاصة بالنموذج و الذي ينفذ تلقائيا عند تحميل النموذج هو",
        "options": ["click", "Load", "mousedown", "show"],
        "answer": 1
    },
   
    {
        "q": "   لاضافة عنوان نستخدم الخاصية  caption  وهى من خصائص",
        "options": [" Label", "Command Button", "Form", "جميع الاجابات صحيحة"],
        "answer": 3
    },
    {
        "q": "ما ناتج الامر form1.show",
        "options": ["اظهار النموذج", "اخفاء النموذج"],
        "answer": 0
    },
   
   
{
        "q": "اي من الادوات التالية زر امر",
        "options": ["frmWelcome", "lblName", "cmdFinish", "txtname"],
        "answer": 2
    },
    {
        "q": "عند كتابة  الامر (prent ) بدلا من الامر ( print ) ينتج خطا من الاخطاء",
        "options": ["النحوية", "المنطقية", "اللغوية", "الاملائية"],
        "answer": 2
    },
{
        "q": "اي من الادوات التالية صندوق نص",
        "options": ["frmWelcome", "lblName", "cmdFinish", "txtname"],
        "answer": 3
    },

{
 "q": "البرنامج التالي يقوم برسم :\n<div class='code-block'>Private Sub Form_Load()\nMe.ScaleMode = 3\nMe.Line (30, 30)-(30, 100), vbBlue, BF\nEnd Sub</div>",
    "options": ["رسم مستطيل او مربع ", "رسم خط مستقيم فقط", "لا شئ مما ذكر"],
    "answer": 1
},
    
    {
        "q": "توفر البيسك المرئي امكانية اضافة البرمجيات الفرعية  لاختيار الامر Add procedure ",
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
        "q": "جميعها احداث  للفارة عدا",
        "options": ["mouseup", "keypress", "mousedown", "click"],
        "answer": 1
    },
  
 
 
    {
        "q": "   الخاصية Text  خاصية مشتركة بين جميع الادوات",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    
    {
        "q": "لاخفاء النموذج نستخدم الامر",
        "options": ["form1.Hide", "form1.move", "Form1.show", "form1.cls", "لا شئ مما ذكر"],
        "answer": 0
    },
  
 {
        "q": " فى محرر الكود اذا كتب اسم الاداة صحيحا ثم  تطبع النقطة يتم عرض قائمة بالخصائص و الوظائف و الاحداث",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "هو debug      الامر الذي يقوم بتنفيذ سطر سابق من قائمة",
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
        "answer": 0 // 
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
        "answer": 2 //
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
        "answer": 1 //
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
        "answer": 1 //
    },
{
        "q": "لإدخال نص مكون من عدة سطور في صندوق النص ( Text Box  ) نستخدم:",
        "options": ["Multiline = True", "Locked = True", "Locked = False", "Multiline = False"],
        "answer": 0
    },
    {
        "q": "يقوم البرنامج التالي ب:\n<div class='code-block'>Private Sub Form_load()\nDim A(3) As integer\nFor i = 0 to 3\nPrint A(i)  \nNext i\nEnd Sub.</div>",
        "options": ["طباعة عناصر المصفوفة", "ادخال عناصر المصفوفة", "لا شئ مما ذكر"],
        "answer": 0 //
    },
    {
        "q": "في البرنامج السابق تم الإعلان عن مصفوفة ذات بعد واحد عدد عناصرها:",
        "options": ["4 من النوع الحرفي", "4 من النوع الصحيح", "4 من النوع الكسري"],
        "answer": 1 
    },

{
        "q": "بناءً على جملة الإعلان، الإسناد الصحيح للموقع الخامس بقيمة 100 هو:\n<div class='code-block'>Dim A(100) As String</div>",
        "options": ["\"100\"=A(4)  ", "100=A(4)  ", "100=A(5) ", " \"100\"=A(5) "],
        "answer": 0
    },
    {
        "q": "لتغيير خلفية النموذجForm في برنامج بيسك المرئي نستخدم الخاصية:",
        "options": ["Backcolor", "Borderstyle", "Forecolor", "Font"],
        "answer": 0 //
     }
];

// --- إعدادات المؤقت الزمني ---
//let timeInSeconds = 60 * 60; // 60 دقيقة
let timeInSeconds = 60 * 60; // 60 دقيقة
const timerDisplay = document.createElement("div"); // إنشاء عنصر المؤقت برمجياً
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
            timerDisplay.style.color = "black";
            autoSubmitQuiz(); // دالة الإرسال التلقائي
        }
        timeInSeconds--;
    }, 1000);
}

// دالة الإرسال التلقائي عند انتهاء الوقت
function autoSubmitQuiz() {
    const nameField = document.getElementById("name");
    if (!nameField.value.trim()) {
        nameField.value = "طالب (انتهى الوقت ولم يدخل اسم)";
    }
    alert("انتهى وقت الاختبار! سيتم إرسال إجاباتك الآن.");
    document.getElementById("submit-btn").click();
}

// --- الجزء الثاني: بناء واجهة الأسئلة ---
const quizContainer = document.getElementById("questions");
questions.forEach((question, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<div class="question-text"><strong>${index + 1}.</strong> ${question.q}</div>`;
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");
    question.options.forEach((option, i) => {
        optionsContainer.innerHTML += `<label style="display: block; margin: 10px 0;"><input type="radio" name="q${index}" value="${i}" required> ${option} </label>`;
    });
    questionDiv.appendChild(optionsContainer);
    quizContainer.appendChild(questionDiv);
});

// --- الجزء الثالث: معالجة الإرسال ---
document.getElementById("submit-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    if (!name) {
        alert("يرجى إدخال الاسم");
        return;
    }

    // تعطيل الزر لمنع الإرسال المتكرر
    this.disabled = true;
    this.innerText = "جاري الإرسال...";

    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    const totalQuestions = questions.length;
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.textContent = `${name}، نتيجتك: ${score} / ${totalQuestions}`;

    // --- 1. إرسال إلى تلجرام ---
    const _c1 = "NzI5MjE2NDc5NTpBQUhPa0c0NnM2eFFodFRJelZuU3psQ1hRblpETkhKbERQMA=="; 
    const _c2 = "MTU1NDAwOTI5Ng==";
    const message = `الطالب: ${name}%0Aالنتيجة: ${score}/${totalQuestions}`;
    fetch(`https://api.telegram.org/bot${atob(_c1)}/sendMessage?chat_id=${atob(_c2)}&text=${message}`);

    // --- 2. إرسال إلى Google Sheets ---
    const scriptURL = "https://script.google.com/macros/s/AKfycbwajDJ0QqcUVyUaD8VNl1axjuSjxgRECp5KIeTaRxpF7p47-Wf3eqa_ACMg5CPb5ObE8Q/exec"; 
    const finalURL = `${scriptURL}?name=${encodeURIComponent(name)}&score=${encodeURIComponent(score + " / " + totalQuestions)}`;

    fetch(finalURL, { method: 'GET', mode: 'no-cors' })
    .then(() => {
        alert("تم إرسال نتيجتك وحفظها بنجاح!");
        this.innerText = "تم الإرسال";
    })
    .catch(error => console.error("Error:", error));
});

// تشغيل المؤقت عند فتح الصفحة
window.onload = startTimer;