class RegisterCompanyPage2{

    get profilOrganizacijeButton(){
        return cy.get('.second-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get fieldOneButton(){
        return cy.get('#field_others-0')
    }

    get fieldTwoButton(){
        return cy.get('#field_1z7k1-0')
    }

    get oOrganizacijiButton(){
        return cy.get('.third-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get oOrganizacijiInput1(){
        return cy.get('#field_g3mwu')
    }

    get oOrganizacijiInput2(){
        return cy.get('#field_nqzrf')
    }

    get oOrganizacijiInput3(){
        return cy.get('#field_z8q8x')
    }

    get oOrganizacijiInput4(){
        return cy.get('#field_2wevo')
    }

    get oOrganizacijiInput5(){
        return cy.get('#field_cn4s4')
    }

    get motivacijaIIskustvoButton(){
        return cy.get('.fourth-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get motivacijaIIskustvoInput1(){
        return cy.get('#field_gomem')
    }

    get motivacijaIIskustvoInput2(){
        return cy.get('#field_99qgw')
    }

    get motivacijaIIskustvoDaLiPristajeteButton(){
        return cy.get('#field_fkuyu-0')
    }

    get reciteNamButton(){
        return cy.get('.fifth-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get reciteNamInput1(){
        return cy.get('#field_6e9di')
    }

    get reciteNamInput2(){
        return cy.get('#field_cukh7')
    }

    get reciteNamInput3(){
        return cy.get('#field_ba0ox')
    }

    get reciteNamInput4(){
        return cy.get('#field_v969o')
    }

    get reciteNamInput5(){
        return cy.get('#field_dsxz0')
    }

    get reciteNamInput6(){
        return cy.get('#field_i7vxs')
    }

    get reciteNamInput7(){
        return cy.get('#field_7hgp8')
    }

    get reciteNamInput8(){
        return cy.get('#field_ypsg3')
    }

    get uklanjanjeRizikaButton(){
        return cy.get('.sixth-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get uklanjanjeRizikaInput1(){
        return cy.get('#field_vefji')
    }

    get uklanjanjeRizikaInput2(){
        return cy.get('#field_tsibt')
    }

    get uklanjanjeRizikaInput3(){
        return cy.get('#field_wvtdu')
    }

    get dokumentiButton(){
        return cy.get('.seventh-question-group > .question-group > .group-title > .toggle-button > button > img')
    }

    get dokumentiDaNe1(){
        return cy.get('#field_co9i-0')
    }

    get dokumentiDaNe2(){
        return cy.get('#field_jxvyh-0')
    }

    get dokumentiDaNe3(){
        return cy.get('#field_739sk-0')
    }

    get dokumentiDaNe4(){
        return cy.get('#field_cs4s0-0')
    }

    get submit1(){
        return cy.get('.submit > .input-container > :nth-child(2) > :nth-child(1) > input')
    }

    get submit2(){
        return cy.get('.input-container > :nth-child(3) > :nth-child(1) > input')
    }

    get submit3(){
        return cy.get('.input-container > :nth-child(4) > :nth-child(1) > input')
    }

    get posaljiteButton(){
        return cy.get('.button')
    }


    registracijaKompanije2 (text) {
        this.profilOrganizacijeButton.click()
        this.fieldOneButton.click()
        this.fieldTwoButton.click()
        this.oOrganizacijiButton.click()
        this.oOrganizacijiInput1.type(text)
        this.oOrganizacijiInput2.type(text)
        this.oOrganizacijiInput3.type(text)
        this.oOrganizacijiInput4.type(text)
        this.oOrganizacijiInput5.type(text)
        this.motivacijaIIskustvoButton.click()
        this.motivacijaIIskustvoInput1.type(text)
        this.motivacijaIIskustvoInput2.type(text)
        this.motivacijaIIskustvoDaLiPristajeteButton.click()
        this.reciteNamButton.click()
        this.reciteNamInput1.type(text)
        this.reciteNamInput2.type(text)
        this.reciteNamInput3.type(text)
        this.reciteNamInput4.type(text)
        this.reciteNamInput5.type(text)
        this.reciteNamInput6.type(text)
        this.reciteNamInput7.type(text)
        this.reciteNamInput8.type(text)
        this.uklanjanjeRizikaButton.click()
        this.uklanjanjeRizikaInput1.type(text)
        this.uklanjanjeRizikaInput2.type(text)
        this.uklanjanjeRizikaInput3.type(text)
        this.dokumentiButton.click()
        this.dokumentiDaNe1.click()
        this.dokumentiDaNe2.click()
        this.dokumentiDaNe3.click()
        this.dokumentiDaNe4.click()
        this.submit1.click()
        this.submit2.click()
        this.submit3.click()
        this.posaljiteButton.click()
    }

}

export const registerCompanyPage2 = new RegisterCompanyPage2();