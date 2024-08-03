describe('template spec', () => {
  beforeEach(() => {
    cy.loginAdmin('admin@bcr.io', '123456');
  });

  it('Should show dashboard admin', () => {
    cy.get('p').contains('Rented Car Data Visualization');
    cy.get('p').contains('List Order');
  });

  it('Should show List Car', () => {
    cy.contains('button', 'Cars').click();
    cy.get('.card-body').should('exist');
  });
});
