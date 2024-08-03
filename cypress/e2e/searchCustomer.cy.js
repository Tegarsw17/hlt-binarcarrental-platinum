describe('Search Car', () => {
  beforeEach(() => {
    cy.login('budigod@mail.com', '12345678');
    cy.visit('https://binareasyrent.store/search');
  });

  it('Should display search page', () => {
    cy.get('div.search-car').should('exist').should('contain', 'Nama Mobil');
  });

  it('Should search all car', () => {
    cy.get('button').contains('Cari Mobil').click();
    cy.get('div.card-car').should('exist');
  });

  it('Should used pagination', () => {
    cy.get('button').contains('Cari Mobil').click();
    cy.get('div.card-car').should('exist');
    cy.get('span[aria-hidden="true"]').contains('›').click();
    cy.get('li.active').contains('2');
    cy.get('span[aria-hidden="true"]').contains('‹').click();
    cy.get('li.active').contains('1');
  });

  it('Should search car spesific', () => {
    cy.get('input[name="name"]').type('Mercedes-Benz');
    cy.get('button').contains('Cari Mobil').click();
    cy.get('div.card-car').should('exist').contains('Mercedes-Benz');
  });

  it('Should not get car', () => {
    cy.get('input[name="name"]').type('Tepung terigu');
    cy.get('button').contains('Cari Mobil').click();
    cy.get('div.car-list').contains('Data not found');
  });
});
