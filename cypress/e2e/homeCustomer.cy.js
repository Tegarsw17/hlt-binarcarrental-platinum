describe('template spec', () => {
  beforeEach(() => {
    cy.login('budigod@mail.com', '12345678');
  });

  it('must show home page', () => {
    cy.url().should('include', 'https://binareasyrent.store/');
    cy.get('div.banner-text')
      .should('exist')
      .should('contain', 'Sewa & Rental Mobil Terbaik di kawasan Jakarta');
    cy.get('div.our-service-text')
      .should('exist')
      .should('contain', 'Best Car Rental for any kind of trip in Jakarta!');
    cy.get('div.whyus').should('exist').should('contain', 'Why Us ?');
    cy.get('div.testimonial-text')
      .should('exist')
      .should('contain', 'Testimonial');
    cy.get('div.promo-banner')
      .should('exist')
      .should('contain', 'Sewa Mobil di Jakarta Sekarang');
    cy.get('div.faq-title')
      .should('exist')
      .should('contain', 'Frequently Asked Question');
    cy.get('div.footer').should('exist');
  });

  it('should direct to search car', () => {
    cy.get('button.rent-button').first().click();
    cy.url().should('include', '/search');
  });
});
