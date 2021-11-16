export default function Calculator({ $app }) {
  const render = () => {
    $app.innerHTML = `
    <div class="calculator">
      <h1 id="total">0</h1>
        <div class="digits flex">
          <button class="digit">9</button>
          <button class="digit">8</button>
          <button class="digit">7</button>
          <button class="digit">6</button>
          <button class="digit">5</button>
          <button class="digit">4</button>
          <button class="digit">3</button>
          <button class="digit">2</button>
          <button class="digit">1</button>
          <button class="digit">0</button>
        </div>
        <div class="modifiers subgrid">
          <button class="modifier">AC</button>
        </div>
        <div class="operations subgrid">
          <button class="operation">/</button>
          <button class="operation">X</button>
          <button class="operation">-</button>
          <button class="operation">+</button>
          <button class="operation">=</button>
        </div>
    </div>
    `;
  };

  const addEvent = () => {
    const display = document.querySelector('#total');
    const numberPad = document.querySelector('.digits');

    const modifier = document.querySelector('.modifiers');

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
    modifier.addEventListener('click', allClear);
  };

  const allClear = () => {
    display.innerHTML = '0';
  };

  const init = () => {
    render();
    addEvent();
  };

  init();
}
