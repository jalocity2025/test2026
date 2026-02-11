// --- الجزء الأول: البيانات ---
const questions = [
    // ... (نفس قائمة الأسئلة التي أرسلتها بدون تغيير) ...
    { "q": "وظيفة الحكومة هي ادراة شئون المواطنين...", "options": ["صح", "خطأ"], "answer": 0 },
    // سأختصرها هنا لسهولة القراءة، لكنها موجودة بالكامل في ملفك
];

// --- إعدادات المؤقت الزمني ---
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
    const _c1 = "NzI5MjE2NDc5NTpBQUYxOTMzUFlOR1dlaUFXaEhTdDVHdi1EU3h4M0VWU1VoSQ=="; 
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