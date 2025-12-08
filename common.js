// common.js - Firebase + Navbar Controller

// نفترض إن firebase اتتحميل من index.html
if (!window.firebase) {
  console.error("Firebase not loaded. تأكد من سكربتات Firebase في index.html");
}

// نجهز مراجع auth و db لو Firebase موجود
let auth = null;
let db = null;

if (window.firebase) {
  // لو لسه ما اتعمل initialize (كـ احتياط)
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyBvnFMuXY_d5PKrKV-4Vp_fYyKD2c428Yw",
      authDomain: "sudegy-4c4e5.firebaseapp.com",
      projectId: "sudegy-4c4e5",
      storageBucket: "sudegy-4c4e5.appspot.com",
      messagingSenderId: "865758231874",
      appId: "1:865758231874:web:d1959356198ca1f809dcdb"
    };
    firebase.initializeApp(firebaseConfig);
  }

  auth = firebase.auth();
  db = firebase.firestore();
}

function setupNavbar() {
  // لو Firebase ما جاهز نوقف
  if (!auth) {
    console.warn("Navbar: auth غير جاهز");
    return;
  }

  const navLogin = document.getElementById('nav-login');
  const navRegister = document.getElementById('nav-register');
  const navAdd = document.getElementById('nav-add');
  const navMessages = document.getElementById('nav-messages');
  const navProfile = document.getElementById('nav-profile');
  const navLogout = document.getElementById('nav-logout');

  function showGuest() {
    navLogin && navLogin.classList.remove('hidden');
    navRegister && navRegister.classList.remove('hidden');
    navAdd && navAdd.classList.add('hidden');
    navMessages && navMessages.classList.add('hidden');
    navProfile && navProfile.classList.add('hidden');
    navLogout && navLogout.classList.add('hidden');
  }

  function showUser() {
    navLogin && navLogin.classList.add('hidden');
    navRegister && navRegister.classList.add('hidden');
    navAdd && navAdd.classList.remove('hidden');
    navMessages && navMessages.classList.remove('hidden');
    navProfile && navProfile.classList.remove('hidden');
    navLogout && navLogout.classList.remove('hidden');
  }

  // مراقبة حالة المستخدم
  auth.onAuthStateChanged(user => {
    if (user) {
      showUser();
    } else {
      showGuest();
    }
  });

  // زر الخروج
  if (navLogout) {
    navLogout.addEventListener('click', async () => {
      try {
        await auth.signOut();
        alert("تم تسجيل الخروج بنجاح");
        window.location.href = "index.html";
      } catch (err) {
        console.error("Logout error:", err);
        alert("فشل تسجيل الخروج");
      }
    });
  }
}
// common.js — قبل firebase.initializeApp(...) ضع هذا التأكد:
if (!window.firebase) {
  console.error('Firebase SDK غير محمّل — تأكد من أن SDKs محمّلة قبل common.js');
} else {
  // حماية من التهيئة المزدوجة
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized.');
  } else {
    console.log('Firebase already initialized — skipping initializeApp().');
  }

  // ثم إعداد auth & db
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  window.storage = firebase.storage();
}

// نخلي الفنكشن متاحة لـ include-html.js
window.setupNavbar = setupNavbar;

