/// <reference types="Cypress" />

import { registerCompanyPage } from "../pageObjects/register-company";
import { registerCompanyPage2 } from "../pageObjects/register-company2";

// const {faker} = require("@faker-js/faker")

describe('Register tests', ()=>{

    beforeEach(()=>{
        cy.visit('registracija-organizacije')
    })

    it ("Register with valid credentials",() => {
        registerCompanyPage.registracijaKompanije("Organizacija1",
        "organizacija@gmail.com", "+381652002001", "https://www.jasmin.rs/", )
        registerCompanyPage2.registracijaKompanije2("neki opisi")


    })





    // it("Register with valid credentials with intercept",() => {
    //     cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/register").as("registerRequest")
    //     registerPage.register(faker.internet.email(), faker.internet.password(),1)
    //     cy.wait("@registerRequest").then((request) => {
    //         expect(request.response.statusCode).to.eql(200)
    //     })
    // })

    // it ("Invalid register test - with invalid email", () => {
    //     registerPage.register("biljayahoo.com", "12345678", 1)
    //     registerPage.errorMessage.should('have.text', 'The email field must be a valid email')

    // })

    afterEach(() => {
        cy.clearCookies()
    })

})





