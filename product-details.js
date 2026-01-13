// =============================
//  product-details.js
// =============================

// منتجات تجريبية (نفس مصفوفة الرئيسية)
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
    description: "سكر أبيض عالي الجودة مناسب للتصدير والتجارة بالجملة.",
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
    description: "أسمنت مخصص للمشاريع الكبرى والمناطق الساحلية.",
    verified: false
  }
];

// قراءة ID من الرابط
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find(p => p.id === productId);
const container = document.getElementById("productDetails");

if (!product || !container) {
  container.innerHTML = "<p>المنتج غير موجود</p>";
} else {
  container.innerHTML = `
    <!-- صورة -->
    <div>
      <img src="${product.image}"
           class="w-full h-72 object-cover rounded-xl">
    </div>

    <!-- بيانات -->
    <div class="flex flex-col">
      <h1 class="text-2xl font-extrabold mb-2">${product.name}</h1>

      <p class="text-orange-600 text-xl font-bold mb-4">
        ${product.price}
      </p>

      <div class="space-y-2 text-sm mb-4">
        <div>📂 الفئة: ${product.category}</div>
        <div>👤 التاجر: ${product.seller}</div>
        <div>📍 الموقع: ${product.location}</div>
        <div>📦 أقل طلب: ${product.minOrder}</div>
        <div>🚚 الشحن: ${product.shipping}</div>
        ${
          product.verified
            ? `<div class="text-green-600 font-semibold">✔ مورد موثوق</div>`
            : ""
        }
      </div>

      <p class="text-gray-600 mb-6">
        ${product.description}
      </p>

      <div class="flex gap-3 mt-auto">
        <a href="messages.html?to=${encodeURIComponent(product.seller)}&product=${product.id}"
           class="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
          تواصل مع التاجر
        </a>

        <a href="index.html#product-grid"
           class="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50">
          رجوع للمنتجات
        </a>
      </div>
    </div>
  `;
}

// منتجات مشابهة (نفس الفئة)
const relatedContainer = document.getElementById("related-products");
if (relatedContainer) {
  products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .forEach(p => {
      relatedContainer.innerHTML += `
        <a href="product-details.html?id=${p.id}"
           class="bg-white rounded-xl shadow hover:shadow-lg transition p-3 block">
          <img src="${p.image}"
               class="w-full h-32 object-cover rounded-lg mb-2">
          <div class="text-sm font-bold">${p.name}</div>
          <div class="text-xs text-orange-600">${p.price}</div>
        </a>
      `;
    });
}
