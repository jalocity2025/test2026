const fullQuestionBank = [
    { "q": "تعتبر الإلكترونيات الوسيلة الوحيدة للتواصل مع إدارات الحكومة الإلكترونية.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "المراحل الانتقالية هي مؤثرات تتعلق بتسلسل ظهور عناصر الشريحة وطريقة حركتها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تنظم قوانين التعاملات الإلكترونية التعاملات والخدمات الإلكترونية التي تكون تقنيات المعلومات موضوعاً أو وسيلتها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يحدد الترتيب في العروض التقديمية كاملاً أن تظهر شرائح العرض بالتسلسل حسب عناوين الشرائح ترتيباً تصاعدياً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "في برنامج العروض التقديمية PowerPoint يمكن إدراج الفيديو من ملف خارجي وتجهيزه مسبقاً إلى شريحة العرض.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يتسبب فيروس الماكرو في تعطل عمل الشبكة وتوقفها.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تستعمل البرمجيات التطبيقية قدرتها على حماية حقوق ملكية البنية التحتية وتسجيلها.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "جعلت الوسائط المتعددة عملية التواصل مع الحاسوب أكثر صعوبة وتعقيداً.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يمكن تعديل البيانات النصية لشريحة العرض قبل عرضها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "ينصح بعدم استخدام مؤثرات الحركة المخصصة لأنها تؤدي إلى تشتيت أفكار الحاضرين أثناء العرض.", "options": ["صح", "خطأ"], "answer": 1 },

    // من ملف 303369121_192538723155936_3436786082493495889_n.jpg
    { "q": "يمكن إضافة مؤثرات الحركة إلى:", "options": ["الشرائح التي بها صور فقط", "كل عنصر يحتوي على نص", "كل عنصر من عناصر الشريحة", "الشريح الأولى للعرض فقط"], "answer": 2 },
    { "q": "كل ما يلي من مزايا الخدمات الإلكترونية باستثناء:", "options": ["تسجيل الدخول في المواقع", "زسرعة انجاز المعاملات ", "خفض تكاليف إنجاز الخدمات", "إنجاز الخدمات على مدار الساعة"], "answer": 0 },
    { "q": "يستخدم التوقيع الإلكتروني لـ:", "options": ["تأمين البيانات المرسلة عبر الشبكات", "ضمان استغلال البرمجيات التجارية", "تصنيف المعلومات التي يتم تداولها", "تحديد مواقع التسوق الآمنة"], "answer": 0 },
    { "q": "يمكن إنشاء شريحة جديدة بنفس التنسيق عن طريق:", "options": ["الضغط باليمين على عنوان الشريحة ثم اختر إضافة شريحة", "الضغط باليمين على منطقة لوحة التفاصيل ثم اختر شريحة جديدة", "من قائمة عرض ثم اختر إدراج شريحة", "من قائمة إدراج ثم اختر شريحة جديدة"], "answer": 1 },
    { "q": "يمكن إنتاج الرسوم باستخدام العديد من الوسائل منها:", "options": ["برنامج مشغل الوسائط", "الماسح الضوئي", "برنامج مسجل الصوت", "كرت الرسومات"], "answer": 1 },
    { "q": "تسلم المستخدم رسالة توهمه فيها بأنه سيربح مبلغاً كبيراً هو مثال على:", "options": ["الاستخدام غير المشروع للبيانات", "الابتزاز الإلكتروني", "الاصطياد الإلكتروني", "قرصنة المعلومات"], "answer": 2 },
    { "q": "كل ما يلي يعتبر من الصفات الشخصية التي تستخدم في تحديد شخصية المستخدم عدا:", "options": ["بيانات قزحية العين ", "فصيلة الدم", "صوت المستخدم", "بصمة الأصابع"], "answer": 1 },

    // من ملف 304842272_192538753155933_2216224204474808042_n.jpg
    { "q": "في أي مرحلة من مراحل إنجاز الحكومة الإلكترونية تبرز خدمة البوابة الإلكترونية؟", "options": ["المعاملات الإلكترونية", "تكامل الخدمات", "الظهور الحكومي", "التفاعل وتبادل البيانات"], "answer": 3 },
    { "q": "الوثيقة القانونية التي تحكم استعمال أو إعادة توزيع البرمجيات المحمية بحقوق النشر تعرف بـ......", "options": ["التعاقدات الإلكترونية", "التوقيعات الإلكترونية", "قرصنة البرمجيات", "رخصة البرمجيات"], "answer": 3 },
    { "q": "عند ظهور رمز مكبر صوت على شريحة عرض، فإن ذلك يدل على احتوائها على:", "options": ["صورة رقمية", "حركة مخصصة", "ملف صوتي", "مرحلة انتقالية"], "answer": 2 },
    { "q": "من مؤشرات الشفافية التي تميز الحكومات الديمقراطية:", "options": ["السماح بالاطلاع على المعلومات المتعلقة بالدولة", "إنشاء شبكات إلكترونية في الأماكن العامة", "السماح بإنشاء مواقع خاصة للانتخابات", "الاهتمام بالبيئة التحتية لقطاع الاتصالات"], "answer": 0 },
    { "q": "أي مما يلي هو جهاز لإنتاج الوسائط المتعددة؟", "options": ["الذاكرة الرئيسية", "كاميرا التصوير الرقمي", "الطابعة الليزرية", "كرت الشبكة"], "answer": 1 },
    { "q": "إحدى طرفيات الحاسوب المستخدمة لسماع الأصوات الصادرة عن الحاسوب:", "options": ["السماعات", "شاشة العرض", "الماسح الضوئي", "القلم الضوئي"], "answer": 0 },

    // من ملف 305065390_192538686489273_2574845297993677468_n.jpg
    { "q": "يمكن إزاحة الصورة وتثبيتها في المكان المناسب وذلك ب:", "options": ["إضافة حركة مخصصة للصورة", "السحب والإفلات عن طريق الفأرة", "من قائمة إدراج ثم خيار تخطيط", "تصغير أو تكبير الصورة"], "answer": 1 },
    { "q": "تتمثل جريمة سرقة وقت الحاسوب في أن يقوم شخص باستخدام الحاسوب في:", "options": ["كتابة تقرير عن عمله", "وقت غير وقت العمل", "مهام ليست ضمن عمله", "مكان خارج مكان العمل"], "answer": 2 },
    { "q": "أي مما يلي ليس من فوائد برمجيات العروض التقديمية للمتحدثين؟", "options": ["التمكن من تنظيم سلسلة الحديث", "منع فرصة تذكر نقاط العرض الرئيسية", "زيادة حاسة الذكاء والإلمام بالمواضيع المطروحة", "تقديم المعلومات والصور التي تدعم الشرح"], "answer": 1 },
    { "q": "أي من المصطلحات التالية هو امتداد لملف صورة؟", "options": ["WMV", "MP3", "MPEG", "BMP"], "answer": 3 },
    { "q": "تتميز مرحلة النشر الإلكتروني بـ:", "options": ["تحسين معدل النشاط الإلكتروني", "تطبيق الوصول إلى مواقع الحكومة الإلكترونية", "استخدام القواعد الإلكترونية", "توفير المعلومات الحكومية على المواقع الإلكترونية"], "answer": 3 },
    { "q": "الجدار الناري هو:", "options": ["جدار افتراضي", "مجموعة من البرمجيات والأجهزة", "الحد الفاصل بين شبكتين", "جميع الإجابات السابقة صحيحة"], "answer": 3 },
    { "q": "المؤثر الذي يهتم بتحديد مسار حركة العنصر أثناء العرض هو مؤثر:", "options": ["دخول", "خروج", "مسارات الحركة", "تمييز"], "answer": 2 },

    // من ملف 305139372_192538783155930_6936953829342895173_n.jpg (مزاوجة - تم تحويلها إلى أسئلة عادية)
    { "q": "من التحديات الفنية التي تواجه تطبيق الحكومة الإلكترونية:", "options": ["نسبة المواطنين المالكين للحواسيب", "استخدام كلمات المرور والتجسس عليها", "توقف بعض التطبيقات البرمجية عن العمل", "التلاعب بإدخال بيانات غير صحيحة"], "answer": 0 },
    { "q": "من الممارسات غير القانونية التي تضع مرتكبيها تحت طائلة القانون:", "options": ["نسبة المواطنين المالكين للحواسيب", "استخدام كلمات المرور والتجسس عليها", "توقف بعض التطبيقات البرمجية عن العمل", "التلاعب بإدخال بيانات غير صحيحة أو تزويرها"], "answer": 3 },
    { "q": "من أعراض الإصابة بفيروس الحاسوب:", "options": ["نسبة المواطنين المالكين للحواسيب", "استخدام كلمات المرور والتجسس عليها", "توقف بعض التطبيقات البرمجية عن العمل", "التلاعب بإدخال بيانات غير صحيحة"], "answer": 2 },
    { "q": "من المخاطر الأمنية العالية لأنظمة الشبكات والاتصالات:", "options": ["نسبة المواطنين المالكين للحواسيب", "استخدام كلمات المرور والتجسس عليها", "توقف بعض التطبيقات البرمجية عن العمل", "التلاعب بإدخال بيانات غير صحيحة أو تزويرها"], "answer": 3 },
    { "q": "كاميرا التصوير الرقمي تستخدم لـ:", "options": ["عرض المحتوى التعليمي بطرق متعددة", "إضافة عنصر وسائط متعددة إلى شريحة", "إبراز عنصر في شريحة", "إنتاج الصور الرقمية الثابتة والفيديو"], "answer": 3 },
    { "q": "الوسائط المتعددة تستخدم في:", "options": ["عرض المحتوى التعليمي بطرق متعددة", "إضافة عنصر وسائط متعددة إلى شريحة", "إبراز عنصر في شريحة", "تخزين الوسائط المتعددة"], "answer": 0 },
    { "q": "قائمة إدراج تستخدم لـ:", "options": ["عرض المحتوى التعليمي بطرق متعددة", "إضافة عنصر وسائط متعددة إلى شريحة", "إبراز عنصر في شريحة", "تخزين الوسائط المتعددة"], "answer": 1 },
    { "q": "مؤثرات الحركة تستخدم لـ:", "options": ["عرض المحتوى التعليمي بطرق متعددة", "إضافة عنصر وسائط متعددة إلى شريحة", "إبراز عنصر في شريحة", "تخزين الوسائط المتعددة"], "answer": 2 },
    { "q": "أقراص التخزين الليزرية تستخدم في:", "options": ["عرض المحتوى التعليمي بطرق متعددة", "إضافة عنصر وسائط متعددة إلى شريحة", "إبراز عنصر في شريحة", "تخزين الوسائط المتعددة"], "answer": 3 },

    // من ملف 305437755_192538626489279_6581614333836211582_n.jpg (صح/خطأ)
    { "q": "تقوم الفيروسات بنسخ نفسها من حاسوب لآخر متى ما تواجدت على نفس شبكة الاتصال.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "في الوضع التقليدي لتجهيز شرائح العرض فإن مكونات الشريحة تظهر على الشريحة مباشرة دون أي مؤثرات حركة.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يمثل المفتاح الخاص الذي يسلم مع الشهادة الرقمية التوقيع الإلكتروني الشخصي للمواطنين.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تتمثل قرصنة البرمجيات في نسخ البرامج والاستخدام غير المصرح به.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "تعتمد الصحافة الإلكترونية على نشر الأخبار كنصوص وصور ثابتة فقط.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يستغرق برنامج تحويل الحكومة من تقليدية إلى إلكترونية أشهر قليلة من التخطيط والتشغيل المتزايد.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "يعد تشفير البيانات ثم إعادتها إلى صيغتها الأصلية اعتماداً على طريقة التشفير نفسها.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "الحكومة الإلكترونية تفتح الآفاق واسعة لكشف ومكافحة الفساد الإداري والحد منه.", "options": ["صح", "خطأ"], "answer": 0 },
    { "q": "يستخدم برنامج Media Player لإجراء مجموعة من أعمال التحرير والإخراج على ملفات الفيديو.", "options": ["صح", "خطأ"], "answer": 1 },
    { "q": "تتيح الوسائط المتعددة للمتعلمين حرية اختيار الطرق التي تناسب ميلهم في التعلم.", "options": ["صح", "خطأ"], "answer": 0 }
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