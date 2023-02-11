/// <reference types="Cypress" />

import { registerVolonter } from "../pageObjects/register-volonter";

// const {faker} = require("@faker-js/faker")

describe('Register tests', ()=>{

    beforeEach(()=>{
        cy.visit('https://biljana-home/registracija-volonteri/')
    })

    it ("Register with valid credentials",() => {
        registerVolonter.kreirajNalogVolonteri("organizacija@gmail.com", "123456789ab**", 
        "neki tekst", "2000", "Muško")

    })

    it ("Invalid register test - with invalid email", () => {
        registerVolonter.kreirajNalogVolonteri("organizacijagmail.com", "123456789ab**", 
        "nekitekst", "2000", "Muško")
        registerVolonter.errorEmailMessage.should('have.text', 'Email nije validan.')

    })

    it ("Invalid register test - with invalid password", () => {
        registerVolonter.kreirajNalogVolonteri("organizacija@gmail.com", "123456789ab", 
        "nekitekst", "2000", "Muško")
        registerVolonter.errorPasswordMessage.should('have.text', 'Lozinka mora imati najmanje 8 znakova, sa kombinacijom slova, brojeva i simbola')

    })



    afterEach(() => {
        cy.clearCookies()
    })

})





