describe('Payment Car', () => {
  beforeEach(() => {
    cy.login('budigod@mail.com', '12345678');
    cy.visit('https://binareasyrent.store/car');
  });

  it('should get random car for detail', () => {
    const randomIndex = Math.floor(Math.random() * 9);
    cy.get('div.card-car')
      .eq(randomIndex)
      .within(() => {
        cy.get('.card-car-text').should('exist');
        cy.get('button').contains('Pilih Mobil').click();
      });
    cy.get('div.car-detail-text').should('exist').contains('Tentang Paket');
  });

  it('should do payment', () => {
    const randomIndex = Math.floor(Math.random() * 9);
    cy.get('div.card-car')
      .eq(randomIndex)
      .within(() => {
        cy.get('.card-car-text').should('exist');
        cy.get('button').contains('Pilih Mobil').click();
      });
    cy.get('div.car-detail-text').should('exist').contains('Tentang Paket');
    cy.get('.calendar-input-wrapper').first().click();
    cy.get('.rdrDayNumber').contains('21').click();
    cy.get('.rdrDayNumber').contains('25').click();
    cy.get('button').contains('Pilih Tanggal').click();
    cy.get('input[name="calender"]').should(
      'have.value',
      '2024-08-21 - 2024-08-25'
    );
    cy.get('.rent-button').first().click();
    cy.wait(1000);
    cy.get('p.order-detail-title-main').should('exist');
    cy.get('.bank-detail').contains('BCA').click();
    cy.get('.button-payment').click();
    cy.get('.button-confirm-payment').click();
    cy.get('input[type=file]').selectFile('./cypress/bukti.jpg', {
      force: true,
    });
    cy.wait(2000);
    cy.get('.button-confirm-payment').click();
    cy.get('img.success-icon').should('exist');
  });
});
