import operation from '../library/operation.js';
import calculatorPresenter from '../presenter/CalculatorPresenter.js';

export default function CalculatorContainer({ $app, initialState }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.numberClick = (event) => {
    if (this.state.clearNext === true) {
      this.setState({
        ...this.state,
        display: '',
        clearNext: false,
      });
    }
    if (this.state.display === '0') {
      this.setState({
        ...this.state,
        display: event.target.innerHTML,
      });
    } else {
      if (this.state.display.length > 3) {
        alert('error!');
      } else {
        this.setState({
          ...this.state,
          display: this.state.display + event.target.innerHTML,
        });
      }
    }
  };

  this.operationClick = (event) => {
    if (event.target.innerHTML == '=') {
      if (this.okayToCalculate()) {
        this.calculate();
      } else {
        alert('error!');
      }
    } else {
      try {
        this.setOperator(event);
      } catch (err) {
        alert('error!' + err);
      }
    }
  };

  this.okayToCalculate = () => {
    const operator = this.state.operator;
    if (operator === '' || this.divByZero() || this.state.clearNext === true) {
      return false;
    }
    return true;
  };

  this.divByZero = () => {
    return this.state.operator === '/' && this.state.display === '0';
  };

  this.calculate = () => {
    const answer = this.getCalcResult();
    this.setState({
      operand1: 0,
      operator: '',
      display: String(answer),
      clearNext: true,
    });
  };

  this.getCalcResult = () => {
    const operand1 = this.state.operand1;
    const operator = this.state.operator;
    const operand2 = parseInt(this.state.display);
    return operation[operator](operand1, operand2);
  };

  this.setOperator = (event) => {
    if (this.state.operator != '') {
      alert('error!');
    } else {
      this.setState({
        ...this.state,
        operand1: parseInt(this.state.display),
        operator: event.target.innerHTML,
        clearNext: true,
      });
    }
  };

  this.allClear = () => {
    this.setState({
      operand1: 0,
      operator: '',
      display: '0',
      clearNext: false,
    });
  };

  this.render = () => {
    console.log(this.state);
    calculatorPresenter({
      $app,
      props: {
        display: this.state.display,
        allClear: this.allClear,
        numberClick: this.numberClick,
        operationClick: this.operationClick,
      },
    });
  };

  this.render();
}
