
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary, #FF6A00);
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          color: var(--dark, #1A1A1A);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary, #E8491D);
        }
.nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo flex items-center">
          <img src="https://huggingface.co/spaces/seyoufi/global-bazaar-bridge/resolve/main/images/WhatsApp%20Image%202025-11-10%20at%206.08.31%20PM.jpeg" 
               alt="Sudegy Logo" class="h-12 mr-2">
          <span class="text-xl font-bold">Sudegy</span>
        </a>
<div class="nav-links">
          <a href="/">الرئيسية</a>
          <a href="products.html">المنتجات</a>
          <a href="suppliers.html">الموردين</a>
          <a href="about.html">عن الشركة</a>
          <a href="contact.html">اتصل بنا</a>
        </div>
        <div class="nav-actions">
          <slot name="language-switcher"></slot>
          <a href="user-profile.html" class="btn-outline flex items-center gap-2">
            <i data-feather="user"></i>
            <span>حسابي</span>
          </a>
          <a href="login.html" class="btn-outline">تسجيل الدخول</a>
          <a href="join.html" class="btn-primary">انضم مجاناً</a>
          <button class="mobile-menu-btn">
            <i data-feather="menu"></i>
          </button>
        </div>
</nav>
    `;
  }
}
