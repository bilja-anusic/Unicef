class RegisterVolonter{
    get emailInput(){
        return cy.get('#email')
    }

    get passwordInput(){
        return cy.get('#password')
    }

    get repeatPasswordInput(){
        return cy.get('#repeat-password')
    }

    get nameInput(){
        return cy.get('#name')
    }

    get lastNameInput(){
        return cy.get('#lastname')
    }

    get birthYearInput(){
        return cy.get('#birth-year')
    }

    get genderInput(){
        return cy.get('.flex > #gender')
    }

    get townInput(){
        return cy.get('#town-region')
    }

    get interesovanjaButton(){
        return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > input')
    }

    get prihvatamButton1(){
        return cy.get('#application-usage-agreement')
    }

    get prihvatamButton2(){
        return cy.get('#privacy-policy')
    }

    get prihvatamButton3(){
        return cy.get('#online-conduct-code')
    }

    get prijaviSeButton(){
        return cy.get('.button')
    }

    get errorEmailMessage(){
        return cy.get('.input-section > :nth-child(2) > .error-message')
    }

    get errorPasswordMessage(){
        return cy.get('.input-section > :nth-child(3) > .error-message')
    }
    
    kreirajNalogVolonteri (email, password, text, year, gender) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.repeatPasswordInput.type(password)
        this.nameInput.type(text)
        this.lastNameInput.type(text)
        this.birthYearInput.type(year)
        this.genderInput.select(gender)
        this.townInput.type(text)
        this.interesovanjaButton.click()
        this.prihvatamButton1.click()
        this.prihvatamButton2.click()
        this.prihvatamButton3.click()
        this.prijaviSeButton.click()

    }
}

export const registerVolonter = new RegisterVolonter();