import Calculator from './view/Calculator.js';

export default function app() {
  new Calculator({ $app: document.querySelector('#app') });
}

app();
