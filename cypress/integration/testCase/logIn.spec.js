describe('This is to test that user can sign up', function () {
    
    before(function () {
        cy.launchSite()
        cy.clickOnProfile()
    })
    it ('User Should be able to click On Profile button',function(){
         cy.clickOnProfile()
    })
    it ('User Should be able to enter valid login details',function(){
        cy.enterDetails()
   })
    it ('User Should be able to sign in',function(){
        cy.signIn()
})

})