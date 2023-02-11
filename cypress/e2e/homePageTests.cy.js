import { homePage } from "../pageObjects/home-page";

describe('Home page tests', ()=>{

    beforeEach(()=>{
        cy.visit('/')
        
    })

    it('first section tests', () => {
        // homePage.firstSection.find('.button').should('exist')
        // let container = homePage.firstSection.find('.button')
        // container.should('exist')

        homePage.buttonFirstSection.should('exist')
        homePage.titleFirstSection.should('exist')
    });

    it('second section tests', () => {

        homePage.buttonSecondSection.should('exist')
        homePage.titleSecondSection.should('exist')
    })

    it('third section tests', () => {

        homePage.buttonThirdSection.should('exist')
        homePage.titleThirdSection.should('exist')
    })

    it('forth section tests', () => {
        homePage.buttonPrikaziSveForthSection.should('exist')
        homePage.firstColumnForthSection.should('exist')
        homePage.secondColumnForthSection.should('exist')
        homePage.buttonProcitajFirstColumnForthSection()
        cy.url().should('include', 'solution-karachi-1')
    })

})