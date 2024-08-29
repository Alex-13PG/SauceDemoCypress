describe('Selecionar Produtos', () => {
  // atributos

  beforeEach(() => {
    cy.visit('/')            // Abre o browser na url informada em cypress.config.js
  }) // Termina o before

  it('Selecionar Sauce Labs Backpak', () => {

      cy.title()            // Verifica se o title da pagina é Swag Labs
          .should('eq', 'Swag Labs')

        // Realizar login
        cy.get('input[data-test="username"]') // preen o usuário
            .type('standard_user')

        cy.get('#password')
            .type('secret_sauce')            // preenche a senha

        cy.get('input[name="login-button"]')
            .click()                         // clica no botão login

        //  carregar a pagina de inventário 

        cy.get('span.title')
            .should('have.text', 'Products') // verifica se o elemento contém o texto Products

        cy.get('img[alt="Sauce Labs Backpack"]')
            .click()   // Clicana imagem do produdo mochila

        // carregar pagina de item de inventário

        // apenaspara demonstrar como fariamos com xpath absoluto
        // Verifica se no elemento via xpath contém o texto back to products
        cy.xpath('/html/body/div/div/div/div[2]/div[2]/div/button').click()
            .should('have.text', 'Back to products')
              

        cy.get('div.inventory_details_name.large_size')
            .should('have.text', 'Sauce Labs Backpack')

        cy.get('div.inventory_details_price')
            .should('have.text', '$29.99')

        cy.get('#add-to-cart')
            .click()  // clica no botão adicionar no carrinho

        cy.get('a.shopping_cart_link')
            .should('have.text', '1') // Verifica se no carrinho exibe o nº 1

        
  })


}) // Termina o describe