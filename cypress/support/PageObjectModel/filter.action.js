import FilterElement from '../../fixtures/elementMapper'
const fe = new FilterElement()

Cypress.Commands.add('clickAnyElement', function(element){
    cy.get(element).should('be.visible').click({force: true});
})
Cypress.Commands.add('filterByCategory', function(){
    cy.clickAnyElement(fe.filterButton)
    cy.clickAnyElement(fe.categoryOption)
    cy.clickAnyElement(fe.damagedHairButton)
    cy.clickAnyElement(fe.applyFilterButton)
    
})
 Cypress.Commands.add('filterByConcern', function(){
    //  cy.clickAnyElement(fe.filterButton)
     cy.get(fe.concernOption).click()
     cy.clickAnyElement(fe.bestSellerButton)
     cy.clickAnyElement(fe.applyFilterButton)
    
})