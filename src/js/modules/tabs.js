export default (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((element) => {
      // eslint-disable-next-line no-param-reassign
      element.style.display = 'none';
    });

    tabs.forEach((element) => {
      element.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = display;
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const { target } = e;

    const className = tabSelector.slice(1);
    if (target && (target.classList.contains(className)
      || target.parentNode.classList.contains(className))) {
      tabs.forEach((element, i) => {
        if (target === element || target.parentNode === element) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
