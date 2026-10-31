/// <reference types="cypress" />

/**
 * Pruebas de API - Signup y Login
 * Autor: Ing.Roberto Fernando Toapanta Valencia
 */
describe("DemoBlaze API - Signup y Login", () => {

    let username;
    let password;

    // Preparo los datos una sola vez, antes de todos los casos.
    before(() => {
        username = "robertoqa_" + Date.now();      // usuario unico por corrida
        password = btoa("Test1234");               // password en Base64
    });

    it("Caso 1 - Crea un usuario nuevo en signup", () => {
        cy.apiRequest("/signup", { username, password }).then((res) => {
            expect(res.status).to.eq(200);                          // salida: 200
            expect(JSON.stringify(res.body)).to.not.include("errorMessage"); // sin error
        });
    });

    it("Caso 2 - Intenta crear un usuario ya existente", () => {
        // Reutilizo el mismo usuario: la API debe rechazarlo.
        cy.apiRequest("/signup", { username, password }).then((res) => {
            expect(res.status).to.eq(200);
            expect(JSON.stringify(res.body)).to.include("This user already exist.");
        });
    });

    it("Caso 3 - Login con usuario y password correcto", () => {
        cy.apiRequest("/login", { username, password }).then((res) => {
            expect(res.status).to.eq(200);
            expect(JSON.stringify(res.body)).to.include("Auth_token"); // token de sesion
        });
    });

    it("Caso 4 - Login con usuario y password incorrecto", () => {
        const wrongPassword = btoa("passwordMala");
        cy.apiRequest("/login", { username, password: wrongPassword }).then((res) => {
            expect(res.status).to.eq(200);
            expect(JSON.stringify(res.body)).to.include("Wrong password.");
        });
    });
});