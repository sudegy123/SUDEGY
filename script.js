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
    id: 1,
    name: "سكر أبيض معبأ",
    price: "12,500 جنيه / طن",
    image: "images/سكر.jpg",
    category: "زراعة وأغذية",
    seller: "شركة وادي النيل",
    location: "القاهرة - مصر",
    minOrder: "20 طن",
    shipping: "إلى السودان خلال 5-7 أيام",
    verified: true
  },
  {
    id: 2,
    name: "أسمنت مقاوم للملوحة",
    price: "5,700 جنيه / طن",
    image: "images/اسمنت.jpg",
    category: "مواد بناء",
    seller: "مصانع النيل",
    location: "عطبرة - السودان",
    minOrder: "30 طن",
    shipping: "إلى مصر خلال 7-10 أيام",
    verified: false
  }
];

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
