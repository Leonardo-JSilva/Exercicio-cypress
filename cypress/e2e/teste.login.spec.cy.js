///<reference types="cypress" />




describe('teste Login', () => {



  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Passes', () => {
    cy.get('#username').type('Aluno.teste.cypress@teste.com')
    cy.get('#password').type('Teste.Teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain', 'Minha conta')

  })


  it('Deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', () => {
    cy.get('#username').type('Aluno.cypress@teste.com')
    cy.get('#password').type('Teste.Teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  })
    
  it('Deve exibir uma mensagem de erro ao inserir usuario ou senha invalidos', () => {
    cy.get('#username').type('Aluno.teste.cypress@teste.com')
    cy.get('#password').type('Teste.Teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail Aluno.teste.cypress@teste.com está incorreta. Perdeu a senha?')
  });


});
