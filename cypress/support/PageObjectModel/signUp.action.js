import FilterElement from '../../fixtures/elementMapper'
const fe = new FilterElement()
Cypress.Commands.add('launchSite', function(){
    cy.visit('/')
})
Cypress.Commands.add('clickOnProfile', function(element){
    cy.get(fe.profileButton).should('be.visible').click({force: true})
    cy.get(fe.createAccountButton).should('be.visible').click({force: true});
})
Cypress.Commands.add('fillInNewUserDetails', function(){
    cy.get(fe.emailField).type(fe.emailText)
    cy.get(fe.passwordFiled).type(fe.passwordText)
})
Cypress.Commands.add('submitNewUserDetails', function(){
    cy.get(fe.continueButton).click()
})