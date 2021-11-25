import Calculator from './container/CalculatorContainer.js';

export default function App($app) {
  this.state = {};

  const calculator = new Calculator({
    $app,
    initialState: {
      operand1: 0,
      operator: '',
      display: '0',
      clearNext: false,
    },
  });
}
