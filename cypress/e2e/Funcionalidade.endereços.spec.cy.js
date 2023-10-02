import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade endereços - Faturamento e entrega', () => {
  
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.login('Aluno.teste.cypress@teste.com', 'Teste.Teste.com')
  
  });
  
  it('Deve fazer cadastro de faturamento com sucesso', () => {
 EnderecoPage.editarEnderecoFaturamento('Lucas', 'Sampaio', 'Ebac', 'Brasil', 'Av.Destny', '240', 'Rio de janeiro', 'Rio de janeiro', '26276-424', '11983327420')
 cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
 
  })

  it.only('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
    EnderecoPage.editarEnderecoFaturamento(
      dadosEndereco[0].nome,
      dadosEndereco[0].sobrenome,
      dadosEndereco[0].empresa,
      dadosEndereco[0].pais,
      dadosEndereco[0].endreco,
      dadosEndereco[0].numero,
      dadosEndereco[0].cidade,
      dadosEndereco[0].estado,
      dadosEndereco[0].cep,
      dadosEndereco[0].telefone
      )
    cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')
    
     })



})