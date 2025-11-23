(function () {
    async function includeHTML() {
      const elements = document.querySelectorAll("[data-include]");
      for (const el of elements) {
        const file = el.getAttribute("data-include");
        if (!file) continue;
  
        try {
          const res = await fetch(file);
          if (!res.ok) {
            console.warn("Include failed:", file, res.status);
            el.innerHTML = "";
            continue;
          }
          const html = await res.text();
          el.innerHTML = html;
        } catch (e) {
          console.error("include-html error for", file, e);
        }
      }
  
      // بعد ما الهيدر يتحمّل نشغّل النافبار لو موجودة
      if (typeof setupNavbar === "function") {
        setupNavbar();
      }
    }
  
    document.addEventListener("DOMContentLoaded", includeHTML);
  })();
  