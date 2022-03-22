import FilterElement from '../../fixtures/elementMapper'
const fe = new FilterElement()
Cypress.Commands.add('launchSite', function(){
    cy.visit('/')
})
Cypress.Commands.add('clickOnProfile', function(element){
    cy.get(fe.profileButton).should('be.visible').click({force: true})
    cy.get(fe.createAccountButton).should('be.visible').click({force: true})
    cy.get(fe.loginButton).should('be.visible').click({force: true});
})
Cypress.Commands.add('enterDetails', function(){
    cy.get(fe.emailLogin).type(fe.emailText)
    cy.get(fe.passwordLogin).type(fe.passwordText)
})
Cypress.Commands.add('signIn', function(){
    cy.get(fe.continueLogin).click()
})