export default () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      // eslint-disable-next-line no-param-reassign
      input.value = input.value.replace(/\D/, '');
    });
  });

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
          }, 5000);
        });
    });
  });
};
