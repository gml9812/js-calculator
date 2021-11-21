const testCalc = (operand1, operator, operand2, result) => {
  cy.get('.digits').contains(operand1).click();
  cy.get('.operations').contains(operator).click();
  cy.get('.digits').contains(operand2).click();
  cy.get('.operations').contains('=').click();
  cy.get('#total').should('have.text', result);
};

describe('test counter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('changes total when number pad is clicked', () => {
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');
  });

  it('clears total when AC pushed', () => {
    cy.get('.digits').contains('1').click();
    cy.get('.digits').contains('5').click();
    cy.get('.modifier').click();
    cy.get('#total').should('have.text', '0');
  });

  it('can plus,minus,mult,div two numbers', () => {
    testCalc('1', '+', '6', '7');
    testCalc('7', '-', '3', '4');
    // testCalc('1', '-', '3', '-2');
    testCalc('3', 'X', '4', '12');
    testCalc('7', '/', '2', '3');
    // testCalc('2', '/', '0', '0');
  });
});
