describe('View product list page in the app', function () {
    before(function () {
        cy.launchSite()
       
    })
    
    it ('User Should be able to see different Products',function(){
        cy.scrollInViewOfSearchAllProduct()
    })
    it ('User Should be able to click on All product Button',function(){
        cy.viewProductLandingPage()
    })
})