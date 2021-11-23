import Calculator from './view/Calculator.js';

export default function App($app) {
  this.state = {};

  const calculator = new Calculator({
    $app,
    initialState: {
      operand1: 1,
      operator: '',
      operand2: 2,
      display: '0',
      clearNext: false,
    },
  });
}
