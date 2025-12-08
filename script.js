/* ============================
   script.js - Sudegy (merged)
   - Merge local products + Firestore products
   - Render featured slider + product grid
   - Minor UI helpers (smooth scroll, language toggle)
   ============================ */

/* --------------------------
   1) Smooth scrolling for anchor links
   -------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // ensure target exists
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

/* --------------------------
   2) Language toggle (basic)
   -------------------------- */
const languageToggle = document.getElementById('language-toggle');
if (languageToggle) {
  languageToggle.addEventListener('click', () => {
    alert('English version coming soon!');
  });
}

/* ===========================
   3) Products: local + Firestore merge & render
   =========================== */

/* ---- Local products (existing static) ----
   Replace or extend this list with your site's current local items if needed.
*/
const localProducts = [
  { id: "local-1", name: "سمسم سوداني ممتاز", price: "12,000 جنيه/طن", image: "images/bag-sesame-light.jpg", category: "الزراعة", seller: "محمد أحمد", location: "القضارف - السودان", qty: "20 طن" },
  { id: "local-2", name: "تمور بلدية مغلفة", price: "8,500 جنيه/طن", image: "images/تمور.jpg", category: "الزراعة", seller: "شركة التمور", location: "الخرطوم - السودان", qty: "5 طن" }
];

/* ---- Helper: normalize Firestore doc -> product object ---- */
function mapDocToProduct(doc) {
  const data = doc.data();
  return {
    id: doc.id || (data.id ? String(data.id) : null),
    name: data.name || data.title || data.productName || "منتج",
    price: data.price || data.priceText || (data.currency ? `${data.amount || ""} ${data.currency}` : ""),
    image: data.image || data.imageUrl || "images/default-product.jpg",
    category: data.category || "",
    seller: data.ownerEmail || data.ownerName || data.owner || data.sellerName || "تاجر Sudegy",
    location: data.origin || data.location || "",
    qty: data.qty || data.minOrder || data.min_order || "",
    raw: data
  };
}

/* ---- Fetch products from Firestore (safe) ---- */
async function fetchFirestoreProducts(limit = 100) {
  try {
    if (!window.firebase || !firebase.firestore) {
      console.warn("Firebase not available - skipping Firestore fetch.");
      return [];
    }
    const snap = await firebase.firestore().collection("products").limit(limit).get();
    if (snap.empty) return [];
    const arr = [];
    snap.forEach(doc => arr.push(mapDocToProduct(doc)));
    return arr;
  } catch (err) {
    console.error("Error fetching products from Firestore:", err);
    return [];
  }
}

/* ---- Merge local + firestore avoiding duplicates ---- */
function mergeProducts(localList, firestoreList) {
  const merged = [...localList]; // keep local first
  const known = new Set();

  // register known ids and names from local list
  localList.forEach(p => {
    if (p.id) known.add(String(p.id));
    if (p.name) known.add((p.name || "").toLowerCase());
  });

  firestoreList.forEach(p => {
    const pid = p.id ? String(p.id) : "";
    const pname = (p.name || "").toLowerCase();

    // if duplicated by id or name, skip
    if (pid && known.has(pid)) return;
    if (pname && known.has(pname)) return;

    merged.push(p);
    if (pid) known.add(pid);
    if (pname) known.add(pname);
  });

  return merged;
}

/* ---- Utility: escape HTML for safety ---- */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ===========================
   4) Render functions
   =========================== */

function renderFeaturedSlider(productsList) {
  const sliderEl = document.getElementById("featured-slider");
  if (!sliderEl) return;
  sliderEl.innerHTML = "";
  const featured = productsList.slice(0, 7);
  featured.forEach(p => {
    const item = document.createElement("div");
    item.className = "featured-item";
    item.innerHTML = `
      <div class="featured-circle">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" />
      </div>
      <div class="featured-title">${escapeHtml(p.name)}</div>
    `;
    item.addEventListener("click", () => {
      const id = p.id ? encodeURIComponent(p.id) : encodeURIComponent(p.name);
      window.location.href = `product-details.html?id=${id}`;
    });
    sliderEl.appendChild(item);
  });
}

function renderProductGrid(productsList) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (!productsList.length) {
    grid.innerHTML = `<div class="col-span-full text-center py-6 text-gray-500">لا توجد منتجات متاحة حالياً.</div>`;
    return;
  }

  productsList.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${escapeHtml(p.image || 'images/default-product.jpg')}" class="product-img" alt="${escapeHtml(p.name)}">
      <div class="meta-top" style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;">
        <span class="badge" style="background:#f3f4f6;padding:4px 8px;border-radius:6px;font-size:12px;">${escapeHtml(p.category || '')}</span>
        <span class="id-tag" style="font-size:11px;color:#6b7280;">#${escapeHtml((p.id||'').toString().slice(0,6))}</span>
      </div>
      <h3 class="product-title" style="margin:8px 0 4px;font-weight:600;">${escapeHtml(p.name)}</h3>
      <div class="product-price" style="font-weight:700;color:#E8491D;">${escapeHtml(p.price || '')}</div>
      <div class="product-meta" style="margin-top:8px;font-size:13px;color:#374151;">
        <div>👤 ${escapeHtml(p.seller || '')}</div>
        <div>📍 ${escapeHtml(p.location || '')}</div>
        <div>📦 أقل طلب: ${escapeHtml(p.qty || '—')}</div>
      </div>
      <div class="actions" style="margin-top:10px;display:flex;gap:8px;">
        <button class="btn btn-details" style="flex:1;padding:8px;border-radius:6px;border:1px solid #e5e7eb;background:white;">عرض التفاصيل</button>
        <button class="btn btn-message" style="flex:1;padding:8px;border-radius:6px;border:1px solid #e5e7eb;background:#F97316;color:white;">تواصل</button>
      </div>
    `;

    // Events
    const detailsBtn = card.querySelector(".btn-details");
    const messageBtn = card.querySelector(".btn-message");

    detailsBtn.addEventListener("click", e => {
      e.stopPropagation();
      const id = p.id ? encodeURIComponent(p.id) : encodeURIComponent(p.name);
      window.location.href = `product-details.html?id=${id}`;
    });

    messageBtn.addEventListener("click", e => {
      e.stopPropagation();
      // direct to messages with seller identifier if available
      const to = encodeURIComponent(p.raw?.owner || p.seller || p.raw?.ownerEmail || "");
      const pid = p.id ? encodeURIComponent(p.id) : encodeURIComponent(p.name);
      window.location.href = `messages.html?to=${to}&product=${pid}`;
    });

    card.addEventListener("click", () => {
      const id = p.id ? encodeURIComponent(p.id) : encodeURIComponent(p.name);
      window.location.href = `product-details.html?id=${id}`;
    });

    grid.appendChild(card);
  });
}

/* ===========================
   5) Initialization: render local then fetch & merge
   =========================== */
async function initProductsMerge() {
  // show local products fast
  renderFeaturedSlider(localProducts);
  renderProductGrid(localProducts);

  // fetch from Firestore
  const fsProducts = await fetchFirestoreProducts(200);

  // merge (local first)
  const merged = mergeProducts(localProducts, fsProducts);

  // optional: sort by created_at_local if available in raw
  merged.sort((a, b) => {
    const ta = a.raw && a.raw.created_at_local ? Number(a.raw.created_at_local) : 0;
    const tb = b.raw && b.raw.created_at_local ? Number(b.raw.created_at_local) : 0;
    return tb - ta;
  });

  // re-render with merged list
  renderFeaturedSlider(merged);
  renderProductGrid(merged);
}

// Execute on load (safe guard DOM readiness)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProductsMerge);
} else {
  initProductsMerge();
}
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

/* ===========================
   End of file
   =========================== */
