const fullQuestionBank = [
  // أسئلة الاختيار من متعدد
  {
    "q": "الإجراء الفرعي (SUB)، يتم استلام القيم المعادة إلى البرنامج الرئيسي من خلال:",
    "options": ["اسم الإجراء مباشرة", "معاملات الإخراج", "جملة Call فقط.", "معاملات الإدخال."],
    "answer": 1
  },
  {
    "q": "من الجمل التالية تعتبر صحيحة فيما يتعلق بالدالة الوظيفية (Function)",
    "options": ["تعيد قيمة واحدة أو أكثر.", "تخزن القيمة المعادة في اسمها", "تنتهي دائماً بجملة End Sub", "يتم استدعاؤها باستخدام جملة Call فقط."],
    "answer": 1
  },
  {
    "q": "عند الرغبة في استدعاء برنامج فرعي من أي نموذج في المشروع، يجب كتابته في:",
    "options": ["الجزء Private.", "الجزء General.", "موديول Module.", "الإجراء Main"],
    "answer": 2
  },
  {
    "q": "الفرق الجوهري الذي يمنع تحويل \"بعض\" الإجراءات الفرعية إلى دوال وظيفية هو:",
    "options": ["كبر حجم الكود.", "إعادة الإجراء لأكثر من قيمة أو عدم إعادته لأي قيمة.", "استخدام جملة Call.", "مكان كتابة الإجراء."],
    "answer": 1
  },
  {
    "q": "الجملة البرمجية Private Function calc(V As Integer) As String تشير String إلى:",
    "options": ["نوع معامل الإدخال", "نوع البيانات المعادة من الدالة.", "اسم الدالة.", "نطاق عمل الدالة."],
    "answer": 1
  },
  {
    "q": "تستخدم جملة ......... لإنهاء تنفيذ البرنامج الفرعي قبل الوصول إلى نهايته الطبيعية:",
    "options": ["End Sub.", "Exit Sub.", "Stop Sub.", "Return Sub."],
    "answer": 1
  },
  {
    "q": "عند استدعاء إجراء فرعي، يجب أن يتطابق المعامل الأول في جملة الاستدعاء مع المعامل الأول في رأس الإجراء من حيث:",
    "options": ["الاسم فقط.", "القيمة فقط.", "نوع البيانات.", "لا يشترط التطابق"],
    "answer": 2
  },
  {
    "q": "يمكن استدعاء الدالة الوظيفية (Function) من خلال:",
    "options": ["جمل التعيين (الإسناد).", "اسمها مباشرة داخل تعبير.", "تعيين (اسناد)اسمها مباشرة داخل تعبير.", "جملة Call فقط"],
    "answer": 2
  },
  {
    "q": "الإجراء Public Sub calc(x, y, s1, s2, s3, s4)، إذا كانت y  و x مدخلات فإن عدد المخرجات:",
    "options": ["يجب أن يساوي عدد المدخلات", "قد يكون أقل أو أكثر من عدد المدخلات.", "يجب أن يكون قيمة واحدة.", "دائماً صفر"],
    "answer": 1
  },
  {
    "q": "تعتبر المعاملات في الدوال الوظيفية (Function) تمثيلاً لـ:",
    "options": ["المدخلات والمخرجات معاً.", "المخرجات فقط", "المدخلات فقط.", "عملية المعالجة."],
    "answer": 2
  },
  {
    "q": "تستخدم جملة ......... لإنهاء تنفيذ الدالة قبل الوصول إلى نهايتها الطبيعية:",
    "options": ["End Function", "Exit Function", "Stop Function.", "Return Function."],
    "answer": 1
  },
  {
    "q": "نهاية رأس الدالة الوظيفية هي المكان المخصص لـ:",
    "options": ["كتابة أول جملة برمجية.", "تحديد نوع القيمة المعادة", "استدعاء الدالة.", "إنهاء الدالة."],
    "answer": 1
  },
  {
    "q": "إذا قام برنامج رئيسي بامرار معاملات إلى إجراء فرعي، فإن هذا الإجراء:",
    "options": ["يعمل بشكل مستقل تماماً.", "يستقبل قيم المعاملات لمعالجتها.", "يعيد النتيجة دائماً في اسمه.", "لا يمكنه استقبال معاملات إدخال."],
    "answer": 1
  },
  {
    "q": "الدالة الوظيفية (Function) بالمقارنة مع الإجراء الفرعي:",
    "options": ["دائماً أسرع في التنفيذ.", "تعيد قيمة واحدة فقط عادةً.", "لا يمكن استدعاؤها باسمها.", "تكتب فقط في الموديول."],
    "answer": 1
  },
  {
    "q": "وظيفة الدالة Val المستخدمة في برامج الإدخال هي:",
    "options": ["عرض صناديق البيانات.", "تحويل النص إلى قيمة عددية.", "طباعة النتائج.", "استدعاء الدوال الفرعية."],
    "answer": 1
  },
  {
    "q": "عند استدعاء إجراء فرعي باسمه فقط بدون جملة Call، يجب:",
    "options": ["وضع المعاملات بين أقواس.", "عدم وضع أقواس حول المعاملات", "كتابة كلمة Sub قبل الاسم.", "تعريف المعاملات كـ String."],
    "answer": 1
  },
  {
    "q": "مثال حساب العمر A = \"The Age is: \" & Y1 - Y2 داخل إجراء فرعي، نوع البيانات المعادة في المعامل A هو:",
    "options": ["عدد صحيح.", "سلسلة حرفية (String).", "عدد كسرى.", "منطقي."],
    "answer": 1
  },
  {
    "q": "يتم الخروج من الدالة الوظيفية والرجوع للبرنامج الرئيسي فور تحقق شرط معين باستخدام:",
    "options": ["جملة IF.", "جملة Exit Function", "جملة End Function", "جملة Call."],
    "answer": 1
  },
  {
    "q": "من الخيارات التالية \"دائماً\" من الممكن  ؟",
    "options": ["تحويل الإجراء الفرعي لدالة وظيفية.", "تحويل الدالة الوظيفية لإجراء فرعي.", "تحويل الموديول لنموذج.", "تحويل المدخلات لمخرجات."],
    "answer": 1
  },
  {
    "q": "إذا كانت قيمة المقام صفر في دالة القسمة، فإن الإجراء الأفضل هو:",
    "options": ["إكمال القسمة.", "الخروج من الدالة باستخدام Exit Function", "استخدام End Function فوراً.", "تغيير نوع الدالة إلى إجراء فرعي."],
    "answer": 1
  },
{
    "q": "نهاية رأس الدالة الوظيفية هي المكان المخصص لـ:",
    "options": ["كتابة أول جملة برمجية.", "تحديد نوع الدالة ", "استدعاء الدالة.", "إنهاء الدالة."],
    "answer": 1
  },
  // أسئلة الصواب والخطأ
  {
    "q": "يمكن للإجراء الفرعي (SUB) أن يعيد أكثر من قيمة إلى البرنامج الرئيسي.",
    "options": ["صح", "خطأ"],
    "answer": 0
  },
  {
    "q": "تخزن القيمة المعادة من الدالة الوظيفية (Function) في أحد معاملاتها.",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "تبدأ الدوال الوظيفية دائماً بالإعلان عنها باستخدام الكلمة المحجوزة Sub.",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "يتم استدعاء الإجراء الفرعي إما باستخدام جملة Call أو باسمه مباشرة.",
    "options": ["صح", "خطأ"],
    "answer": 0
  },
  {
    "q": "في لغة الفيجوال بيسك، لا يمكن إنهاء تنفيذ الدالة إلا عند الوصول إلى جملة End Function.",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "يشترط في الإجراء الفرعي أن يكون عدد المخرجات مساوياً لعدد المدخلات.",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "الدالة الوظيفية لا تعمل وحدها ويجب أن تكون ضمن برنامج رئيسي يستدعيها.",
    "options": ["صح", "خطأ"],
    "answer": 0
  },
  {
    "q": "يمكننا دائماً تحويل أي إجراء فرعي (SUB) إلى دالة وظيفية (Function)",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "يتم تحديد نوع البيانات المعادة من الدالة في بداية جملة الإعلان عنها.",
    "options": ["صح", "خطأ"],
    "answer": 1
  },
  {
    "q": "تستخدم الدالة InputBox لعملية إدخال البيانات في لغة الفيجوال بيسك.",
    "options": ["صح", "خطأ"],
    "answer": 0
  },
    {
    "q": "ما هي الخاصية التي يتم عرضها دائماً في بداية قائمة الخصائص (Properties Window) لتمييز الأداة داخل البرنامج البرمجي؟",
    "options": ["Caption", "Text", "Visible", "Name"],
    "answer": 3
  },
  {
    "q": "أي من نوافذ بيئة التطوير المتكاملة (IDE) في البيسك المرئي تعرض فكرة عن مكان ظهور النموذج على الشاشة بعد تنفيذ التطبيق؟",
    "options": ["نافذة مستكشف المشروع (Project Explorer)", "نافذة الخصائص (Properties Window)", "شريط أدوات التحكم (Toolbox Controls)", "نافذة شكل النموذج (The Form Layout Window)"],
    "answer": 3
  },
  {
    "q": "في لغة البيسك المرئي، ما هو الخطأ الذي ينتج عن كتابة أمر برمجي بصورة غير صحيحة، مثل كتابة \"Prent\" بدلاً من \"Print\"؟",
    "options": ["خطأ منطقي (Logic Error)", "خطأ نحوي (Syntax Error)", "خطأ لغوي (Linguistic Error)", "خطأ في وقت التشغيل (Run time Error)"],
    "answer": 2
  },
  {
    "q": "أي من قوائم شريط القوائم (Menu Bar) تحتوي على الأوامر الخاصة بإضافة مكونات المشروع مثل النماذج (Forms) والوحدات البرمجية (Modules)؟",
    "options": ["قائمة ملف (File)", "قائمة التعديل (Edit)", "قائمة المشروع (Project)", "قائمة الأدوات (Tools)"],
    "answer": 2
  },
  {
    "q": "لتحديد لون الخلفية أداة تحكم معينة أو لنموذج العمل في البيسك المرئي، نستخدم خاصية:",
    "options": ["ForeColor", "BackColor", "Visible", "Caption"],
    "answer": 1
  },
  {
    "q": "ما هي أفضل طريقة لإظهار شريط أدوات التحكم (Toolbox Controls) في بيئة التطوير المتكاملة إذا كان مخفياً؟",
    "options": ["الضغط على مفتاح F4", "من قائمة \"Project\" نختار \"Toolbox\"", "من قائمة \"View\" نختار \"Toolbox\"", "من قائمة \"Debug\" نختار \"Toolbox\""],
    "answer": 2
  },
  {
    "q": "إذا أردت تغيير النموذج الذي يبدأ تشغيل التطبيق به في البيسك المرئي من أي قائمة يتم ذلك؟",
    "options": ["قائمة View ثم خيار Forms", "قائمة Debug ثم خيار Step Into", "قائمة File ثم خيار Save Project", "قائمة Project ثم خيار (ProjectName) Properties"],
    "answer": 3
  },
  {
    "q": "في نافذة مستكشف المشروع، ما هو الإجراء المطلوب لحذف نموذج (Form) من المشروع؟",
    "options": ["النقر المزدوج على اسم النموذج ثم اختيار Delete", "سحبه إلى سلة المهملات داخل بيئة التطوير", "النقر بالزر الأيمن على اسم النموذج واختيار الأمر (Remove Form)", "من قائمة Edit اختيار الأمر Cut"],
    "answer": 2
  },
  {
    "q": "أي من الخطوات التالية في حل المسألة تسبق مباشرة \"تنفيذ الحل باستخدام لغة الفيجوال بيسك المرئي\"؟",
    "options": ["تحديد الأدوات المطلوبة.", "كتابة الخوارزميات.", "تعريف المشكلة.", "المراجعة والتصحيح للحل."],
    "answer": 0
  },
  {
    "q": "ما هو المكون الرئيسي الذي يتم تحديده في مرحلة \"تحديد الأدوات المطلوبة\"؟",
    "options": ["مدخلات ومعالجات ومخرجات الخوارزمية.", "النماذج (Forms)، الأزرار (Buttons)، وصناديق النصوص (Text Boxes).", "الأوامر البرمجية بلغة الفيجوال بيسك المرئي.", "الأخطاء النحوية والمنطقية."],
    "answer": 1
  },
  {
    "q": "في سياق برمجة التطبيقات، ما هي أهمية الواجهة الرسومية للمستخدم (GUI) التي يتميز بها الفيجوال بيسك المرئي؟",
    "options": ["كتابة الكود البرمجي بشكل أسرع.", "التعامل مع قواعد البيانات المعقدة.", "توفير تصميم مرئي سهل الاستخدام (User Friendly).", "تقليل حجم ملفات التطبيق."],
    "answer": 2
  },
  {
    "q": "تُعدّ خطوة \"كتابة الخوارزميات\" بمثابة تحديد",
    "options": ["الأخطاء اللغوية في الكود", "المكونات البصرية لواجهة المستخدم.", "الخطوات المنطقية المتسلسلة (مدخلات – معالجة – مخرجات) لحل المشكلة.", "الأوامر البرمجية النهائية."],
    "answer": 2
  },
   {
    "q": "إذا لم يفهم المبرمج المشكلة جيداً في مرحلة \"تعريف المشكلة\"، فما هي النتيجة المحتملة ؟",
    "options": ["لن يتمكن من تحديد الأدوات المطلوبة.", "لن يصل إلى الحل الصحيح.", "لن يستطيع كتابة الخوارزميات.", "لن يتمكن من مراجعة وتصحيح الكود."],
    "answer": 1
  },
  {
    "q": "ما هي المرحلة التي يتم فيها تحويل خوارزمية الحل إلى أوامر برمجية بلغة الفيجوال بيسك المرئي؟",
    "options": ["تحديد الأدوات المطلوبة.", "تعريف المشكلة.", "تنفيذ الحل باستخدام لغة الفيجوال بيسك المرئي.", "المراجعة والتصحيح للحل."],
    "answer": 2
  },
 {
    "q": "لماذا أصبحت لغة الفيجوالبيسك المرئي لغة تُدرس  في المؤسسات التعليمية حول العالم؟",
    "options": ["لانتشار منتجات مايكروسوفت.",
 "لسهولة  تعلمها و استخدامها في بناء التطبيقات " ,
"لعدم مقدرتها في إنتاج تطبيقات سريعة  " ,
 "لانها من البرمجيات المجانية."],
    "answer": 1
  },


  {
    "q": "ما هو الغرض الأساسي من خطوة \"المراجعة والتصحيح للحل\"؟",
    "options": ["تعريف المشكلة بشكل أدق.", "اكتشاف الأخطاء وإجراء تعديلات لتحسين الحل.", "تصميم الواجهة الرسومية للتطبيق.", "تحديد تسلسل الخوارزمية."],
    "answer": 1
  },
  {
    "q": "ما الذي يركز عليه المبرمج في مرحلة \"تعريف المشكلة\" بعد فهم المشكلة؟",
    "options": ["حصر المشاكل البرمجية.", "تصميم الواجهة الرسومية.", "وصف الحل المطلوب بدقة.", "تحديد الأوامر البرمجية الأساسية."],
    "answer": 2
  },
  {
    "q": "ما هو المصطلح الذي يصف عملية \"كتابة الجملة البرمجية بطريقة تحتوي على اخطاء املائية\"؟",
    "options": ["الأخطاء اللغوية.", "الأخطاء النحوية.", "الأخطاء المنطقية.", "أخطاء الخوارزميات."],
    "answer": 0
  },
  {
    "q": "ما هو الاسم الكامل لبيئة العمل المتكاملة التي توفرها Visual Basic والتي يتم اختصارها بـ IDE؟",
    "options": ["Integrated Device Environment", "Integrated Development Environment", "Interface Design Editor", "Interactive Digital Exchange"],
    "answer": 1
  },
  {
    "q": "أي نافذة من نوافذ بيئة التطوير المتكاملة (IDE) تُستخدم بشكل أساسي لضبط وتعديل السمات والصفات (مثل Caption أو Name أو Color) للعنصر المُحدد (سواء كان نموذجاً أو أداة تحكم)؟",
    "options": ["نافذة مستكشف المشروع (Project Explorer)", "نافذة شكل النموذج (Form Layout Window)", "نافذة الخصائص (Properties Window)", "نافذة النموذج (Form)"],
    "answer": 2
  },
  {
    "q": "ما هو الدور الجوهري الذي تؤديه \"أدوات التحكم\" (Toolbox Controls) في عملية بناء التطبيق؟",
    "options": ["كتابة أوامر البرمجة الأساسية للتحكم في سير البرنامج.", "تحديد موقع النموذج على شاشة المستخدم عند التنفيذ.", "توفير عناصر واجهة جاهزة للاستخدام (كالأزرار ومربعات النصوص) لوضعها على النموذج.", "عرض قائمة الملفات والمكونات التي يتألف منها المشروع"],
    "answer": 2
  },
  {
    "q": "ما هو نوع  المشروع الذي يتم اختياره في مربع حوار \"New Project\" والذي ينتج عنه برنامج تنفيذي (يمكن تشغيله بشكل مستقل خارج بيئة التطوير)؟",
    "options": ["ActiveX EXE", "ActiveX Dll", "Standard EXE", "ActiveX Control"],
    "answer": 2
  },
  {
    "q": "أي نافذة تعرض قائمة هرمية بجميع الملفات والنماذج والمكونات التي تشكل المشروع، وهي ضرورية لتنظيم العمل والانتقال بين أجزاء المشروع؟",
    "options": ["نافذة شكل النموذج", "نافذة الأدوات", "شريط القوائم", "نافذة مستكشف المشروع"],
    "answer": 3
  },
  {
    "q": "ما هي الوظيفة الرئيسية لنافذة شكل النموذج (Form Layout Window)؟",
    "options": ["تحديد حجم النموذج", "تحديد موضع ظهور النموذج على الشاشة عند تشغيل البرنامج.", "إضافة أوامر برمجية للنموذج", "إضافة أدوات التحكم إلى النموذج."],
    "answer": 1
  },
  {
    "q": "لماذا تُعد خطوة ضبط خصائص الأدوات (Properties) خطوة تالية وضرورية لوضع الأدوات على النموذج، وقبل كتابة الأوامر البرمجية؟",
    "options": ["لأن الأوامر البرمجية لا تعمل إلا بعد تحديد موقع النموذج.", "لضمان توافق أسماء الأدوات مع الشيفرة البرمجية المكتوبة مسبقاً.", "لتحديد الشكل والمظهر والسلوك الأولي للأدوات قبل أن تبدأ الأوامر البرمجية بالتحكم فيها.", "لفرز الأدوات حسب نوعها وتحديد أولويتها في التنفيذ."],
    "answer": 2
  },
  {
    "q": "ما هي الخطوة التي تسبق ظهور نافذة بيئة التطوير المتكاملة (IDE) مباشرة، وهي خطوة ضرورية لبدء أي مشروع جديد؟",
    "options": ["البدء بكتابة الشيفرة البرمجية", "ظهور مربع حوار \"New Project\" واختيار نوع المشروع.", "وضع أدوات التحكم على النموذج.", "ضبط خصائص النموذج الرئيسي"],
    "answer": 1
  },
  {
    "q": "ما هي الخاصية التي يتم استخدامها بشكل رئيسي لتغيير النص الظاهر على أداة تحكم؟",
    "options": ["Text", "Name", "Caption", "Visible"],
    "answer": 2
  },
  {
    "q": "لتحديد المكان الدقيق الذي سيظهر فيه النموذج (Form) على الشاشة عند التشغيل، يتم استخدام أي نافذة مما يلي؟",
    "options": ["Project Explorer", "Code Window", "Form Layout Window", "Properties Window"],
    "answer": 2
  },
  {
    "q": "أي من أدوات التحكم التالية يُعتبر الأكثر كفاءة للسماح للمستخدم باختيار خيار واحد فقط من بين عدة خيارات متاحة ومحددة سلفاً في بيئة نموذج (Form)",
    "options": ["Check Box", "Option Button", "Text Box", "File List Box"],
    "answer": 1
  },
  {
    "q": "إذا أردت تضمين تطبيق خارجي (مثل جدول بيانات Excel) داخل نموذج Visual Basic الخاص بك، فما هي أداة التحكم الأنسب لتحقيق هذا التكامل",
    "options": ["Data", "Image", "Frame", "OLE"],
    "answer": 3
  },
  {
    "q": "أي من أوامر قائمة Debug يتم استخدامه لتنفيذ اجراء كامل  من الكود ؟",
    "options": ["Run to Cursor", "Step Over", "Toggle Breakpoint", "Start"],
    "answer": 1
  },
  {
    "q": "ما هي النافذة التي تعرض المكونات الهيكلية للمشروع (مثل النماذج، والوحدات، والملفات) وتسمح بالتنقل السريع بينها؟",
    "options": ["Properties Window", "Code Editor", "Project Explorer", "Immediate Window"],
    "answer": 2
  },
  {
    "q": "عند الحاجة إلى إيقاف تنفيذ البرنامج بشكل مؤقت لإجراء فحص أو تتبع لخطأ ما دون إنهاء التشغيل، ما هو الأمر الذي يجب استخدامه من قائمة Run؟",
    "options": ["Start", "Break", "End", "Run to cursor"],
    "answer": 1
  },
  {
    "q": "عند الحاجة إلى ترتيب أدوات التحكم على النموذج (مثل محاذاة يسار/يمين أو تباعد عمودي)، يجب اللجوء إلى قائمة:",
    "options": ["Project", "Tools", "Format", "Debug"],
    "answer": 2
  },
  {
    "q": "لتغيير الخصائص المشتركة لأكثر من أداة تحكم في نفس الوقت، يجب تحديد الأدوات أولاً ثم استخدام أي مفتاح أثناء التحديد؟",
    "options": ["Alt", "Shift", "Ctrl", "Tab"],
    "answer": 2
  },
  {
    "q": "ما هي الأداة التي تستخدم بشكل أساسي لإنشاء حاويات للأدوات الأخرى على النموذج، مما يسهل تجميع العناصر ذات الصلة منطقياً (خاصة مع Option Buttons)؟",
    "options": ["Shape", "Line", "Frame", "Image"],
    "answer": 2
  },
  {
    "q": "أي من القوائم التالية في شريط القوائم تحتوي على أمر Visual Data  Manager المسؤول عن دمج تطبيقات برمجية خارجية مع بيئة Visual Basic؟",
    "options": ["Tools", "Window", "Add ins", "Help"],
    "answer": 2
  },
  {
        "q": "كم عدد معاملات الاجراء الفرعي\n<div class='code-block'>Private Sub constructmessage(v As Integer)\nMsgBox \"value of v is =\" & v\nEnd Sub</div>",
  "options": ["1 ", "2", "3"],
        "answer": 0
    },
  
{
        "q": "كم عدد معاملات الاجراء الفرعي\n<div class='code-block'>Private Sub constructmessage(v As Integer)\nMsgBox \"value of v is =\" & v\nEnd Sub</div>",
  "options": ["1 ", "2", "3"],
        "answer": 0
    },



{
        "q": "كم عدد المعاملات الداخلة في هذا  الاجراء الفرعي\n<div class='code-block'>Public Sub calc(x, y, s1, s2, s3 As Integer, s4 As Single)\ns1 = x + y\ns2 = x - y\ns3 = x * y\ns4 = x / y\nEnd Sub</div>",
  "options": ["1 ", "2", "4"],
    "answer": 1
    },
{
        "q": "كم عدد المعاملات الخارجة في هذا  الاجراء الفرعي\n<div class='code-block'>Public Sub calc(x, y, s1, s2, s3 As Integer, s4 As Single)\ns1 = x + y\ns2 = x - y\ns3 = x * y\ns4 = x / y\nEnd Sub</div>",
  "options": ["1 ", "2", "3", "4"],
        "answer": 3
    },

{
        "q": "كم عدد المعاملات الخارجة في هذا  الاجراء الفرعي\n<div class='code-block'>Private Sub add(a As Long, B As Long, C As Long)\nDim sum As Long\nsum = a + B + C\n  IblMini.Caption = \"مجموع الأعداد  \" & sum\nEnd Sub</div>",
  "options": ["0 ", "1", "2", "3"],
        "answer": 0
    },

{
        "q": "ما ناتج البرنامج التالي \n<div class='code-block'>Private Sub cmd Print_Click()\nDim x as Integer\nx = GetMin(12,5)\nPrint x\nEnd Sub\nFunction GetMin(a, b As Integer) As Integer\nIf a > b Then\nGetMin = a\nElse\nGetMin = b\nEnd If\nEnd Function</div>",
  "options": ["12 ", "5", "60"],
        "answer": 0
    },
 
  {
    "q": "الحدث (Event) هو فعل يقوم به المستخدم مثل النقر على زر الفأرة (Click)، وينتج عنه رد فعل معين يكون مكتوباً بشكل كود. ما هي الصيغة القياسية التي تتبعها أسماء إجراءات الأحداث؟",
    "options": ["اسم الكائن _ الحدث", "الحدث _ اسم الكائن", "الحدث.اسم الكائن", "اسم الكائن.الحدث"],
    "answer": 0
  }
];

// ========================================
// إعدادات الاختبار
// ========================================
const REQUIRED_QUESTIONS_COUNT = 75;
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

