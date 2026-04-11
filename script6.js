const questions = [
    {
        "q": "تستخدم الدالة ABS لحذف الأرقام العشرية الموجودة بعد العلامة العشرية دون تقريب.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "البرامج الفرعية Sub هي برامج مستقلة تؤدي وظيفة معينة، ويمكن استدعاؤها من البرنامج الرئيسي أو من أي برنامج فرعي آخر.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "لإنهاء أو مغادرة الدالة Function دون استكمال تنفيذ الأوامر بها نستخدم الأمر Exit Function.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الدالة الوظيفة تعيد فقط قيمة واحدة وتقوم بتخزينها في اسم الدالة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "تحدد المعاملات المدخلة والمخرجات لأي إجراء فرعي من نوع Sub.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يجب أن يكون هناك توافق في نوع البيانات في البرنامج الفرعي وفي جملة استدعائه.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يمكن أن يكون الإجراء الفرعي من نوع Sub من دون معاملات.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يستدعي الاجراء الفرعي من الخارج باستخدام جملة الاستدعاء call او بكتابة اسم الاجراء الفرعي مباشرة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "البرنامج الخاص هو اجراء فرعي يكتب في الجزء general الخاص بالنموذج form ويمكن استدعاؤه من أي نموذج اخر في المشروع.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "البرنامج الفرعي SUB لا يعود الا بقيمة واحدة فقط.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدوال الجاهزة تاتي مع لغة البيسك المرئي ويمكن استدعاؤها بدون كتابة برامجها.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "تتكون دوال المستخدم (USER DEFINED FUNCTION) من مجموعة من الجمل المكتوبة بلغة البيسك المرئي وتؤدي وظيفة محددة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "ما يميز الدالة عن الاجراء الفرعي هو ان جميع معاملات الدالة FUNCTION هي مدخلات INPUT من خارج الدالة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الجملة private function message1 (Val as Integer) As String تشير الى دالة وظيفية اسمها Message1 ونوع البيانات المعادة منها من السلسة الحرفية.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "دالة المستخدم user function لابد فيها من الاعلان عن نوع البيانات المعادة ويتحدد في جملة الإعلان عن الدالة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يتم استدعاء جميع البرامج الفرعية باستخدام جملة print.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدوال الوظيفية Function تعيد قيمة واحدة أو أكثر.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "في حالة الرغبة في استدعاء الاجراء الفرعي من أي نموذج آخر في المشروع فيجب كتابته في الجزء (Module).",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الدالة (Trim ( s  تمحو المسافات من بداية ونهاية النص.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "القيم المعادة في الإجراء الفرعي تكون في معاملاتها وليس في اسمها.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "جميع المعاملات المستخدمة في الدالة الوظيفية Function تستخدم كمخرجات فقط.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "يمكن للدالة (MID (  string, S, L  تعيد سلسلة حرفية جزئية مأخوذة من السلسة الحرفية ابتداء من الموقع (S) حتى نهاية السلسلة.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "لا يمكن الاستغناء عن جملة (Call) عند استدعاء الاجراء الفرعي.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "يجب أن يكون عدد المعاملات في جملة الإعلان عن الدالة هو نفس عدد المعاملات في جملة استدعائها.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يجب أن يتم تحديد نوع المعاملات في رأس الروتين وكذلك في جملة الاستدعاء.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "القيمة المعادة من الدالة تعود في اسم الدالة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يجوز أن تظهر جملة استدعاء الدالة بجملة منفصلة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "ليس من الضرورة أن تكون القيمة المدخلة للدالة Abs عدداً أو تعبيراً عددياً.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "تستخدم الدالة Int لحذف الرقم الموجود بعد العلامة العشرية بدون تقريب.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "نوع الدالة يجب أن يكون نفس نوع معاملاتها.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "في الدالة  Weekday  الرقم (1) يدل على يوم السبت والرقم (7) يدل على يوم الأحد.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدالة cos تستخدم لتحديد ظل الزاوية.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدالة التي تستخدم لمحو المسافات من نهاية النص هي Rtrim.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "اسم الدالة أو البرنامج الفرعي يتبع نفس شروط تسمية المتغيرات.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "يمكن تحديد نوع البيانات التي تعيدها الدالة.",
        "options": ["صح", "خطأ"],
        "answer": 0
    },
    {
        "q": "الدالة chr من الدوال الرياضية.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "من الدوال الحرفية الدالة Right والتي تقوم بمسح الفراغات.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "قيمة المتغير Number من الجملة (Number = Abs(Null)) هو صفر.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدوال الرياضية تستخدم لإعادة قيم لمواصفات وخواص حرفية معروفة.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "الدوال والجمل الحرفية تعيد حرفاً واحداً فقط.",
        "options": ["صح", "خطأ"],
        "answer": 1
    },
    {
        "q": "أخر جملة تكتب في الدالة الوظيفية هي:",
        "options": ["End Function", "End Sub", "Function"],
        "answer": 0
    },
    {
        "q": "من الدوال الرياضية الجاهزة الدالة:",
        "options": ["Trim", "Val", "Tan", "Format"],
        "answer": 2
    },
    {
        "q": "عند الرغبة في استدعاء البرنامج الفرعي من اي نموذج آخر في المشروع فيجب كتابته في الجزء:",
        "options": ["General", "Routine", "Private", "Module."],
        "answer": 3
    },
    {
        "q": "لحذف الأرقام العشرية الموجودة بعد العلامة العشرية بدون تقريب نستخدم الدالة:",
        "options": ["Log", "Val", "Len", "Int"],
        "answer": 3
    },
    {
        "q": "الأمر الذي يستخدم لاستدعاء البرامج الفرعية من نوع Sub هو:",
        "options": ["Let", "Call", "Dim."],
        "answer": 1
    },
    {
        "q": "الجملة A=SQR (25) تعين قيمة للمتغير A هي:",
        "options": ["5", "25"],
        "answer": 0
    },
    {
        "q": "أي العبارات التالية صحيحة حول الإجراء الفرعي Sub:",
        "options": ["تكون معاملاته كلها مدخلات فقط", "يمكن أن يكون بدون معاملات", "يرجع بقيمة واحدة فقط", "من الضروري تحديد نوعه"],
        "answer": 1
    },
    {
        "q": "الدوال التي يمكن استدعاؤها بدون كتابة برامجها تسمى الدوال:",
        "options": ["الوظيفية", "الجاهزة", "الفرعية", "العامة"],
        "answer": 1
    },
    {
        "q": "لتحويل المتغير النصي الى صيغة رقمية تستخدم الدالة",
        "options": ["Abs", "Val", "Str"],
        "answer": 1
    },
    {
        "q": "لإنهاء ومغادرة الإجراء الفرعي Sub دون استكمال تنفيذ بقية الأوامر يستخدم الأمر:",
        "options": ["End Function", "End Sub", "Stop", "Exit Sub"],
        "answer": 3
    },
    {
        "q": "القيمة B تعين للمتغير B من الجملة MID (\"HAVE-A-NICE-DAY\",6,10)",
        "options": ["A-NICE-D", "-A-NICE-D", "A-NICE-DAY", "-NICE-"],
        "answer": 2
    },
    {
        "q": "الدالة LEN هي دالة جاهزة من ضمن:",
        "options": ["دوال الوقت", "الدوال الرياضية", "دوال التاريخ", "الدوال الحرفية"],
        "answer": 3
    },
    {
        "q": "المعادلة S=SQR(20) تعني:",
        "options": ["جيب الزاوية", "الجذر التربيعي للرقم", "القيمة المطلقة للرقم"],
        "answer": 1
    },
    {
        "q": "الدالة FUNCTION تعيد:",
        "options": ["أكثر من قيمة", "قيمة واحدة فقط في اسمها", "جميع الاجابات خاطئة"],
        "answer": 1
    },
    {
        "q": "من الدوال والجمل الحرفية دالة لتحويل المتغير الرقمي الي صيغة نصية هي:",
        "options": ["LEN", "STR", "VAL"],
        "answer": 1
    },
    {
        "q": "اخر جملة تكتب في الاجراء الفرعي هي:",
        "options": ["END SUB", "PRIVATE FUNCTION", "FUNCTION", "END FUNCTION"],
        "answer": 0
    },
    {
        "q": "كلمة FUNCTION كلمة محجوزة تبين بداية:",
        "options": ["اجراء فرعي", "اجراء دالة", "اجراء خاصية", "جميع الاجابات صحيحة"],
        "answer": 1
    },
    {
        "q": "أي العبارات التالية هي عبارة صحيحة حول الدالة الوظيفية Function؟",
        "options": ["يتم تحديد نوع البيانات المعادة في رأس الدالة بين قوسيها", "معاملات الدالة هي عبارة عن متغيرات لتمثيل البيانات الداخلة والخارجة منها", "يمكن استدعاء الدالة بكتابة اسمها على الطرف الأيمن لجملة التعيين", "جميع معاملات الدالة هي مخرجات"],
        "answer": 2
    },
    {
        "q": "لمعرفة قيم المتغيرات وتغيير قيم الخصائص خلال تنفيذ البرنامج فإننا نستخدم:",
        "options": ["الجزء Module", "الجزء العام General", "نافذة الخصائص properties Window", "النافذة السريعة Immediate Window"],
        "answer": 3
    },
    {
        "q": "الجملة B=Time() تعني:",
        "options": ["حساب الوقت الحالي حسب ساعتك.", "حساب الوقت الحالي حسب ما موجود في جهاز الحاسوب"],
        "answer": 1
    },
    {
        "q": "وظيفة الدالة (LTrim) هي:",
        "options": ["تمحو المسافات من نهاية النص.", "تمحو المسافات من وسط النص.", "تمحو المسافات من بداية النص.", "تمحو المسافات من بداية ونهاية النص."],
        "answer": 2
    },
    {
        "q": "الدالة التي تعطي التاريخ من قيمة تحتوي على الوقت والتاريخ هي:",
        "options": ["Time Value", "Date Value", "Year", "Month"],
        "answer": 1
    },
    {
        "q": "عن طريق جملة التعيين يمكن استدعاء:",
        "options": ["الدالة Function", "الإجراء الفرعي Sub", "الإطار Frame"],
        "answer": 0
    },
    {
        "q": "الدالة (Abs(x)):",
        "options": ["تستخدم لإرجاع الجزء الصحيح فقط.", "تستخدم في إيجاد الجذر التربيعي.", "تستخدم لإرجاع القيمة المطلقة لأي عدد وترجعه من نفس نوع البيانات."],
        "answer": 2
    },
    {
        "q": "يتم تحديد نوع الدالة Function في:",
        "options": ["بداية جملة الإعلان.", "نهاية رأس الدالة", "من داخل جسم الدالة", "ليس للدالة نوع"],
        "answer": 1
    },
    {
        "q": "القيمة المعادة من الجملة (len(\"Visual Basic\")) هي:",
        "options": ["12", "13", "كل ما سبق خاطئ"],
        "answer": 0
    },
    {
        "q": "عندما A=#13/5/2021# فإن Month(A) تكون:",
        "options": ["13", "2020", "5", "2021"],
        "answer": 2
    },
    {
        "q": "يمكن إضافة Module للمشروع عن طريق القائمة:",
        "options": ["Tools", "Run", "Project", "File"],
        "answer": 2
    },
    {
        "q": "كل ما يلي يتعلق بجملة استدعاء الإجراء الفرعي باستثناء:",
        "options": ["لا يمكن الاستغناء فيها عن جملة Call", "لا يؤثر اختلاف أسماء المعاملات فيها عن أسماء المعاملات في جملة الإعلان.", "يجب أن يكون عدد المعاملات مطابق لعددها في جملة الإعلان.", "لا يكتب فيها نوع المعاملات"],
        "answer": 0
    },
	{
        "q": "كم عدد معاملات الاجراء الفرعي\n<div class='code-block'>Private Sub constructmessage(v As Integer)\nMsgBox \"value of v is =\" & v\nEnd Sub</div>",
  "options": ["1 ", "2", "3"],
        "answer": 0
    },
    {
        "q": "الإجراء الفرعي يقوم بإعادة:",
        "options": ["قيمة واحدة من خلال اسم المتغير.", "قيمة أو أكثر.", "قيمة واحدة تعود في اسم الإجراء.", "قيمة واحدة فقط."],
        "answer": 1
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