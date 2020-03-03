/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
export const closeUnusedModals = (modals) => {
  modals.forEach((modal) => {
    modal.style.display = 'none';
  });
};

const showModalByTime = (selector, time) => {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'block';
    document.body.style.overflow = 'hidden';
  }, time);
};

export default () => {
  const bindModal = (triggerSelector, modalSelector, closeSelector, isImportantModal = false) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    console.log(triggers);


    // обработка кнопок, вызывающих модальные окна
    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault;
        }

        closeUnusedModals(windows);

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // document.body.classList.add('modal-open');
      });
    });

    // обработка закрытия модальных окон
    close.addEventListener('click', () => {
      console.log('закрыи модалку');
      closeUnusedModals(windows);

      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.add.remove('modal-open');
    });

    // обработка клика на подолжку, закрыващего модальное окно
    modal.addEventListener('click', (e) => {
      if (isImportantModal === true) {
        return;
      }

      if (e.target === modal) {
        closeUnusedModals(windows);
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.add.remove('modal-open');
      }
    });
  };

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', true);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', true);
  showModalByTime('.popup', 60000);
};
