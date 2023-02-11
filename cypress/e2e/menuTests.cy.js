 ///<reference types="Cypress" />

import { menu } from "../pageObjects/menu"



describe('Home page tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        
    })
    it('visibility tests', () => {
        menu.goToMenu()
        menu.naslovnaButton.should('be.visible')
        menu.oNamaButton.should('be.visible')
        menu.volontirajButton.should('be.visible')
        menu.blogButton.should('be.visible')
        menu.registracijaButton.should('be.visible')
        menu.prijavaButton.should('be.visible')
        menu.drustveneMrezeButton.should('be.visible')
        menu.instagramLogo.should('exist')
        menu.facebookLogo.should('exist')
        menu.youtoubeLogo.should('exist')
        menu.linkedInLogo.should('exist')
    });

    it('search test', () => {
        // cy.once('uncaught:exception', () => false);
        menu.goToSearch()
       // cy.url().should('include', '/?s=&id=8')
    });

})



