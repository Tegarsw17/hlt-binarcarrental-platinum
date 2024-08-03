describe('template spec', () => {
  beforeEach(() => {
    cy.loginAdmin('admin@bcr.io', '123456');
  });

  it('should add new car', () => {
    cy.contains('button', 'Cars').click();
    cy.contains('button', 'Add New Car').click();
    cy.get('input[name=name]').type('Lamborgini1');
    cy.get('input[name=price]').type(100000);
    cy.get('input[type=file]').selectFile('./cypress/lambo.jpg', {
      force: true,
    });
    cy.get('select[name="category"]').select('small');
    cy.contains('button', 'Save').click();
  });

  it('should edit car', () => {
    cy.get('input[class=search-bar-input]').type('Lamborgini1');
    cy.contains('button', 'Search').click();
    cy.contains('button', 'edit').click();
    cy.get('input[name=name]', { timeout: 3000 }).clear().type('Lambo Goks');
    cy.get('input[name=price]').clear().type(123000);
    cy.get('input[type=file]').selectFile('./cypress/lambo.jpg', {
      force: true,
    });
    cy.contains('button', 'Save').click();
  });

  it('should delete car', () => {
    cy.get('input[class=search-bar-input]').type('Lambo Goks');
    cy.contains('button', 'Search').click();
    cy.contains('button', 'delete').click();
    cy.contains('button', 'Ya').click();
  });
});
