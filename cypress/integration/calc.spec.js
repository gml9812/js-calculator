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
    cy.get('#total').should('have.value', '0');
  });
});
