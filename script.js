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
/* =============================
 /* =============================
   script.js — SudEgy (auto-retry Firestore)
   - Appends Firestore products FIRST (above original grid)
   - Does NOT modify original products/cards
   - Retries until firebase is ready (limited attempts)
   ============================= */

/* ---------- Helpers: escape HTML ---------- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* --------------------------
   1) Preserve original UI behaviors (smooth anchors / promo rotation / counter)
   -------------------------- */
/* Smooth anchors */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* Promo rotation (safe if element absent) */
(function setupPromoRotation() {
  const promoMessages = [
    "SudEgy تربط التاجر السوداني بالمورد المصري في منصة واحدة آمنة وموثوقة.",
    "أضف منتجك مجاناً في المرحلة التجريبية وابدأ في استقبال الطلبات.",
    "دعم كامل للسلع الزراعية، الصناعية، الغذائية، واللوجستيات.",
    "محادثات مباشرة بين التاجر والمورد داخل المنصة."
  ];
  const promoElement = document.getElementById("promo-text");
  if (!promoElement) return;
  let promoIndex = 0;
  setInterval(() => {
    promoIndex = (promoIndex + 1) % promoMessages.length;
    promoElement.style.opacity = 0;
    setTimeout(() => {
      promoElement.textContent = promoMessages[promoIndex];
      promoElement.style.opacity = 1;
    }, 300);
  }, 3000);
})();

/* Trade counter (keeps original behavior if element exists) */
(function setupTradeCounter() {
  const counterElement = document.getElementById("counter-value");
  const tradeDateElement = document.getElementById("trade-date");
  if (!counterElement && !tradeDateElement) return;

  let tradeValue = 1465344000;
  const tradeIncreasePerSecond = 53;

  function updateTradeCounter() {
    tradeValue += tradeIncreasePerSecond;
    if (counterElement) counterElement.textContent = tradeValue.toLocaleString();
  }

  if (counterElement) {
    counterElement.textContent = tradeValue.toLocaleString();
    setInterval(updateTradeCounter, 1000);
  }
  if (tradeDateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    tradeDateElement.textContent = "بتاريخ: " + today.toLocaleDateString('ar-EG', options);
  }
})();

/* --------------------------
   2) Safe loadProductGrid: do NOT wipe existing DOM cards
   - If #product-grid already has children, keep them as-is
   - Else, render from local products array (if provided)
   -------------------------- */
function loadProductGridSafe(productsArray) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  // If grid already contains children (static HTML or earlier render), do not overwrite
  if (grid.children && grid.children.length > 0) {
    console.log("loadProductGridSafe: found existing DOM children in #product-grid — preserving them.");
    return;
  }

  // If no products array provided or empty, show fallback message
  if (!Array.isArray(productsArray) || productsArray.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center py-6 text-gray-500">لا توجد منتجات متاحة حالياً.</div>';
    return;
  }

  // Build cards from array (this matches original style minimally)
  grid.innerHTML = "";
  productsArray.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${escapeHtml(p.image || 'images/default-product.jpg')}" alt="${escapeHtml(p.name || '')}" class="product-img"/>
      <div class="flex items-center justify-between mb-1">
        <span class="product-badge">${escapeHtml(p.category || '')}</span>
        <span class="text-[0.65rem] text-gray-400">#${escapeHtml(String(p.id || '').slice(0,6))}</span>
      </div>
      <div class="product-name">${escapeHtml(p.name || '')}</div>
      <div class="product-price">${escapeHtml(p.price || '')}</div>
      <div class="product-meta mt-1">
        <span>👤 ${escapeHtml(p.seller || '')}</span>
        <span>📍 ${escapeHtml(p.location || '')}</span>
      </div>
      <div class="product-actions">
        <button class="btn-details">عرض التفاصيل</button>
        <button class="btn-message">تواصل</button>
      </div>
    `;
    // Events
    const detailsBtn = card.querySelector(".btn-details");
    if (detailsBtn) detailsBtn.addEventListener("click", e => { e.stopPropagation(); window.location.href = `product-details.html?id=${encodeURIComponent(p.id)}`; });
    const messageBtn = card.querySelector(".btn-message");
    if (messageBtn) messageBtn.addEventListener("click", e => { e.stopPropagation(); window.location.href = `messages.html?to=${encodeURIComponent(p.seller||'')}&product=${encodeURIComponent(p.id)}`; });
    card.addEventListener("click", () => { window.location.href = `product-details.html?id=${encodeURIComponent(p.id)}`; });
    grid.appendChild(card);
  });
}

/* --------------------------
   3) Append Firestore products FIRST (above original grid)
   - Creates #firestore-products if missing and inserts before original grid
   - Uses retries to wait for firebase initialization
   -------------------------- */

// استبدل الدالة appendFirestoreProductsToTop الحالية بهذه النسخة
async function appendFirestoreProductsToTop() {
  try {
    if (!window.firebase || !firebase.firestore) {
      console.warn("appendFirestoreProductsToTop: Firebase not ready.");
      return false;
    }

    const FETCH_LIMIT = 200;
    const originalGrid = document.getElementById("product-grid") || document.getElementById("product-row");

    // ensure top container exists (insert before original grid)
    let topContainer = document.getElementById("firestore-products");
    if (!topContainer) {
      topContainer = document.createElement("div");
      topContainer.id = "firestore-products";
      topContainer.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6";
      if (originalGrid && originalGrid.parentNode) {
        originalGrid.parentNode.insertBefore(topContainer, originalGrid);
      } else {
        document.body.insertBefore(topContainer, document.body.firstChild);
      }
    }

    // collect existing product names to prevent duplicates
    const existingNames = new Set();
    document.querySelectorAll('#product-grid .product-name, #product-row .product-name, .product-card .product-name, .product-title').forEach(el => {
      const name = (el.textContent || '').trim().toLowerCase();
      if (name) existingNames.add(name);
    });
    document.querySelectorAll('#firestore-products .product-name, #firestore-products .product-title').forEach(el => {
      const name = (el.textContent || '').trim().toLowerCase();
      if (name) existingNames.add(name);
    });

    const snap = await firebase.firestore().collection("products").limit(FETCH_LIMIT).get();
    if (snap.empty) {
      console.info("appendFirestoreProductsToTop: no products in Firestore.");
      return true;
    }

    // placeholder svg if no image
    const svgPlaceholder = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='20'>No Image</text></svg>`);

    snap.forEach(doc => {
      const d = doc.data();
      const pname = ((d.name || d.title || '') + '').trim().toLowerCase();
      if (pname && existingNames.has(pname)) return; // skip duplicates

      // create card element using same structure/classes as original
      const card = document.createElement('div');
      card.className = 'product-card';

      const imgUrl = (d.image || d.imageUrl || '').trim() || svgPlaceholder;
      const displayName = d.name || d.title || 'منتج';
      const displayPrice = d.price || d.priceText || '';
      const displayCategory = d.category || '';
      const displaySeller = d.ownerEmail || d.owner || d.sellerName || '';
      const displayLocation = d.origin || d.location || '';

      card.innerHTML = `
        <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(displayName)}" class="product-img" onerror="this.onerror=null;this.src='${svgPlaceholder}';" />
        <div class="meta-top">
          <span class="badge">${escapeHtml(displayCategory)}</span>
          <span class="id-tag">#${escapeHtml(String(doc.id).slice(0,6))}</span>
        </div>
        <div class="product-title">${escapeHtml(displayName)}</div>
        <div class="product-price">${escapeHtml(displayPrice)}</div>
        <div class="product-meta">
          <div class="meta-row">👤 ${escapeHtml(displaySeller)}</div>
          <div class="meta-row">📍 ${escapeHtml(displayLocation)}</div>
        </div>
        <div class="actions">
          <button class="btn-contact">تواصل</button>
          <button class="btn-details">عرض التفاصيل</button>
        </div>
      `;

      // events: details & contact
      const detailsBtn = card.querySelector('.btn-details');
      const contactBtn = card.querySelector('.btn-contact');

      if (detailsBtn) {
        detailsBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          window.location.href = `product-details.html?id=${encodeURIComponent(doc.id)}`;
        });
      }
      if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const to = encodeURIComponent(d.owner || d.ownerEmail || '');
          window.location.href = `messages.html?to=${to}&product=${encodeURIComponent(doc.id)}`;
        });
      }

      card.addEventListener('click', () => {
        window.location.href = `product-details.html?id=${encodeURIComponent(doc.id)}`;
      });

      topContainer.appendChild(card);
      if (pname) existingNames.add(pname);
    });

    console.info("appendFirestoreProductsToTop: added Firestore items successfully (styled).");
    return true;

  } catch (err) {
    console.error("appendFirestoreProductsToTop error:", err);
    return false;
  }
}

/* --------------------------
   4) Retry logic until firebase ready (max tries)
   -------------------------- */
function tryAppendWithRetry(opts = {}) {
  const maxAttempts = opts.maxAttempts || 15;
  const baseDelay = opts.baseDelay || 500; // ms
  let attempt = 0;

  return new Promise(resolve => {
    const timer = setInterval(async () => {
      attempt++;
      if (window.firebase && firebase.firestore) {
        clearInterval(timer);
        const ok = await appendFirestoreProductsToTop();
        resolve(ok);
        return;
      }
      if (attempt >= maxAttempts) {
        clearInterval(timer);
        console.warn("tryAppendWithRetry: firebase not available after attempts");
        resolve(false);
      } else {
        // exponential-ish wait (increase slightly)
        // nothing else to do; will retry automatically
      }
    }, baseDelay + attempt * 200);
  });
}

/* --------------------------
   5) Init flow: try append first, then load local grid if needed
   -------------------------- */
async function initProductsFlow() {
  // Attempt to append Firestore products with retries
  await tryAppendWithRetry({ maxAttempts: 15, baseDelay: 400 });

  // After attempting Firestore, load local grid safely (if grid empty)
  // If you have a JS array of local products named `products` in the old script, pass it here:
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    loadProductGridSafe(products);
  } else {
    // call safe loader with empty (will show fallback if grid empty)
    loadProductGridSafe([]);
  }
}

/* --------------------------
   Run on DOM ready
   -------------------------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductsFlow);
} else {
  initProductsFlow();
}

/* =============================
   End of file
   ============================= */
