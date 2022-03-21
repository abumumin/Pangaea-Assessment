describe('This is to test filter features', function () {
    
    it('Filter by category should be successful', function () {
        cy.filterByCategory()
    })

    it('Filter by concern should be successful', function () {
        cy.filterByConcern() 
    })
})