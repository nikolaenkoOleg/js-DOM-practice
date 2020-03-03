export default (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((input) => {
    input.addEventListener('input', () => {
      // eslint-disable-next-line no-param-reassign
      input.value = input.value.replace(/\D/, '');
    });
  });
};
