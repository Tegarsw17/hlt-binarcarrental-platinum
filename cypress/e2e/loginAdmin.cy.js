describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://binareasyrent.store/admin/login');
  });

  it('should login as admin', () => {
    cy.get('input[name=email]').type('admin@bcr.io');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/admin');
  });

  it('should cannot login cause email not found', () => {
    cy.get('input[name=email]').type('bukanadmin@bcr.io');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();
    cy.get('div[role=alert]')
      .should('exist')
      .should('contain', 'Email not found');
  });

  it('should cannot login cause not admin', () => {
    cy.get('input[name=email]').type('budigod@mail.com');
    cy.get('input[name=password]').type('12345678');
    cy.get('button[type=submit]').click();
    cy.get('div[role=alert]')
      .should('exist')
      .should('contain', 'Anda bukan Admin');
  });
});
