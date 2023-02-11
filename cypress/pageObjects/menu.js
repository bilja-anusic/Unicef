class Menu{

    get menuButton (){
        return cy.get('.container')
    }

    get naslovnaButton(){
        return cy.get('#menu-main-1 > .menu-item-type-custom > a')
    }

    get oNamaButton(){
        return cy.get('#menu-main-1 > .menu-item-23 > a')
    }

    get volontirajButton(){
        return cy.get('#menu-main-1 > .menu-item-17 > a')
    }

    get blogButton(){
        return cy.get('#menu-main-1 > .menu-item-97 > a')
    }

    get registracijaButton(){
        return cy.get('.menu-item-93 > a')
    }

    get prijavaButton(){
        return cy.get('.menu-item-179 > a')
    }

    get drustveneMrezeButton(){
        return cy.get('.header-container > .social-networks > h3')
    }

    get facebookLogo(){
        return cy.get('.header-container > .social-networks > .social-network-links > :nth-child(1) > img')
    }

    get instagramLogo(){
        return cy.get('.header-container > .social-networks > .social-network-links > :nth-child(2) > img')
    }

    get youtoubeLogo(){
        return cy.get('.header-container > .social-networks > .social-network-links > :nth-child(3) > img')
    }

    get linkedInLogo(){
        return cy.get('.header-container > .social-networks > .social-network-links > :nth-child(4) > img')
    }

    get searchButton(){
        return cy.get('.device-search > .is-search-form > .is-search-submit > .is-search-icon')
    }


    goToMenu(){
        this.menuButton.click()
    }

    goToSearch(){
        this.searchButton.click()
    }

}

export const menu = new Menu()