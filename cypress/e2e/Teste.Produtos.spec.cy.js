describe('teste página de Produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });


  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
    //.eq(0)
    //.eq(1)
    //.eq(2)
    //.eq(3)
    .contains('Abominable Hoodie')
    .click()
  })

  it('Deve selecionar um produto ao carrinho', () => {
    var quantidade = 7
    cy.get('[class="product-block grid"]').eq(0).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    cy.get('.woocommerce-message').should('contain' , quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    
  });
})