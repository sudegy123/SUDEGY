// =============================
//  Sudegy - script.js (READY)
// =============================

// ----------- عداد التجارة -----------
let tradeValue = 1465344000;
const tradeIncreasePerSecond = 53;

const counterElement = document.getElementById("counter-value");
const tradeDateElement = document.getElementById("trade-date");

if (counterElement) {
  counterElement.textContent = tradeValue.toLocaleString("ar-EG");
  setInterval(() => {
    tradeValue += tradeIncreasePerSecond;
    counterElement.textContent = tradeValue.toLocaleString("ar-EG");
  }, 1000);
  
}

if (tradeDateElement) {
  const today = new Date();
  tradeDateElement.textContent =
    "بتاريخ: " + today.toLocaleDateString("ar-EG");
}

// ----------- بيانات منتجات تجريبية -----------
const products = [
  {
 // =============================
//  PRODUCTS DATA (20 DEMO)
// =============================
const demoProducts = [
  { id: 1, name: "سكر أبيض معبأ", price: "12,500 جنيه / طن", image: "images/سكر.jpg", category: "زراعة وأغذية", seller: "شركة وادي النيل", location: "القاهرة - مصر", minOrder: "20 طن", shipping: "إلى السودان خلال 5-7 أيام", verified: true },
  { id: 2, name: "أسمنت مقاوم للملوحة", price: "5,700 جنيه / طن", image: "images/اسمنت.jpg", category: "مواد بناء", seller: "مصانع النيل", location: "عطبرة - السودان", minOrder: "30 طن", shipping: "إلى مصر خلال 7-10 أيام", verified: false },
  { id: 3, name: "تمور سودانية فاخرة", price: "22,000 جنيه / طن", image: "images/تمور.jpg", category: "زراعة وأغذية", seller: "مزارع الجزيرة", location: "الجزيرة - السودان", minOrder: "5 طن", shipping: "تصدير مباشر", verified: true },
  { id: 4, name: "عسل نحل طبيعي", price: "30,000 جنيه / طن", image: "images/عسل.jpg", category: "زراعة وأغذية", seller: "وادي النحل", location: "أسوان - مصر", minOrder: "500 كجم", shipping: "شحن مبرد", verified: true },
  { id: 5, name: "حديد تسليح", price: "45,000 جنيه / طن", image: "images/حديد.jpg", category: "مواد بناء", seller: "النور للحديد", location: "الخرطوم - السودان", minOrder: "50 طن", shipping: "حسب العقد", verified: false },
  { id: 6, name: "زيت طعام نباتي", price: "18,000 جنيه / طن", image: "images/زيت.jpg", category: "زراعة وأغذية", seller: "مصانع النيل للزيوت", location: "القاهرة - مصر", minOrder: "10 طن", shipping: "بري", verified: true },
  { id: 7, name: "كركدي مجفف", price: "16,000 جنيه / طن", image: "images/كركدي.jpg", category: "زراعة وأغذية", seller: "زهرة السودان", location: "الأبيض - السودان", minOrder: "3 طن", shipping: "تصدير", verified: true },
  { id: 8, name: "لحوم مبردة", price: "60,000 جنيه / طن", image: "images/لحم.jpg", category: "زراعة وأغذية", seller: "مسلخ النيلين", location: "الخرطوم", minOrder: "2 طن", shipping: "مبرد", verified: true },
  { id: 9, name: "خدمة شحن", price: "حسب الاتفاق", image: "images/شحن.jpg", category: "خدمات لوجستية", seller: "Sudegy Logistics", location: "مصر / السودان", minOrder: "حسب الحمولة", shipping: "باب لباب", verified: true },
  { id: 10, name: "دقيق قمح فاخر", price: "14,500 جنيه / طن", image: "images/سكر.jpg", category: "زراعة وأغذية", seller: "مطاحن النيل", location: "القاهرة", minOrder: "15 طن", shipping: "بري", verified: true },
  { id: 11, name: "سيراميك أرضيات", price: "75,000 جنيه / حاوية", image: "images/اسمنت.jpg", category: "مواد بناء", seller: "الوادي للسيراميك", location: "طنطا", minOrder: "حاوية", shipping: "بحري", verified: false },
  { id: 12, name: "أسلاك كهرباء نحاس", price: "25,000 جنيه / طن", image: "images/حديد.jpg", category: "معدات صناعية", seller: "النور للكهرباء", location: "الخرطوم", minOrder: "5 طن", shipping: "بري", verified: true },
  { id: 13, name: "مناديل صحية", price: "9,000 جنيه / طن", image: "images/زيت.jpg", category: "منتجات يومية", seller: "مصنع الرشيد", location: "الجيزة", minOrder: "5 طن", shipping: "بري", verified: false },
  { id: 14, name: "أدوات مطبخ ستانلس", price: "حسب المنتج", image: "images/عسل.jpg", category: "منتجات يومية", seller: "البيت العصري", location: "القاهرة", minOrder: "100 كرتونة", shipping: "تصدير", verified: true },
  { id: 15, name: "معدات ري محوري", price: "حسب المشروع", image: "images/كركدي.jpg", category: "معدات زراعية", seller: "تقنيات المزارع", location: "مدني", minOrder: "نظام واحد", shipping: "تركيب", verified: true },
  { id: 16, name: "بذور قمح", price: "حسب الكمية", image: "images/تمور.jpg", category: "زراعة وأغذية", seller: "البذور العربية", location: "القاهرة", minOrder: "1 طن", shipping: "مبرد", verified: true },
  { id: 17, name: "معدات طبية", price: "حسب القائمة", image: "images/شحن.jpg", category: "معدات طبية", seller: "Medical Care", location: "القاهرة", minOrder: "50,000 جنيه", shipping: "14 يوم", verified: true },
  { id: 18, name: "كمامات طبية", price: "2,500 جنيه / كرتونة", image: "images/سكر.jpg", category: "معدات طبية", seller: "Medical Mask", location: "بورسعيد", minOrder: "50 كرتونة", shipping: "تصدير", verified: true },
  { id: 19, name: "معدات ورش", price: "حسب التجهيز", image: "images/حديد.jpg", category: "معدات صناعية", seller: "ورشة المستقبل", location: "أم درمان", minOrder: "حسب المشروع", shipping: "كامل", verified: false },
  { id: 20, name: "عبوات بلاستيكية", price: "حسب الكمية", image: "images/زيت.jpg", category: "تعبئة وتغليف", seller: "Pack Egypt", location: "القاهرة", minOrder: "10,000 قطعة", shipping: "بري", verified: true }
];

// =============================
//  RENDER PRODUCT CARD
// =============================
function renderProductCard(p, fromUser = false) {
  return `
  <div class="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col">
    <div class="relative">
      <img src="${p.image || 'images/default-product.jpg'}" class="w-full h-40 object-cover rounded-t-xl">
      ${p.verified ? `<span class="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">موثوق</span>` : ""}
      ${fromUser ? `<span class="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">إضافة مستخدم</span>` : ""}
    </div>
    <div class="p-3 flex flex-col flex-grow">
      <h3 class="font-bold text-sm mb-1">${p.name}</h3>
      <p class="text-orange-600 font-semibold text-sm mb-1">${p.price}</p>
      <p class="text-xs text-gray-500 mb-2">📍 ${p.location}</p>
      <div class="mt-auto flex gap-2">
        <a href="product-details.html?id=${p.id}" class="flex-1 text-center border border-orange-500 text-orange-600 text-xs py-2 rounded">التفاصيل</a>
        <a href="messages.html?to=${encodeURIComponent(p.seller)}&product=${p.id}" class="flex-1 text-center bg-orange-500 text-white text-xs py-2 rounded">تواصل</a>
      </div>
    </div>
  </div>`;
}

// =============================
//  LOAD ALL PRODUCTS
// =============================
async function loadAllProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  /* 1️⃣ منتجات المستخدمين (Firestore) */
  if (window.firebase && firebase.firestore) {
    const snap = await firebase.firestore().collection("products").get();
    snap.forEach(doc => {
      const p = doc.data();
      p.id = doc.id;
      grid.innerHTML += renderProductCard(p, true);
    });
  }

  /* 2️⃣ منتجات الأمثلة (20) */
  demoProducts.forEach(p => {
    grid.innerHTML += renderProductCard(p, false);
  });
}

// =============================
loadAllProducts();


// ----------- شبكة المنتجات (كروت محسّنة) -----------
const grid = document.getElementById("product-grid");

function loadProductGrid() {
  if (!grid) return;
  grid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col cursor-pointer";

    card.innerHTML = `
      <div class="relative">
        <img src="${p.image}" class="w-full h-40 object-cover rounded-t-xl">
        ${
          p.verified
            ? `<span class="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                مورد موثوق
               </span>`
            : ""
        }
      </div>

      <div class="p-3 flex flex-col flex-grow">
        <span class="text-xs text-gray-400 mb-1">${p.category}</span>

        <h3 class="font-bold text-sm mb-1 line-clamp-2">${p.name}</h3>

        <p class="text-orange-600 font-semibold text-sm mb-2">${p.price}</p>

        <div class="text-xs text-gray-500 space-y-1 mb-3">
          <div>👤 ${p.seller}</div>
          <div>📍 ${p.location}</div>
          <div>📦 أقل طلب: ${p.minOrder}</div>
        </div>

        <div class="mt-auto flex gap-2">
          <a href="product-details.html?id=${p.id}"
             class="flex-1 text-center border border-orange-500 text-orange-600 text-xs py-2 rounded hover:bg-orange-50">
             التفاصيل
          </a>

          <a href="messages.html?to=${encodeURIComponent(p.seller)}&product=${p.id}"
             class="flex-1 text-center bg-orange-500 text-white text-xs py-2 rounded hover:bg-orange-600">
             تواصل
          </a>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `product-details.html?id=${p.id}`;
    });

    grid.appendChild(card);
  });
}

loadProductGrid();

// ----------- البحث -----------
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

if (searchButton) {
  searchButton.addEventListener("click", () => {
    if (!searchInput.value.trim()) {
      alert("اكتب كلمة للبحث");
      return;
    }
    window.location.href = `products.html?search=${encodeURIComponent(
      searchInput.value
    )}`;
  });
}

// =============================
//  انتهى — جاهز 100%
// =============================
