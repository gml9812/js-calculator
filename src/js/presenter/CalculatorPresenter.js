export default function calculatorPresenter({ $app, props }) {
  console.log(props);
  $app.innerHTML = `
    <div class="calculator">
      <h1 id="total">${props.display}</h1>
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

  const numberPad = document.querySelector('.digits');
  const modifier = document.querySelector('.modifiers');
  const operationPad = document.querySelector('.operations');

  modifier.addEventListener('click', props.allClear);
  numberPad.addEventListener('click', props.numberClick);
  operationPad.addEventListener('click', props.operationClick);
}
