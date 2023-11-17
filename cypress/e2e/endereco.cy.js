/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page";

describe("Funcionalidade Endereços - Faturamento e entrega", () => {
  beforeEach(() => {
    cy.visit("minha-conta");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it.only("Deve fazer cadastro de faturamento com sucesso", () => {
    EnderecoPage.editarEnderecoFaturamento(
      "Andre",
      "Lavorente",
      "Google",
      "Brasil",
      "Avenida Brasil",
      "3001",
      "São Paulo",
      "São Paulo",
      "01000100",
      "1828992332",
      "email@email.com"
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso"
    );
  });
});
