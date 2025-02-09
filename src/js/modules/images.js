export default () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImage = document.createElement('img');

  imgPopup.classList.add('popup');
  imgPopup.appendChild(bigImage);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  workSection.appendChild(imgPopup);

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    const { target } = e;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = 'scroll';
    }
  });
};
