import FilterElement from '../../fixtures/elementMapper'
const fe = new FilterElement()

Cypress.Commands.add('clickAnyElement', function(element){
    cy.get(element).should('be.visible').click({force: true});
})
Cypress.Commands.add('filterByCategory', function(){
    cy.clickAnyElement(fe.filterButton)
    cy.clickAnyElement(fe.categoryOption)
    cy.clickAnyElement(fe.bestSellerButton)
    cy.get(fe.applyFilterButton).scrollIntoView()
    cy.clickAnyElement(fe.applyFilterButton)
    
})
 Cypress.Commands.add('filterByConcern', function(){
     cy.clickAnyElement(fe.filterButton)
     cy.clickAnyElement(fe.concernOption)
     cy.clickAnyElement(fe.damagedHairButton)
     cy.clickAnyElement(fe.oilyskinButton)
     cy.get(fe.applyFilterButton).scrollIntoView()
     cy.clickAnyElement(fe.applyFilterButton)
    
})
Cypress.Commands.add('filterByPrice', function(){
    cy.clickAnyElement(fe.filterButton)
    cy.clickAnyElement(fe.categoryOption)
    cy.clickAnyElement(fe.bestSellerButton)
    cy.get(fe.concernOption).click()
    cy.clickAnyElement(fe.oilyskinButton)
    cy.clickAnyElement(fe.drySkinButton)
    cy.clickAnyElement(fe.dullSkinButton)
    cy.clickAnyElement(fe.enlargedPores)
    cy.clickAnyElement(fe.tenthousandthreehundredandnintyeighttotwentythousandsevenhundredandnintysix)
    cy.get(fe.applyFilterButton).scrollIntoView()
    cy.clickAnyElement(fe.applyFilterButton)
   
})
Cypress.Commands.add('addToCart', function(){
    cy.clickAnyElement(fe.quickAdd1)
    cy.clickAnyElement(fe.addToCart1)
    cy.clickAnyElement(fe.backToFilterPage)
    cy.clickAnyElement(fe.quickAdd2)
    cy.clickAnyElement(fe.increaseQuantity2)
    cy.clickAnyElement(fe.addToCart2)
      
})
Cypress.Commands.add('checkout', function(){
    cy.clickAnyElement(fe.proceedToCheckOut)
 
})

Cypress.Commands.add('shippingAddress', function(){
    cy.get(fe.firstNameField).type(fe.firstNameText)
    cy.get(fe.lastNameField).type(fe.lastNameText)
    cy.get(fe.addressField).type(fe.addressText)
    cy.get(fe.apartmantField).type(fe.apartmentText)
    cy.get(fe.cityField).type(fe.cityText)
    cy.get(fe.countyDropdown).select('United State')
    cy.get(fe.selectStateDropdown).select('Alaska')
    cy.get(fe.zipCodeField).type(fe.zipCodeText)
    cy.get(fe.phoneNumberField).type(fe.phoneNumberText)
    cy.get(fe.confirmShippingInfoButton)
    
})

