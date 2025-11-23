// ========== Firebase =============
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

import { 
    getFirestore, 
    setDoc, 
    doc 
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBvnFMuXY_d5PKrKV-4Vp_fYyKD2c428Yw",
    authDomain: "sudegy-4c4e5.firebaseapp.com",
    projectId: "sudegy-4c4e5",
    storageBucket: "sudegy-4c4e5.appspot.com",
    messagingSenderId: "865758231874",
    appId: "1:865758231874:web:d1959356198ca1f809dcdb"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// =================================
// تسجيل حساب جديد
// =================================
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);

            // حفظ بيانات المستخدم في Firestore
            await setDoc(doc(db, "users", userCred.user.uid), {
                email: email,
                created_at: Date.now(),
            });

            alert("تم إنشاء الحساب!");
            window.location.href = "login.html";

        } catch (err) {
            alert("خطأ: " + err.message);
        }
    });
}

// =================================
// تسجيل دخول
// =================================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        try {
            await signInWithEmailAndPassword(auth, email, password);

            alert("تم تسجيل الدخول!");
            window.location.href = "index.html";  // بعد النجاح يرجع للصفحة الرئيسية

        } catch (err) {
            alert("خطأ: " + err.message);
        }
    });
}
