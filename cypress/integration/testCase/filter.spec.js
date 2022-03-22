describe('This is to test filter features', function () {
    
    it('Filter by category should be successful', function () {
        cy.filterByCategory()
    })

    it('Filter by concern should be successful', function () {
        cy.filterByConcern() 
   })

   it('Filter by price should be successful', function () {
        cy.filterByPrice() 
   })

   it('User should be able to add Product to cart successful', function () {
        cy.addToCart() 
   })

   it('Proceed to checkout should be successful', function () {
        cy.checkout() 
   })
   it('User should be able to confirm shipping Address', function (){
        cy.shippingAddress()
   })

})
