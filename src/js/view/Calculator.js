export default function Calculator({ $app, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $app.innerHTML = `
    <div class="calculator">
      <h1 id="total">${this.state.display}</h1>
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

    console.log(this.state);

    this.numberClick = (event) => {
      // const target = event.target;
      if (this.state.display === '0') {
        this.setState({
          ...this.state,
          display: event.target.innerHTML,
        });
      } else {
        this.setState({
          ...this.state,
          display: this.state.display + event.target.innerHTML,
        });
      }
    };

    this.operationClick = (event) => {
      // const target = event.target;
      console.log('test');
    };

    numberPad.addEventListener('click', this.numberClick);
    operationPad.addEventListener('click', this.operationClick);
  };

  this.render();
}
