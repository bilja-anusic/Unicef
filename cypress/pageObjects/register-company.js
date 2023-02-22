const {faker} = require("@faker-js/faker")


class RegisterCompanyPage{
    get imeOrganizacijeInput(){
        return cy.get('#organization-name')
    }

    get adresaOrganizacijeInput(){
        return cy.get('#organization-address')
    }

    get emailOrganizacijeInput(){
        return cy.get('#organization-email')
    }

    get brojTelefonaOrganizacijeInput(){
        return cy.get('#organization-phone-number')
    }

    get kontaktOsobaInput(){
        return cy.get('#contact-person')
    }

    get webStranicaOrganizacijeButton(){
        return cy.get('.at-least-one > :nth-child(1) > .flex > :nth-child(1) > input')
    }

    get webStranicaOrganizacijeInput(){
        return cy.get('.at-least-one > :nth-child(1) > [type="text"]')
    }

    get facebookStranicaOrganizacijeButton(){
        return cy.get('.at-least-one > :nth-child(2) > .flex > :nth-child(1) > input')
    }

    get facebookStranicaOrganizacijeInput(){
        return cy.get('.at-least-one > :nth-child(2) > [type="text"]')
    }

    get instagramStranicaOrganizacijeButton(){
        return cy.get(':nth-child(3) > .flex > :nth-child(1) > input')
    }

    get instagramStranicaOrganizacijeInput(){
        return cy.get('.at-least-one > :nth-child(3) > [type="text"]')
    }

    get brojTelefonaKontaktOsobeInput(){
        return cy.get('#contact-person-phone-number')
    }

    get emailKontaktOsobeInput(){
        return cy.get('#contact-person-email')
    }

    get zakonskiPredstavnikInput(){
        return cy.get('#legal-representative')
    }

    get brojTelefonaZakonskogPredstavnikaInput(){
        return cy.get('#legal-representative-phone-number')
    }

    get emailZakonskogPredstavnikaInput(){
        return cy.get('#legal-representative-email')
    }



    registracijaKompanije (text, email, number, url) {
        this.imeOrganizacijeInput.type(text)
        this.adresaOrganizacijeInput.type(text)
        this.emailOrganizacijeInput.type(faker.internet.email())
        this.brojTelefonaOrganizacijeInput.type(faker.phone.number('+381########'))
        this.kontaktOsobaInput.type(text)
        this.webStranicaOrganizacijeButton.click()
        this.webStranicaOrganizacijeInput.type(url)
        this.facebookStranicaOrganizacijeButton.click()
        this.facebookStranicaOrganizacijeInput.type(url)
        this.instagramStranicaOrganizacijeButton.click()
        this.instagramStranicaOrganizacijeInput.type(url)
        this.brojTelefonaKontaktOsobeInput.type(faker.phone.number('+381########'))
        this.emailKontaktOsobeInput.type(faker.internet.email())
        this.zakonskiPredstavnikInput.type(text)
        this.brojTelefonaZakonskogPredstavnikaInput.type(faker.phone.number('+381########'))
        this.emailZakonskogPredstavnikaInput.type(faker.internet.email())

    }

}

export const registerCompanyPage = new RegisterCompanyPage();