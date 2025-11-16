class ProductGrid extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          padding: 10px 0;
        }
        .product-card {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(5px);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.05);
        }
.product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-color: #FF6A00;
        }
        .product-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
.product-info {
          padding: 16px;
        }
        .product-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 8px;
          color: #1A1A1A;
        }
        .product-price {
          font-weight: bold;
          color: #FF5500;
          margin-bottom: 8px;
          font-size: 1.1rem;
        }
.product-desc {
          color: #4a5568;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }
        .product-contact {
          font-size: 0.8rem;
          color: #718096;
          margin-bottom: 12px;
        }
        .contact-btn {
          background: #FF6A00;
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          font-weight: 600;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .contact-btn:hover {
          background: #FF5500;
          transform: translateY(-2px);
        }
</style>
      <div class="product-grid">
        ${this.generateProductCards()}
      </div>
    `;
  }

  generateProductCards() {
    const products = [
      {
        id: 1,
        title: "ماكينة تعبئة وتغليف",
        price: "9,500 جنيه",
        image: "images/1-5-vertical-form-fill-seal-machine_01.jpg",
        desc: "ماكينة تعبئة أوتوماتيكية للمساحيق والحبيبات",
        email: "info@sudegy.com",
        phone: "+201234567890"
      },
      {
        id: 2,
        title: "مولد ديزل 10",
        price: "65,000 جنيه",
        image: "images/71qfmA9FlDL._AC_SY450_.jpg",
        desc: "مولد ديزل عالي الجودة باستهلاك وقود منخفض",
        email: "sales@sudegy.com",
        phone: "+201234567891"
      },
      {
        id: 3,
        title: "سمسم سوداني",
        price: "12,000 جنيه/طن",
        image: "images/bag-sesame-light.jpg",
        desc: "سمسم سوداني عالي الجودة للتصدير",
        email: "agriculture@sudegy.com",
        phone: "+201234567892"
      },
      {
        id: 4,
        title: "شحن دولي",
        price: "8,500 جنيه/طن",
        image: "images/شحن.jpg",
        desc: "شحن دولي من مصر للسودان",
        email: "dates@sudegy.com",
        phone: "+201234567893"
      },
      {
        id: 5,
        title: "لحوم مجمدة",
        price: "120 جنيه/كيلو",
        image: "images/لحم.jpg",
        desc: "لحوم سودانية مجمدة بجودة عالية",
        email: "meat@sudegy.com",
        phone: "+201234567894"
      },
      {
        id: 6,
        title: "عسل طبيعي",
        price: "150 جنيه/كيلو",
        image: "images/عسل.jpg",
        desc: "عسل سوداني طبيعي 100%",
        email: "honey@sudegy.com",
        phone: "+201234567895"
      },
      {
        id: 7,
        title: "أسمنت",
        price: "1,200 جنيه/طن",
        image: "images/اسمنت.jpg",
        desc: "أسمنت بورتلاندي عالي الجودة",
        email: "cement@sudegy.com",
        phone: "+201234567896"
      },
      {
        id: 8,
        title: "حديد تسليح",
        price: "18,000 جنيه/طن",
        image: "images/حديد.jpg",
        desc: "حديد تسليح بمقاسات مختلفة",
        email: "steel@sudegy.com",
        phone: "+201234567897"
      },
      {
        id: 9,
        title: "أدوية طبية",
        price: "يختلف حسب النوع",
        image: "images/ادويه 2.jpg",
        desc: "أدوية ومواد طبية بتراخيص معتمدة",
        email: "pharma@sudegy.com",
        phone: "+201234567898"
      },
      {
        id: 10,
        title: "سكر أبيض",
        price: "10,500 جنيه/طن",
        image: "images/سكر.jpg",
        desc: "سكر أبيض مكرر للاستهلاك الآدمي",
        email: "sugar@sudegy.com",
        phone: "+201234567899"
      },
      {
        id: 11,
        title: "زيت طعام",
        price: "25 جنيه/لتر",
        image: "images/زيت.jpg",
        desc: "زيت نباتي مكرر للطهي",
        email: "oil@sudegy.com",
        phone: "+201234567810"
      },
      {
        id: 12,
        title: "أرز مصري",
        price: "12 جنيه/كيلو",
        image: "images/أفضل_أنواع_الأرز.jpg",
        desc: "أرز مصري عالي الجودة",
        email: "rice@sudegy.com",
        phone: "+201234567811"
      },
      {
        id: 13,
        title: "منسوجات قطنية",
        price: "85 جنيه/متر",
        image: "images/معلومات-عن-نبات-القطن.jpg",
        desc: "أقمشة قطنية 100% بجودة تصدير",
        email: "textile@sudegy.com",
        phone: "+201234567812"
      },
      {
        id: 14,
        title: "بترول ومنتجات بترولية",
        price: "يختلف حسب النوع",
        image: "images/بترول.jpeg",
        desc: "منتجات بترولية بمواصفات قياسية",
        email: "petroleum@sudegy.com",
        phone: "+201234567813"
      },
      {
        id: 15,
        title: "معدات زراعية",
        price: "يختلف حسب النوع",
        image: "images/معدات.jpg",
        desc: "جرارات وآلات زراعية متنوعة",
        email: "agri-equip@sudegy.com",
        phone: "+201234567814"
      }
    ];
return products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <div class="product-price">${product.price}</div>
          <p class="product-desc">${product.desc}</p>
          <div class="product-contact">
            <div>${product.email}</div>
            <div>${product.phone}</div>
          </div>
          <a href="https://wa.me/${product.phone.replace(/\D/g, '')}" class="contact-btn">Contact Now</a>
        </div>
      </div>
    `).join('');
  }
}

customElements.define('product-grid', ProductGrid);