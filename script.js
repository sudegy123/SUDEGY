// =============================
//  سكربت الصفحة الرئيسية SudEgy
// =============================

// --- عدّاد التجارة الحديث ---
let tradeValue = 1465344000;                 // الرقم الابتدائي
const tradeIncreasePerSecond = 53;           // الزيادة في الثانية (قابلة للتعديل)

const counterElement = document.getElementById("counter-value");
const tradeDateElement = document.getElementById("trade-date");

// تحديث الرقم كل ثانية
function updateTradeCounter() {
  tradeValue += tradeIncreasePerSecond;
  if (counterElement) {
    counterElement.textContent = tradeValue.toLocaleString();
  }
}

if (counterElement) {
  // أول مرة
  counterElement.textContent = tradeValue.toLocaleString();
  // تكرار
  setInterval(updateTradeCounter, 1000);
}

// ضبط التاريخ بالعربي
if (tradeDateElement) {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  tradeDateElement.textContent = "بتاريخ: " + today.toLocaleDateString('ar-EG', options);
}

// --- منتجات تجريبية مع تفاصيل ---
// --- منتجات تجريبية مع تفاصيل (20 منتج) ---
const products = [
  {
    id: 1,
    name: "سكر أبيض معبأ",
    price: "12,500 جنيه / طن",
    image: "images/سكر.jpg",
    category: "الزراعة والأغذية",
    seller: "شركة وادي النيل",
    location: "القاهرة - مصر",
    minOrder: "20 طن",
    shipping: "إلى السودان خلال 5-7 أيام عمل"
  },
  {
    id: 2,
    name: "أسمنت مقاوم للملوحة",
    price: "5,700 جنيه / طن",
    image: "images/اسمنت.jpg",
    category: "مواد البناء",
    seller: "مصانع النيل للأسمنت",
    location: "عطبرة - السودان",
    minOrder: "30 طن",
    shipping: "إلى مصر خلال 7-10 أيام"
  },
  {
    id: 3,
    name: "تمور سودانية فاخرة",
    price: "22,000 جنيه / طن",
    image: "images/تمور.jpg",
    category: "الزراعة والأغذية",
    seller: "مزارع الجزيرة للتمور",
    location: "الجزيرة - السودان",
    minOrder: "5 طن",
    shipping: "تصدير مباشر إلى مصر"
  },
  {
    id: 4,
    name: "عسل نحل طبيعي",
    price: "30,000 جنيه / طن",
    image: "images/عسل.jpg",
    category: "الزراعة والأغذية",
    seller: "شركة وادي النحل",
    location: "أسوان - مصر",
    minOrder: "500 كجم",
    shipping: "شحن مبرد إلى السودان"
  },
  {
    id: 5,
    name: "حديد تسليح",
    price: "45,000 جنيه / طن",
    image: "images/حديد.jpg",
    category: "مواد البناء",
    seller: "مجموعة النور للحديد",
    location: "الخرطوم - السودان",
    minOrder: "50 طن",
    shipping: "اتفاق حسب العقد"
  },
  {
    id: 6,
    name: "زيت طعام نباتي",
    price: "18,000 جنيه / طن",
    image: "images/زيت.jpg",
    category: "الزراعة والأغذية",
    seller: "مصانع النيل للزيوت",
    location: "القاهرة - مصر",
    minOrder: "10 طن",
    shipping: "شحن بري إلى السودان"
  },
  {
    id: 7,
    name: "كركدي مجفف",
    price: "16,000 جنيه / طن",
    image: "images/كركدي.jpg",
    category: "الزراعة والأغذية",
    seller: "شركة زهرة السودان",
    location: "الأبيض - السودان",
    minOrder: "3 طن",
    shipping: "تصدير إلى مصر مباشرة"
  },
  {
    id: 8,
    name: "لحوم مبردة",
    price: "60,000 جنيه / طن",
    image: "images/لحم.jpg",
    category: "الزراعة والأغذية",
    seller: "مسلخ النيلين",
    location: "الخرطوم - السودان",
    minOrder: "2 طن",
    shipping: "شحن مبرد للسوق المصري"
  },
  {
    id: 9,
    name: "خدمة شحن وتخليص",
    price: "حسب الاتفاق",
    image: "images/شحن.jpg",
    category: "الخدمات اللوجستية",
    seller: "SudEgy Logistics",
    location: "مصر / السودان",
    minOrder: "حسب الحمولة",
    shipping: "خدمة شاملة باب لباب"
  },
  {
    id: 10,
    name: "دقيق قمح فاخر",
    price: "14,500 جنيه / طن",
    image: "images/سكر.jpg",
    category: "الزراعة والأغذية",
    seller: "مطاحن النيل الكبرى",
    location: "القاهرة - مصر",
    minOrder: "15 طن",
    shipping: "إلى السودان برياً"
  },
  {
    id: 11,
    name: "سيراميك أرضيات",
    price: "75,000 جنيه / حاوية 20 قدم",
    image: "images/اسمنت.jpg",
    category: "مواد البناء",
    seller: "شركة الوادي للسيراميك",
    location: "طنطا - مصر",
    minOrder: "حاوية كاملة",
    shipping: "بحري / بري حسب الطلب"
  },
  {
    id: 12,
    name: "أسلاك كهرباء نحاس",
    price: "25,000 جنيه / طن",
    image: "images/حديد.jpg",
    category: "المعدات الصناعية",
    seller: "شركة النور للكهرباء",
    location: "الكويتية الصناعية - الخرطوم",
    minOrder: "5 طن",
    shipping: "إلى مصر والسودان"
  },
  {
    id: 13,
    name: "مناديل صحية معبأة",
    price: "9,000 جنيه / طن",
    image: "images/زيت.jpg",
    category: "منتجات يومية",
    seller: "مصنع الرشيد",
    location: "الجيزة - مصر",
    minOrder: "5 طن",
    shipping: "إلى السودان خلال 10 أيام"
  },
  {
    id: 14,
    name: "أدوات مطبخ من الستانلس",
    price: "حسب المنتج",
    image: "images/عسل.jpg",
    category: "منتجات يومية",
    seller: "شركة البيت العصري",
    location: "القاهرة - مصر",
    minOrder: "100 كرتونة",
    shipping: "تصدير للسودان / مصر"
  },
  {
    id: 15,
    name: "معدات ري محوري",
    price: "حسب المشروع",
    image: "images/كركدي.jpg",
    category: "المعدات الزراعية",
    seller: "تقنيات المزارع الحديثة",
    location: "مدني - السودان",
    minOrder: "نظام واحد",
    shipping: "تركيب في الموقع"
  },
  {
    id: 16,
    name: "بذور قمح ومحاصيل",
    price: "حسب الكمية",
    image: "images/تمور.jpg",
    category: "الزراعة والأغذية",
    seller: "شركة البذور العربية",
    location: "القاهرة - مصر",
    minOrder: "1 طن",
    shipping: "شحن مبرد إلى السودان"
  },
  {
    id: 17,
    name: "معدات طبية أساسية",
    price: "حسب القائمة",
    image: "images/شحن.jpg",
    category: "معدات طبية",
    seller: "ميديكال كير",
    location: "القاهرة - مصر",
    minOrder: "طلبية بـ 50,000 جنيه",
    shipping: "إلى السودان خلال 14 يوم"
  },
  {
    id: 18,
    name: "كمامات طبية معبأة",
    price: "2,500 جنيه / كرتونة 1000 قطعة",
    image: "images/سكر.jpg",
    category: "معدات طبية",
    seller: "ميديكال ماسك",
    location: "بورسعيد - مصر",
    minOrder: "50 كرتونة",
    shipping: "تصدير للسودان"
  },
  {
    id: 19,
    name: "معدات ورش صناعية",
    price: "حسب التجهيز",
    image: "images/حديد.jpg",
    category: "معدات صناعية",
    seller: "ورشة المستقبل",
    location: "أم درمان - السودان",
    minOrder: "حسب المشروع",
    shipping: "تجهيز كامل للمصانع والورش"
  },
  {
    id: 20,
    name: "عبوات بلاستيكية للتعبئة",
    price: "حسب المقاس والكمية",
    image: "images/زيت.jpg",
    category: "مواد تعبئة وتغليف",
    seller: "شركة باك إيجي",
    location: "القاهرة - مصر",
    minOrder: "10,000 قطعة",
    shipping: "إلى السودان / الداخل المصري"
  }
];

// --- السلايدر (9 منتجات تتغير كل 3 ثواني) ---
// --- بنر المنتجات الدائرية (7 منتجات فقط) ---
const slider = document.getElementById("featured-slider");

function loadFeaturedCircles() {
  if (!slider) return;

  slider.innerHTML = "";

  // أول 7 منتجات من المصفوفة
  const featured = products.slice(0, 7);

  featured.forEach(p => {
    const item = document.createElement("div");
    item.className = "slider-item";

    item.innerHTML = `
      <div class="slider-circle">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="slider-item-title">${p.name}</div>
    `;

    // الضغط على الدائرة يفتح صفحة تفاصيل المنتج
    item.addEventListener("click", () => {
      window.location.href = `product-details.html?id=${p.id}`;
    });

    slider.appendChild(item);
  });
}


// --- بنر المنتجات الدائرية (7 منتجات فقط) ---



function loadFeaturedCircles() {
  if (!slider) return;

  slider.innerHTML = "";

  // نختار أول 7 منتجات من المصفوفة
  const featured = products.slice(0, 7);

  featured.forEach((p) => {
    const item = document.createElement("div");
    item.className = "slider-item";

    item.innerHTML = `
      <div class="slider-circle">
        <img src="${p.image}" alt="${p.name}" />
      </div>
      <div class="slider-item-title">${p.name}</div>
    `;

    // الضغط على الدائرة يفتح صفحة تفاصيل المنتج
    item.addEventListener("click", () => {
      window.location.href = `product-details.html?id=${p.id}`;
    });

    slider.appendChild(item);
  });
}

// استدعاء مرة واحدة فقط (بنر ثابت)
loadFeaturedCircles();


// استدعاء مرة واحدة فقط (بنر ثابت)
loadFeaturedCircles();


// --- شبكة المنتجات ككروت عصرية ---
const grid = document.getElementById("product-grid");

function loadProductGrid() {
  if (!grid) return;

  grid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img" />

      <div class="flex items-center justify-between mb-1">
        <span class="product-badge">${p.category}</span>
        <span class="text-[0.65rem] text-gray-400">#${p.id.toString().padStart(3, "0")}</span>
      </div>

      <div class="product-name">${p.name}</div>
      <div class="product-price">${p.price}</div>

      <div class="product-meta mt-1">
        <span>👤 التاجر: ${p.seller}</span>
        <span>📍 الموقع: ${p.location}</span>
        <span>📦 أقل طلب: ${p.minOrder}</span>
        <span>🚚 الشحن: ${p.shipping}</span>
      </div>

      <div class="product-actions">
        <button class="btn-details">عرض التفاصيل</button>
        <button class="btn-message">تواصل عبر الرسائل</button>
      </div>
    `;

    // الضغط على الكرت كله يفتح صفحة المنتج
    card.addEventListener("click", () => {
      window.location.href = `product-details.html?id=${p.id}`;
    });

    // زر عرض التفاصيل (يوقف انتشار الحدث عشان ما يتكرر)
    const detailsBtn = card.querySelector(".btn-details");
    detailsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.location.href = `product-details.html?id=${p.id}`;
    });

    // زر الرسائل
    const messageBtn = card.querySelector(".btn-message");
    messageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      // تقدر لاحقاً تستخدم ID حقيقي للتاجر
      const encodedSeller = encodeURIComponent(p.seller);
      window.location.href = `messages.html?to=${encodedSeller}&product=${p.id}`;
    });

    grid.appendChild(card);
  });
}

loadProductGrid();


const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    const keyword = (searchInput?.value || "").trim();

    if (!keyword) {
      alert("برجاء كتابة كلمة للبحث");
      return;
    }

    alert("ميزة البحث قيد التطوير — سيتم ربطها قريباً 🔍");
  });
}
// نصوص البانر المتغيرة
const promoMessages = [
  "SudEgy تربط التاجر السوداني بالمورد المصري في منصة واحدة آمنة وموثوقة.",
  "أضف منتجك مجاناً في المرحلة التجريبية وابدأ في استقبال الطلبات من البلدين.",
  "دعم كامل للسلع الزراعية، الصناعية، الغذائية، وقطاع المقاولات والخدمات اللوجستية.",
  "محادثات مباشرة بين التاجر والمورد داخل المنصة لتسهيل التفاوض وإغلاق الصفقات."
];

let promoIndex = 0;
const promoElement = document.getElementById("promo-text");

// تغيير النص كل 3 ثواني
setInterval(() => {
  promoIndex = (promoIndex + 1) % promoMessages.length;
  promoElement.style.opacity = 0;

  setTimeout(() => {
    promoElement.textContent = promoMessages[promoIndex];
    promoElement.style.opacity = 1;
  }, 300);

}, 3000);


// =============================
//   جاهز 100% للاستخدام
// =============================
console.log("script.js Loaded Successfully ✔️");
/* === Append Firestore products only (does NOT touch existing DOM cards) ===
   Paste this at the END of script.js (after existing code) or in a new <script> after script.js.
*/

async function appendFirestoreProductsOnly() {
  // تأكد أن Firebase مُهيأ
  if (!window.firebase || !firebase.firestore) {
    console.warn("Firebase غير متوفر - لن يتم جلب منتجات Firestore.");
    return;
  }

  const target = document.getElementById("firestore-products");
  if (!target) {
    console.warn("عنصر #firestore-products غير موجود في الصفحة.");
    return;
  }

  try {
    // جلب المستندات
    const snap = await firebase.firestore().collection("products").limit(200).get();

    if (snap.empty) {
      // ما في منتجات جديدة
      console.info("لا توجد منتجات في Firestore.");
      return;
    }

    // اجمع أسماء المنتجات الموجودة حاليًا في الـ DOM الأصلي لمنع التكرار
    // نقرأ عناوين العناصر الأصلية (لو ظاهر فيها عناصر .product-title)
    const existingNames = new Set();
    document.querySelectorAll('#product-grid .product-title, #product-row .product-title, .product-card .product-title').forEach(el=>{
      const t = (el.textContent || "").trim().toLowerCase();
      if (t) existingNames.add(t);
    });

    // أيضاً سجّل أسماء أي منتجات أضفتها مسبقًا داخل firestore-products لتفادي الازدواج
    document.querySelectorAll('#firestore-products .product-title').forEach(el=>{
      const t = (el.textContent || "").trim().toLowerCase();
      if (t) existingNames.add(t);
    });

    // Loop over Firestore docs وضمهم فقط لو مش مكرّرين
    snap.forEach(doc => {
      const d = doc.data();
      const pname = ((d.name || d.title || "") + "").trim().toLowerCase();

      if (pname && existingNames.has(pname)) {
        // سبق وجوده في المنتجات الأصلية أو أُضيف سابقاً — نتجاهل
        return;
      }

      // إنشاء كرت منتج بسيط ومتناسق
      const card = document.createElement("div");
      card.className = "product-card";
      card.style.minWidth = "200px"; // بسيط عشان يظهر مرتب داخل الشبكة
      card.innerHTML = `
        <img src="${(d.image || d.imageUrl || 'images/default-product.jpg')}" 
             alt="${(d.name || '')}" style="width:100%;height:150px;object-fit:cover;border-radius:6px;">
        <div style="margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <small style="background:#f3f4f6;padding:4px 8px;border-radius:6px;font-size:12px;">${(d.category || '')}</small>
          <small style="color:#6b7280;font-size:12px;">#${doc.id.slice(0,6)}</small>
        </div>
        <h3 class="product-title" style="margin:8px 0 4px;font-weight:600;">${(d.name || 'منتج')}</h3>
        <div style="font-weight:700;color:#E8491D;">${(d.price || '')}</div>
        <div style="margin-top:8px;font-size:13px;color:#374151;">
          <div>👤 ${(d.ownerEmail || d.owner || d.sellerName || 'تاجر')}</div>
          <div>📍 ${(d.origin || d.location || '')}</div>
        </div>
        <div style="display:flex;gap:8px;margin-top:10px;">
          <button class="btn-details" style="flex:1;padding:8px;border-radius:6px;border:1px solid #e5e7eb;background:white;">عرض التفاصيل</button>
          <button class="btn-message" style="flex:1;padding:8px;border-radius:6px;border:0;background:#F97316;color:white;">تواصل</button>
        </div>
      `;

      // أزرار تفاعلية — نفس سلوك الموقع
      const detailsBtn = card.querySelector('.btn-details');
      detailsBtn.addEventListener('click', () => {
        window.location.href = `product-details.html?id=${encodeURIComponent(doc.id)}`;
      });

      const messageBtn = card.querySelector('.btn-message');
      messageBtn.addEventListener('click', () => {
        const to = encodeURIComponent(d.owner || d.ownerEmail || '');
        window.location.href = `messages.html?to=${to}&product=${encodeURIComponent(doc.id)}`;
      });

      // اضف الكرت داخل حاوية firestore-products
      target.appendChild(card);

      // علامات لمنع تكرار مستقبلية
      if (pname) existingNames.add(pname);
    });

    console.info("تمت إضافة منتجات Firestore داخل #firestore-products بنجاح.");
  } catch (err) {
    console.error("حدث خطأ عند جلب أو إضافة منتجات Firestore:", err);
  }
}

// نفّذ الدالة بعد التحميل (آمن)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', appendFirestoreProductsOnly);
} else {
  appendFirestoreProductsOnly();
}
