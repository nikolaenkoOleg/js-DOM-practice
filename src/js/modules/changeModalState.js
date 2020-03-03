/* eslint-disable no-param-reassign */
import checkNumInputs from './checkNumInputs';

export default (state) => {
  const windowForms = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeigth = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  const bindActionTwoElems = (event, elements, prop) => {
    elements.forEach((item, i) => {
      const currentItemIndex = i;
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = currentItemIndex;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              elements.forEach((checkbox, j) => {
                const currentCheckboxIndex = j;
                checkbox.checked = false;
                if (currentItemIndex === currentCheckboxIndex) {
                  checkbox.checked = true;
                }
              });

              const cold = 0;
              const profileType = i;
              if (profileType === cold) {
                state[prop] = 'Холодное';
              } else {
                state[prop] = 'Теплое';
              }
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
          default:
            throw new Error(`Неизвестная нода ${item.nodeName}`);
        }

        console.log(state);
      });
    });
  };

  bindActionTwoElems('click', windowForms, 'form');
  bindActionTwoElems('input', windowWidth, 'width');
  bindActionTwoElems('input', windowHeigth, 'height');
  bindActionTwoElems('change', windowType, 'type');
  bindActionTwoElems('change', windowProfile, 'profile');
};
