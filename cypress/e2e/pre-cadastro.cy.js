/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Funcionalidade Pré Cadastro", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
  });

  const emailFaker = faker.internet.email();
  const nomeFaker = faker.name.firstName();
  const sobrenomeFaker = faker.name.lastName();

  it("Deve completar o pré cadastro com sucesso", () => {
    cy.get("#reg_email").type(emailFaker);
    cy.get("#reg_password").type("!teste@teste$");
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(nomeFaker);
    cy.get("#account_last_name").type(sobrenomeFaker);
    cy.get(".woocommerce-Button").click();

    cy.get(".woocommerce-message").should(
      "contain",
      "Detalhes da conta modificados com sucesso."
    );
  });
});
