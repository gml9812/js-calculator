// class가 digits인 놈한테 eventlistener 부여.
// 내부적으로 구분하게 한다.

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
