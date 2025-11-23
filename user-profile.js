// user-profile.js
// يستخدم Firebase v8 (نفس المشروع) ويعتمد على common.js

(function () {
    if (!window.firebase || !window.auth || !window.db) {
      console.warn("Firebase / auth / db غير جاهزة في صفحة الملف الشخصي.");
      return;
    }
  
    // عناصر واجهة المستخدم
    const profileNameEl = document.getElementById("profile-name");
    const profileTaglineEl = document.getElementById("profile-tagline");
    const profileAvatarEl = document.getElementById("profile-avatar");
    const completionEl = document.getElementById("profile-completion");
    const sellerProductsEl = document.getElementById("seller-products");
  
    // حساب بسيط لنسبة اكتمال الحساب
    function computeCompletion(userDoc) {
      if (!userDoc) return 20; // حد أدنى
  
      let score = 0;
      let total = 7; // عدد العناصر التي نقيس عليها
  
      if (userDoc.businessName) score++;
      if (userDoc.country && userDoc.city) score++;
      if (userDoc.address) score++;
      if (userDoc.commercialRegNumber) score++;
      if (userDoc.taxNumber) score++;
      if (userDoc.ownerIdNumber) score++;
      if (userDoc.bankName && userDoc.bankAccountNumber) score++;
  
      const percent = Math.max(20, Math.round((score / total) * 100));
      return percent;
    }
  
    // بناء كرت منتج واحد
    function buildProductCard(p) {
      const card = document.createElement("div");
      card.className = "product-card";
  
      const imgSrc = p.imageUrl || p.image || "images/شحن.jpg";
  
      card.innerHTML = `
        <img src="${imgSrc}" class="product-img" alt="${p.name || "منتج"}">
  
        <span class="product-badge">${p.category || "منتج عام"}</span>
  
        <div class="product-name mt-1">${p.name || "منتج بدون اسم"}</div>
        <div class="product-price">${p.price || ""}</div>
  
        <div class="product-meta mt-1">
          <span>👤 التاجر: ${p.sellerName || "هذا التاجر"}</span>
          <span>📍 ${p.location || ""}</span>
        </div>
  
        <div class="product-actions">
          <button class="btn-details">عرض التفاصيل</button>
          <button class="btn-message">تواصل عبر الرسائل</button>
        </div>
      `;
  
      // انتقال لصفحة المنتج
      const id = p.id || p.productId || "";
      const goToDetails = () => {
        if (id) {
          window.location.href = `product-details.html?id=${encodeURIComponent(id)}`;
        }
      };
  
      card.addEventListener("click", goToDetails);
  
      const detailsBtn = card.querySelector(".btn-details");
      detailsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        goToDetails();
      });
  
      const messageBtn = card.querySelector(".btn-message");
      messageBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const sellerId = p.sellerId || "";
        const params = new URLSearchParams();
        if (sellerId) params.set("to", sellerId);
        if (id) params.set("product", id);
        window.location.href = `messages.html?${params.toString()}`;
      });
  
      return card;
    }
  
    // تحميل منتجات التاجر من Firestore
    async function loadSellerProducts(uid) {
      if (!sellerProductsEl) return;
  
      sellerProductsEl.innerHTML = `
        <div class="col-span-full text-center text-xs text-gray-500 py-4">
          جاري تحميل منتجات التاجر...
        </div>
      `;
  
      try {
        // نفترض وجود collection اسمها "products" بحقل sellerId = uid
        const snapshot = await db
          .collection("products")
          .where("sellerId", "==", uid)
          .limit(40)
          .get();
  
        sellerProductsEl.innerHTML = "";
  
        if (snapshot.empty) {
          sellerProductsEl.innerHTML = `
            <div class="col-span-full text-center text-xs text-gray-500 py-6">
              لا توجد منتجات مضافة بعد. أضف أول منتج لك لزيادة ثقة العملاء 👇
            </div>
          `;
          return;
        }
  
        snapshot.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          const card = buildProductCard(data);
          sellerProductsEl.appendChild(card);
        });
      } catch (err) {
        console.error("Error loading seller products:", err);
        sellerProductsEl.innerHTML = `
          <div class="col-span-full text-center text-xs text-red-500 py-6">
            تعذّر تحميل المنتجات حالياً. يرجى المحاولة لاحقاً.
          </div>
        `;
      }
    }
  
    // تحميل بيانات التاجر من Firestore (نفترض collection "users")
    async function loadUserProfile(uid, user) {
      try {
        const docRef = db.collection("users").doc(uid);
        const docSnap = await docRef.get();
        const userDoc = docSnap.exists ? docSnap.data() : null;
  
        // تحديث الكرت العلوي
        if (profileNameEl) {
          profileNameEl.textContent =
            (userDoc && (userDoc.displayName || userDoc.businessName)) ||
            user.displayName ||
            "تاجر SudEgy";
        }
  
        if (profileTaglineEl) {
          const country = userDoc?.country || "السودان / مصر";
          profileTaglineEl.textContent = `تاجر مسجّل في ${country}`;
        }
  
        if (profileAvatarEl) {
          const name =
            (userDoc && (userDoc.displayName || userDoc.businessName)) ||
            user.displayName ||
            "ت";
          const firstLetter = name.trim().charAt(0);
          profileAvatarEl.textContent = firstLetter;
        }
  
        // نسبة الإكتمال
        if (completionEl) {
          const percent = computeCompletion(userDoc);
          completionEl.textContent = percent + "%";
        }
      } catch (err) {
        console.error("Error loading user profile:", err);
      }
    }
  
    // متابعة حالة تسجيل الدخول
    auth.onAuthStateChanged((user) => {
      if (!user) {
        // لو المستخدم ما مسجل دخول يرجع للّوجين
        window.location.href = "login.html";
        return;
      }
  
      // تحميل بياناته ومنتجاته
      loadUserProfile(user.uid, user);
      loadSellerProducts(user.uid);
    });
  })();
  