export const initThemeObserver = () => {

  const options = {
    threshold: 0.5, 
  };


  const sectionToNavItem = {
    'main__page-1': 'Home',
    'main__page-2': 'About',
    'main__page-3': 'Why',
    'main__page-4': 'Design',
    'main__page-5': 'Stay Updated'
  };

  
  const updateActiveNavItem = (activeSectionClass: string) => {
   
    document.querySelectorAll('.main-nav__item').forEach(item => {
      item.classList.remove('main-nav__item--active');
    });

  
    const sectionName = Object.entries(sectionToNavItem).find(([key]) => 
      activeSectionClass.includes(key)
    )?.[1];

    if (sectionName) {
      document.querySelectorAll('.main-nav__item').forEach(item => {
        const link = item.querySelector('a');
        if (link?.textContent?.trim() === sectionName) {
          item.classList.add('main-nav__item--active');
        }
      });
    }
  };

  const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target as HTMLElement;
        const theme = Array.from(section.classList).find((className) =>
          className.startsWith("theme-")
        );
      
        if (theme) {
    
          const elementsToUpdate = [
            ".header",
            ".main-nav",
            ".footer",
            ".main__logo-right"
          ];

          elementsToUpdate.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
              element.classList.forEach((className) => {
                if (className.startsWith("theme-")) {
                  element.classList.remove(className);
                }
              });
              element.classList.add(theme);
            }
          });
          updateActiveNavItem(section.className);
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  document.querySelectorAll(".main section").forEach((section) => {
    observer.observe(section);
  });

  updateActiveNavItem('main__page-1');
};