document.documentElement.classList.add('js');

const PHONE_WA = '97431443344';
const T = {
  en: {
    'nav.home':'Home','nav.services':'Services','nav.business':'For Business','nav.how':'How It Works','nav.contact':'Contact',
    'btn.wa':'Order on WhatsApp','btn.services':'Explore services','btn.quote':'Request a corporate quote',
    'hero.tagline':'The freshness you desire, and the care you deserve.',
    'cta.title':'Ready for a laundry partner your business can rely on?','cta.text':'Tell us about your volumes and schedule, and we will build a pickup route around your operating hours.',
    'form.title':'Send us a message','form.name':'Your name','form.phone':'Phone','form.company':'Company (optional)','form.sector':'Sector','form.msg':'Tell us about your volumes and schedule','form.send':'Send via WhatsApp','form.note':'Opens WhatsApp with your message pre-filled.','form.other':'Other / Individual','form.err':'Please add your name and a short message.',
    'ct.phone':'Phone & WhatsApp','ct.email':'Email','ct.web':'Website','ct.social':'Instagram','ct.loc':'Location','ct.loc.v':'Umm Garn, Doha, Qatar','ct.hours':'Hours','ct.hours.v':'Open 24 hours',
    'foot.explore':'Explore','foot.line':'Free Pickup & Delivery Across Qatar','tag.band':'The freshness you desire, and the care you deserve.',
    'hero.eyebrow':'Corporate & Commercial Laundry Services','hero.title':'Premium Care, Crafted in Qatar','hero.text':'A modern garment-care company serving retail and corporate customers across Qatar, with advanced cleaning technology, trained specialists, strict quality control and free pickup and delivery.','pill1':'Premium Care','pill2':'Free Pickup & Delivery','pill3':'24-Hour Service',
    'stat1':'Round-the-clock operations','stat2n':'Free','stat2':'Pickup & delivery across Qatar','stat3':'Garment-care services','stat4':'Business sectors served','rel.title':'Reliability Your Business Can Count On',
    'f1t':'Round the Clock Service','f1d':'24-hour operations supporting demanding schedules and deadlines.','f2t':'Free Pickup & Delivery','f2d':'Scheduled collections and deliveries across Qatar, so your team never leaves the premises.','f3t':'Hygiene & Safety','f3d':'Safe, fabric-friendly detergents and strict hygiene standards on every order.','f4t':'Trained Specialists','f4d':'Expert care for garments, uniforms and delicate fabrics by skilled attendants.','f5t':'Consistent Quality','f5d':'Reliable finishing and flawless presentation, every item and every time.','f6t':'Dedicated Support','f6d':'Corporate account management with simple, transparent monthly billing.',
    'about.eyebrow':'Who we are','about.title':'Precision, hygiene and genuine care, at any scale','about.text':'From a single delicate piece to the daily volumes of a hotel or hospital, our standard never changes. Every item is handled with precision, hygiene and genuine care, then finished and presented to the highest professional level.','mission.t':'Our Mission','mission.d':'To deliver a consistently superior standard of laundry and garment care that protects every fabric, preserves the quality and beauty of every garment, and delights every customer through exceptional service, advanced cleaning techniques, attention to detail, and uncompromising quality.','vision.t':'Our Vision','vision.d':'To redefine textile care in Qatar through premium quality, innovative technology, sustainable practices, and exceptional customer service, becoming a trusted name in professional garment care.','obj.title':'Our Objectives',
    'o1':'Deliver consistent, high-quality laundry and garment care services.','o2':'Ensure complete customer satisfaction through reliable, personalized solutions.','o3':'Maintain the highest standards of cleanliness, hygiene and fabric protection.','o4':'Invest in modern technology and innovative cleaning methods.','o5':'Promote environmentally responsible and sustainable laundry practices.','o6':'Build long-term relationships based on trust, transparency and professionalism.',
    'svc.eyebrow':'Our services','svc.title':'A Complete Range of Garment Care','svc.lead':'From everyday washing to specialty fabrics and bulk contracts, every item is finished and presented to the highest professional level.','s1':'Laundry & Washing','s2':'Dry Cleaning','s3':'Ironing & Pressing','s4':'Steam Pressing','s5':'Thobes & Abayas','s6':'Corporate Uniforms','s7':'Hotel Linen','s8':'Bedding & Towels','s9':'Carpets & Rugs','s10':'Curtains','s11':'Specialty Fabric Care','s12':'Bulk Laundry Solutions','svc.cta.t':'Not sure which service you need?','svc.cta.d':'Message us on WhatsApp and our team will guide you.',
    'biz.eyebrow':'For business','biz.title':'Tailored Solutions for Businesses','biz.lead':'Contract laundry built around your operation, from hotels to labor camps.','b1':'Hotels & Hospitality','b2':'Corporate Offices','b3':'Clinics & Hospitals','b4':'Restaurants & Catering','b5':'Healthcare Facilities','b6':'Salons & Spas','b7':'Residential Compounds','b8':'Labor Camps','b9':'Schools & Universities','why.title':'Why Leading Organizations Choose Al Alia',
    'w1t':'Trained Specialists','w1d':'A single point of contact who understands your business.','w2t':'Volume-Based Pricing','w2d':'Preferential rates that scale with your laundry needs.','w3t':'Monthly Billing Facility','w3d':'Simple, transparent invoicing on agreed terms.','w4t':'Service Level Agreements','w4d':'Clear commitments on turnaround and quality.','w5t':'Scheduled Pickup & Delivery','w5d':'Reliable routes built around your operating hours.','w6t':'Emergency Express Service','w6d':'Priority handling when timelines are critical.','w7t':'Uniform Management Programs','w7d':'End-to-end care and rotation for staff uniforms.','w8t':'Linen Tracking & Control','w8d':'Accountable handling of every item in your inventory.','w9t':'Quality Assurance Checks','w9d':'Multi-point inspection before every delivery.','w10t':'Professional Customer Support','w10d':'Responsive, courteous service whenever you need it.',
    'how.eyebrow':'How it works','how.title':'How Our Contract Service Works','c1':'Schedule Pickup','c2':'Free Collection','c3':'Premium Cleaning','c4':'Quality Check','c5':'On-Time Delivery','app.eyebrow':'The app','app.title':'Basic In-App Operational Flow','a1t':'Download the App','a1d':'Available on iOS and Android.','a2t':'Sign Up and Create a Profile','a2d':'Register easily and add your delivery details.','a3t':'Choose Your Laundry Service','a3d':'Select washing, dry cleaning, ironing, or other services.','a4t':'Schedule a Pickup','a4d':'Choose a convenient date and time for collection.','a5t':'Enjoy Clean & Fresh Clothes','a5d':'We collect, clean, finish, and deliver your clothes back to your doorstep.',
    'ct.eyebrow':'Contact','ct.title':"Let's build your laundry plan",'ct.lead':'Reach us on WhatsApp, by phone or by email, or fill in the form and it opens straight in WhatsApp.','app.play.pre':'GET IT ON','app.apple.pre':'Download on the','form.wa.greeting':'Hello Al Alia Laundry,','form.wa.name':'Name:','form.wa.company':'Company:','form.wa.phone':'Phone:','form.wa.sector':'Sector:'
  },
  ar: {
    'nav.home':'الرئيسية','nav.services':'الخدمات','nav.business':'للشركات','nav.how':'آلية العمل','nav.contact':'تواصل معنا',
    'btn.wa':'اطلب عبر واتساب','btn.services':'استكشف الخدمات','btn.quote':'اطلب عرض سعر للشركات',
    'hero.tagline':'النضارة التي ترغب بها، والرعاية التي تستحقها',
    'cta.title':'هل أنتم جاهزون لشريك غسيل تعتمد عليه شركتكم؟','cta.text':'أخبرونا عن كمياتكم وجدولكم، وسنصمم مسار الاستلام حول ساعات عملكم.',
    'form.title':'أرسل لنا رسالة','form.name':'الاسم','form.phone':'رقم الهاتف','form.company':'الشركة (اختياري)','form.sector':'القطاع','form.msg':'أخبرنا عن الكميات والجدول','form.send':'إرسال عبر واتساب','form.note':'يفتح واتساب مع رسالتك جاهزة.','form.other':'أخرى / أفراد','form.err':'يرجى إضافة الاسم ورسالة قصيرة.',
    'ct.phone':'الهاتف وواتساب','ct.email':'البريد الإلكتروني','ct.web':'الموقع الإلكتروني','ct.social':'إنستغرام','ct.loc':'الموقع','ct.loc.v':'أم قرن، الدوحة، قطر','ct.hours':'ساعات العمل','ct.hours.v':'مفتوح على مدار الساعة',
    'foot.explore':'استكشف','foot.line':'استلام وتوصيل مجاني في جميع أنحاء قطر','tag.band':'النضارة التي ترغب بها، والرعاية التي تستحقها',
    'hero.eyebrow':'خدمات الغسيل للشركات والقطاع التجاري','hero.title':'عناية فائقة، صُنعت في قطر','hero.text':'شركة عصرية للعناية بالملابس تخدم عملاء التجزئة والشركات في جميع أنحاء قطر، بأحدث تقنيات التنظيف وفريق من المتخصصين ومعايير صارمة لمراقبة الجودة، مع خدمة استلام وتوصيل مجانية.','pill1':'عناية فائقة','pill2':'استلام وتوصيل مجاني','pill3':'خدمة على مدار الساعة',
    'stat1':'عمليات على مدار الساعة','stat2n':'مجاناً','stat2':'استلام وتوصيل في جميع أنحاء قطر','stat3':'خدمات للعناية بالملابس','stat4':'قطاعات نخدمها','rel.title':'موثوقية يمكن لشركتك الاعتماد عليها',
    'f1t':'خدمة على مدار الساعة','f1d':'عمليات مستمرة تدعم أكثر الجداول الزمنية تطلباً والمواعيد النهائية المتكررة.','f2t':'استلام وتوصيل مجاني','f2d':'خدمات استلام وتسليم مجدولة في جميع أنحاء قطر، مما يغني فريقك عن مغادرة مقر العمل.','f3t':'النظافة والسلامة','f3d':'منظفات آمنة ولطيفة على الأقمشة ومعايير نظافة صارمة لكل طلب.','f4t':'متخصصون مدربون','f4d':'عناية متخصصة بالملابس والزي الموحد والأقمشة الرقيقة على يد طاقم ماهر.','f5t':'جودة ثابتة','f5d':'تشطيب موثوق ومظهر مثالي لكل قطعة وفي كل مرة.','f6t':'دعم مخصص','f6d':'إدارة حسابات الشركات مع نظام فوترة شهري بسيط وشفاف.',
    'about.eyebrow':'من نحن','about.title':'دقة ونظافة وعناية حقيقية، بأي حجم','about.text':'من قطعة واحدة رقيقة إلى الكميات اليومية لفندق أو مستشفى، لا تتغير معاييرنا أبداً. نتعامل مع كل قطعة بدقة ونظافة وعناية فائقة، ثم نشطبها ونقدمها بأعلى مستوى احترافي.','mission.t':'رسالتنا','mission.d':'تقديم مستوى فائق ومستمر من خدمات غسيل الملابس والعناية بها، بما يضمن حماية الأقمشة والحفاظ على جودة وجمال كل قطعة وإسعاد العملاء عبر خدمات استثنائية وتقنيات تنظيف متطورة واهتمام بالتفاصيل والتزام بمعايير جودة لا تقبل المساومة.','vision.t':'رؤيتنا','vision.d':'إعادة صياغة مفهوم العناية بالمنسوجات في قطر عبر الجودة الفائقة والتقنيات المبتكرة والممارسات المستدامة وخدمة العملاء الاستثنائية، لنصبح اسماً موثوقاً في العناية الاحترافية بالملابس.','obj.title':'أهدافنا',
    'o1':'تقديم خدمات متسقة وعالية الجودة في مجال غسيل الملابس والعناية بها.','o2':'ضمان رضا العملاء من خلال حلول موثوقة ومصممة لتلبية احتياجاتهم.','o3':'الحفاظ على أعلى معايير النظافة والتعقيم وحماية الأقمشة.','o4':'الاستثمار في التقنيات الحديثة وأساليب التنظيف المبتكرة.','o5':'تعزيز ممارسات الغسيل المستدامة والمسؤولة بيئياً.','o6':'بناء علاقات طويلة الأمد قائمة على الثقة والشفافية والمهنية.',
    'svc.eyebrow':'خدماتنا','svc.title':'مجموعة متكاملة للعناية بالملابس','svc.lead':'من الغسيل اليومي إلى الأقمشة الخاصة وعقود الكميات الكبيرة، تُشطَّب كل قطعة وتُقدَّم بأعلى مستوى احترافي.','s1':'الغسيل','s2':'التنظيف الجاف','s3':'الكي والضغط','s4':'الكي بالبخار','s5':'الأثواب والعبايات','s6':'الزي الموحد للشركات','s7':'بياضات الفنادق','s8':'مستلزمات الأسرّة والمناشف','s9':'السجاد والبُسُط','s10':'الستائر','s11':'العناية بالأقمشة الخاصة','s12':'حلول غسيل الملابس بكميات كبيرة','svc.cta.t':'لست متأكداً من الخدمة المناسبة؟','svc.cta.d':'راسلنا عبر واتساب وسيرشدك فريقنا.',
    'biz.eyebrow':'للشركات','biz.title':'حلول مخصصة للشركات','biz.lead':'خدمة غسيل تعاقدية مصممة حول أعمالكم، من الفنادق إلى معسكرات العمال.','b1':'الفنادق والضيافة','b2':'مكاتب الشركات','b3':'العيادات والمستشفيات','b4':'المطاعم وخدمات تقديم الطعام','b5':'مرافق الرعاية الصحية','b6':'الصالونات والمنتجعات الصحية','b7':'المجمعات السكنية','b8':'معسكرات العمال','b9':'المدارس والجامعات','why.title':'لماذا تختار المؤسسات الرائدة العالية؟',
    'w1t':'متخصصون مدربون','w1d':'جهة اتصال واحدة تتفهم طبيعة عملك.','w2t':'تسعير حسب الكميات','w2d':'أسعار تفضيلية تتناسب مع احتياجاتك.','w3t':'نظام فوترة شهرية','w3d':'فواتير بسيطة وشفافة وفقاً للشروط المتفق عليها.','w4t':'اتفاقيات مستوى الخدمة','w4d':'التزامات واضحة بشأن سرعة الإنجاز والجودة.','w5t':'استلام وتوصيل مجدول','w5d':'مسارات موثوقة مصممة لتلائم ساعات عملك.','w6t':'خدمة سريعة للطوارئ','w6d':'معالجة ذات أولوية عندما تكون المواعيد حرجة.','w7t':'برامج إدارة الزي الموحد','w7d':'عناية شاملة وتدوير لزي الموظفين.','w8t':'تتبع ومراقبة البياضات','w8d':'التعامل المسؤول مع كل قطعة في مخزونك.','w9t':'فحوصات ضمان الجودة','w9d':'فحص متعدد النقاط قبل كل تسليم.','w10t':'دعم عملاء احترافي','w10d':'خدمة سريعة الاستجابة ومهذبة كلما احتجت إليها.',
    'how.eyebrow':'آلية العمل','how.title':'كيف تعمل خدمة التعاقد لدينا','c1':'جدولة موعد الاستلام','c2':'استلام مجاني','c3':'تنظيف فاخر','c4':'فحص الجودة','c5':'التسليم في الموعد المحدد','app.eyebrow':'التطبيق','app.title':'سير العمليات الأساسي داخل التطبيق','a1t':'حمّل التطبيق','a1d':'متوفر على نظامي iOS وAndroid.','a2t':'سجّل وأنشئ ملفاً شخصياً','a2d':'سجّل بسهولة وأضف تفاصيل التوصيل الخاصة بك.','a3t':'اختر خدمة الغسيل','a3d':'اختر الغسيل أو التنظيف الجاف أو الكي أو خدمات أخرى.','a4t':'حدد موعداً للاستلام','a4d':'اختر التاريخ والوقت المناسبين للاستلام.','a5t':'استمتع بملابس نظيفة ومنعشة','a5d':'نجمع ملابسك وننظفها ونجهزها ثم نعيد توصيلها إلى باب منزلك.',
    'ct.eyebrow':'تواصل معنا','ct.title':'لنصمم خطة الغسيل الخاصة بكم','ct.lead':'تواصلوا معنا عبر واتساب أو الهاتف أو البريد الإلكتروني، أو املؤوا النموذج ليُفتح مباشرةً في واتساب.','app.play.pre':'حمّله من','app.apple.pre':'نزّله من','form.wa.greeting':'مرحباً مغسلة العالية،','form.wa.name':'الاسم:','form.wa.company':'الشركة:','form.wa.phone':'الهاتف:','form.wa.sector':'القطاع:'
  }
};

let lang = 'en';
try {
  const stored = localStorage.getItem('alalia-lang');
  if (stored === 'ar' || stored === 'en') lang = stored;
  else localStorage.setItem('alalia-lang', 'en');
} catch (e) {}

function waLink(text) {
  return 'https://wa.me/' + PHONE_WA + (text ? '?text=' + encodeURIComponent(text) : '');
}

function applyLang() {
  const dict = T[lang];
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i]').forEach((el) => {
    const value = dict[el.dataset.i];
    if (value) el.textContent = value;
  });

  const btn = document.getElementById('lang');
  if (btn) {
    btn.textContent = lang === 'ar' ? 'English' : 'العربية';
    btn.setAttribute('aria-label', lang === 'ar' ? 'تغيير اللغة' : 'Language');
  }
  document.querySelector('nav.main')?.setAttribute('aria-label', lang === 'ar' ? 'القائمة الرئيسية' : 'Main');
  document.getElementById('theme')?.setAttribute('aria-label', lang === 'ar' ? 'تغيير المظهر' : 'Toggle theme');
  document.getElementById('burger')?.setAttribute('aria-label', lang === 'ar' ? 'القائمة' : 'Menu');
  document.querySelector('.map-box')?.setAttribute('aria-label', lang === 'ar' ? 'موقع مغسلة العالية في أم قرن، الدوحة، قطر' : 'Map location for Umm Garn, Doha, Qatar');
  const mapFrame = document.querySelector('.map-box iframe');
  if (mapFrame) {
    mapFrame.title = lang === 'ar' ? 'خريطة أم قرن، الدوحة، قطر' : 'Map for Umm Garn, Doha, Qatar';
    const mapUrl = new URL(mapFrame.dataset.mapSrc);
    mapUrl.searchParams.set('hl', lang);
    mapFrame.src = mapUrl.href;
  }

  document.querySelectorAll('a.wa').forEach((a) => {
    const greeting = lang === 'ar'
      ? 'مرحباً، أود الاستفسار عن خدماتكم.'
      : 'Hello Al Alia Laundry, I would like to enquire about your services.';
    a.href = waLink(greeting);
  });

  const page = document.body.dataset.page;
  if (page && dict['nav.' + page]) document.title = dict['nav.' + page] + ' | Al Alia Laundry';
}

function paintThemeIcon() {
  const use = document.querySelector('#theme use');
  if (use) use.setAttribute('href', document.documentElement.dataset.theme === 'dark' ? '#i-sun' : '#i-moon');
}

function isDark() {
  if (document.documentElement.dataset.theme) return document.documentElement.dataset.theme === 'dark';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

document.getElementById('theme')?.addEventListener('click', () => {
  const root = document.documentElement;
  root.dataset.theme = isDark() ? 'light' : 'dark';
  root.style.colorScheme = root.dataset.theme;
  try { localStorage.setItem('alalia-theme', root.dataset.theme); } catch (e) {}
  paintThemeIcon();
});

document.getElementById('lang')?.addEventListener('click', () => {
  lang = lang === 'en' ? 'ar' : 'en';
  try { localStorage.setItem('alalia-lang', lang); } catch (e) {}
  applyLang();
});

const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
function closeNav(){
  nav?.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
  const use = burger?.querySelector('use');
  if (use) use.setAttribute('href', '#i-menu');
}

burger?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(Boolean(open)));
  const use = burger.querySelector('use');
  if (use) use.setAttribute('href', open ? '#i-x' : '#i-menu');
});

document.querySelectorAll('nav.main a[data-page]').forEach((link) => {
  const current = link.dataset.page === document.body.dataset.page;
  if (current) link.setAttribute('aria-current', 'page');
  else link.removeAttribute('aria-current');
});

function initMotion() {
  const icons = document.querySelectorAll('.hero-logo, .hero-facts .ic, .diamond .ic, .svc .tile, .sector .ic, .obj .ic, .why .spk, .store .ic, .ct-item .ic, .screen .mark');
  icons.forEach((icon) => {
    icon.classList.add('icon-glow');
    icon.addEventListener('pointermove', (event) => {
      const rect = icon.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      icon.style.transform = `translate(${px * 7}px, ${py * 7}px) rotateX(${py * -9}deg) rotateY(${px * 12}deg) scale(1.06)`;
      icon.style.filter = 'drop-shadow(0 12px 20px rgba(168,122,16,.18))';
    });
    icon.addEventListener('pointerleave', () => {
      icon.style.transform = '';
      icon.style.filter = '';
    });
  });
}

function setupForm() {
  const sendBtn = document.getElementById('send');
  if (!sendBtn) return;

  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('f-name')?.value.trim();
    const msg = document.getElementById('f-msg')?.value.trim();
    const err = document.getElementById('err');
    if (!name || !msg) {
      if (err) err.textContent = T[lang]['form.err'];
      return;
    }
    if (err) err.textContent = '';

    const sector = document.getElementById('f-sector');
    const company = document.getElementById('f-co')?.value.trim();
    const phone = document.getElementById('f-phone')?.value.trim();
    const selected = sector && sector.options[sector.selectedIndex] ? sector.options[sector.selectedIndex].textContent : '';

    const dict = T[lang];
    const lines = [dict['form.wa.greeting'], dict['form.wa.name'] + ' ' + name];
    if (company) lines.push(dict['form.wa.company'] + ' ' + company);
    if (phone) lines.push(dict['form.wa.phone'] + ' ' + phone);
    if (selected) lines.push(dict['form.wa.sector'] + ' ' + selected);
    lines.push('', msg);
    window.open(waLink(lines.join('\n')), '_blank', 'noopener');
  });
}

applyLang();
paintThemeIcon();
initMotion();
setupForm();
