/// <reference types="cypress" />

describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("produtos");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').contains('Beaumont Summit Kit').click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    let quantidade = 10


    cy.get('[class="product-block grid"]').contains('Beaumont Summit Kit').click();
    cy.get(".button-variable-item-L").click();
    cy.get(".button-variable-item-Orange").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade + " × “Beaumont Summit Kit” foram adicionados no seu carrinho."
    );
  });

  it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Frankie Sweatshirt', 'M', 'Green', 3)
  })

  it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
    cy.addProdutos('Geo Insulated Jogging Pant', '36', 'Red', 5)
  })
});
