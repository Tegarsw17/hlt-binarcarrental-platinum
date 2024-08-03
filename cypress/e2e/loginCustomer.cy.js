describe('Login Page Customer', () => {
  beforeEach(() => {
    cy.visit('https://binareasyrent.store/login');
  });

  it('should display login page form', () => {
    cy.url().should('include', '/login');
    cy.get('h1').should('exist').should('contain', 'Welcome Back!');
    cy.get('input#email').should('exist');
    cy.get('input#password').should('exist');
    cy.get('button').should('exist').should('contain', 'Sign In');
    cy.get('a').should('exist').should('contain', 'Sign Up for free');
  });

  it('should direct to register', () => {
    cy.get('a').should('contain', 'Sign Up for free').click();
    cy.url().should('include', '/register');
  });

  it('should login to home page', () => {
    cy.visit('https://binareasyrent.store/login');
    cy.get('input#email').type('budigod@mail.com');
    cy.get('input#password').type('12345678');
    cy.get('button').contains('Sign In').click();
    cy.url().should('include', 'https://binareasyrent.store/');
  });

  it('should logout', () => {
    cy.visit('https://binareasyrent.store/login');
    cy.get('input#email').type('budigod@mail.com');
    cy.get('input#password').type('12345678');
    cy.get('button').contains('Sign In').click();
    cy.url().should('include', 'https://binareasyrent.store/');
    cy.get('button').contains('Logout').click();
  });
});
