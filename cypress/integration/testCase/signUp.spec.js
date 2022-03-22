describe('This is to test that user can sign up', function () {
    
    before(function () {
        cy.launchSite()
        cy.clickOnProfile()
    })
    it ('User Should be able to click On Profile button',function(){
         cy.clickOnProfile()
    })
    it ('User Should be able to fill new user details',function(){
        cy.fillInNewUserDetails()
   })
   it ('User Should be able to submit form',function(){
        cy.submitNewUserDetails()
    })
})
