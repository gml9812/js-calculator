const display = document.querySelector('#total');
const numberPad = document.querySelector('.digits');

const numberClick = (event) => {
  const target = event.target;
  const numDisplayed = display.innerHTML;
  if (numDisplayed === '0') {
    display.innerHTML = target.innerHTML;
  } else {
    display.innerHTML = numDisplayed + target.innerHTML;
  }
};

numberPad.addEventListener('click', numberClick);

const modifier = document.querySelector('.modifiers');

const allClear = () => {
  display.innerHTML = '0';
};

modifier.addEventListener('click', allClear);
