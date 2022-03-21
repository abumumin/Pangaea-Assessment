import FilterElement from '../../fixtures/elementMapper'
const fe = new FilterElement()

Cypress.Commands.add('clickAnyElement', function(){
    cy.get(element).should('be.visible').click();
})
Cypress.Commands.add('filterByCategory', function(){
    cy.clickAnyElement(fe.filterButton)
    cy.clickAnyElement(fe.categoryOption)
    cy.clickAnyElement(fe.bestSellerButton)
    cy.clickAnyElement(fe.applyFilterButton)
})

Cypress.Commands.add('scrollInViewOfSearchAllProduct', function(){
    cy.scrollTo(fe.seeAllProductButton)
    cy.scrollTo(fe.aLittleBackground)
    cy.scrollTo(fe.buildYourRoutineButton)
    cy.scrollTo(fe.shopSkinButton)
    cy.scrollTo(fe.seeAllProductButton)
})
Cypress.Commands.add('viewProductLandingPage', function(){
    cy.get(fe.seeAllProductButton).click()
})
