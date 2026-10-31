// Comando reutilizable para llamar a la API de DemoBlaze.
// failOnStatusCode:false porque la API responde 200 incluso en errores,
// y necesito inspeccionar el body en todos los casos.
Cypress.Commands.add("apiRequest", (endpoint, payload) => {
    return cy.request({
        method: "POST",
        url: endpoint,
        body: payload,
        failOnStatusCode: false,
    });
});

// Codifica la contraseña en Base64, formato que exige la API.
Cypress.Commands.add("encodePassword", (plain) => {
    return btoa(plain);
});