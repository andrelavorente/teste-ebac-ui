/// <reference types="cypress" />

describe("Funcionalidade página de produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').eq(3).click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    cy.get('[class="product-block grid"]').eq(3).click();
    cy.get(".button-variable-item-L").click();
    cy.get(".button-variable-item-Black").click();
    cy.get(".input-text").clear().type(3);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", 3);
    cy.get(".woocommerce-message").should(
      "contain",
      "3 × “Bruno Compete Hoodie” foram adicionados no seu carrinho."
    );
  });
});
