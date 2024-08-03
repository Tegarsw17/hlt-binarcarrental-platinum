describe('template spec', () => {
  it('Register customer success', () => {
    const randomIndex = Math.floor(Math.random() * 1000);
    cy.visit('https://binareasyrent.store/register');
    cy.get('input#name').type(`random${randomIndex}`);
    cy.get('input#email').type(`random${randomIndex}@mail.com`);
    cy.get('input#password').type('12345678');
    cy.get('button').click();
    cy.url().should('include', '/login');
  });

  it('Register customer failed', () => {
    cy.visit('https://binareasyrent.store/register');
    cy.get('input#name').type(`budi`);
    cy.get('input#email').type(`budigod@mail.com`);
    cy.get('input#password').type('12345678');
    cy.get('button').click();
    cy.get('div').contains('Email Already exists.');
  });
});
