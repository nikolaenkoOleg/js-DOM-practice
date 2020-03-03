import checkNumInputs from './checkNumInputs';
import { closeUnusedModals } from './modals';

export default (state) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const windows = document.querySelectorAll('[data-modal]');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    succses: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Упс! Что-то пошло не так...',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const request = await fetch(url, {
      method: 'POST',
      body: data,
    });
    const result = await request.text();
    return result;
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      // eslint-disable-next-line no-param-reassign
      input.value = '';
    });
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.appendChild(statusMessage);

      const formData = new FormData(form);
      if (form.getAttribute('data-calc') === 'end') {
        const keys = Object.keys(state);
        for (let i = 0; i < keys.length; i += 1) {
          const key = keys[i];
          const value = state[key];
          formData.append(key, value);
        }
      }

      postData('assets/server.php', formData)
        .then((data) => {
          console.log(data);
          statusMessage.textContent = message.succses;
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeUnusedModals(windows);
          }, 3000);
        });
    });
  });
};
