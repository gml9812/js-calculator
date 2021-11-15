describe('test counter', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('changes total when number pad is clicked', () => {
    cy.get('.digits').contains('1').click();
    cy.get('#total').should('have.text', '1');
  });
});
