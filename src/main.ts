document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll<HTMLElement>(".product__item");
  const initialOpenProduct = document.querySelector<HTMLElement>(
    ".product__item--business-card"
  );
  const menuProduct = document.querySelector<HTMLElement>("#menu__product");
  const menuSingIn = document.querySelector<HTMLElement>(".menu__sing-in");
  const menuResource = document.querySelector<HTMLElement>(".menu__resource");
  const menuCompany = document.querySelector<HTMLElement>(".menu__company");
  const submenuProducts = document.querySelector<HTMLElement>(
    ".navbar__submenu-products"
  );
  const submenuSingIn = document.querySelector<HTMLElement>(
    ".navbar__submenu--sing-in"
  );
  const submenuResource = document.querySelector<HTMLElement>(
    ".navbar__submenu--resource"
  );
  const submenuCompany = document.querySelector<HTMLElement>(
    ".navbar__submenu--company"
  );
  const content = document.querySelector<HTMLElement>(".content");
  // Verificamos que los elementos existen antes de usarlos
  if (initialOpenProduct) {
    initialOpenProduct.classList.add("product__item--open");
  }

  products.forEach((product) => {
    product.addEventListener("mouseover", function () {
      products.forEach((p) => p.classList.remove("product__item--open"));
      product.classList.add("product__item--open");
    });
  });
  function showSubmenuBlur(): void {
    content.classList.add("blur-active");
  }
  function hideSubmenuBlur(): void {
    content.classList.remove("blur-active");
  }

  function showSubMenu(
    submenu: HTMLElement,
    submenu__items: HTMLElement,
    showSubmenuBlur: Function,
    hideSubmenuBlur: Function
  ) {
    if (submenu && submenu__items) {
      function showSubmenu(): void {
        submenu__items.classList.add("navbar__submenu-products--open");
        // submenu__items.style.display = 'block';
        showSubmenuBlur();
      }

      function hideSubmenu(): void {
        submenu__items.classList.remove("navbar__submenu-products--open");
        // submenu__items.style.display = 'none';
        hideSubmenuBlur();
      }

      submenu.addEventListener("mouseover", showSubmenu);
      submenu__items.addEventListener("mouseover", showSubmenu);
      submenu__items.addEventListener("mouseout", (e) => {
        if (!submenu.contains(e.relatedTarget)) {
          hideSubmenu();
        }
      });
    }
  }

  showSubMenu(menuProduct, submenuProducts, showSubmenuBlur, hideSubmenuBlur);
  showSubMenu(menuSingIn, submenuSingIn, showSubmenuBlur, hideSubmenuBlur);
  showSubMenu(menuResource, submenuResource, showSubmenuBlur, hideSubmenuBlur);
  showSubMenu(menuCompany, submenuCompany, showSubmenuBlur, hideSubmenuBlur);
  const navbar = document.querySelector<HTMLElement>(".navbar");
  let lastScrollTop = 0; 

  if (navbar) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        navbar.classList.add("hidden");
      } else {
        navbar.classList.remove("hidden");
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
  }
});
