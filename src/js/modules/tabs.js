export default (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const tabs = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  const hideTabContent = () => {
    content.forEach((element) => {
      element.style.display = 'none';
    });

    tabs.forEach((element) => {
      element.classList.remove(activeClass);
    });
  };

  const showTabContent = (i = 0) => {
    content[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  };

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;

    const className = tabSelector.slice(1);
    if (target &&
        (target.classList.contains(className) || target.parentNode.classList.contains(className))) {
      tabs.forEach((element, i) => {
        if (target === element || target.parentNode === element) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};