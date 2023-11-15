/// <reference types="cypress" />

context("Funcionalidade Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".page-title").should("contain", "Minha conta");
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá"
    );
  });

  it("Deve exibir uma mensagem de erro ao exibir usuário inválido", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno222_ebac@teste.com");
    cy.get("#password").type("teste@t1111.com");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-error > li").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
  });

  it("Deve exibir uma mensagem de erro ao exibir senha inválida", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@t1111.com");
    cy.get(".woocommerce-form > .button").click();

    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?"
    );
  });
});
