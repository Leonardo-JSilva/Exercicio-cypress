describe('teste pré-cadastro', () => {

  const { faker } = require('@faker-js/faker');

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve completar o Pré-cadastro com sucesso', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('Testecadastro@.com')
    cy.get(':nth-child(4) > .button').click()
    cy.get('.page-title').should('contain' , 'Minha conta')
  })
})