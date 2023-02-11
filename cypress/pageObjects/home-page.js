class HomePage{
    get firstSection(){
        return cy.get('section.home-page-image');
    }

    get secondSection(){
        return cy.get('section.image-right')
    }

    get thirdSection(){
        return cy.get('.image-left')
    }

    get forthSection(){
        return cy.get('.opportunities')
    }

    get fifthSection(){
        return cy.get('.count')
    }

    get sixtSection(){
        return cy.get('.blogs')
    }

    get seventhSection(){
        return cy.get('.footer-container')
    }


    get buttonFirstSection(){
    //    return cy.get('.image-text > .button')
        return this.firstSection.find('.button')
    }

    get titleFirstSection(){
        return this.firstSection.find('h2')
    }

    get buttonSecondSection(){
        return this.secondSection.find('.button')
    }

    get titleSecondSection(){
        return this.secondSection.find('h2')
    }

    get buttonThirdSection(){
        return this.thirdSection.find('.button')
    }

    get titleThirdSection(){
        return this.thirdSection.find('h2')
    }

    get buttonPrikaziSveForthSection(){
        return this.forthSection.find('.opportunities-link > a')
    }

    get firstColumnForthSection(){
        return this.forthSection.find('.opportunities-column:nth-child(1)')
    }

    get secondColumnForthSection(){
        return this.forthSection.find('.opportunities-column:nth-child(2)')
    }

    get firstColumnButtonForthSection(){
        return this.firstColumnForthSection.find('.button')
    }

    buttonProcitajFirstColumnForthSection(){
        this.firstColumnButtonForthSection.click()
    }

}

export const homePage = new HomePage();