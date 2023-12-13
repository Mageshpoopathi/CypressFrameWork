// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress" />
///<reference types="cypress-xpath" />

Cypress.Commands.add('WorkIFrame',(iframe,InsideIFrame)=>{
     cy.xpath(iframe).its('0.contentDocument.body').find(InsideIFrame)
                .should('be.visible').then(cy.wrap);

})
Cypress.Commands.add('forClick',()=>{
    WebElement.trigger('mouseover').click();
    cy.log("Button is clicked");
})
Cypress.Commands.add('typeText',(WebElement,value)=>{
                    WebElement.click().type(value);
})
Cypress.Commands.add('clearEnter',(WebElement)=>{
     WebElement.trigger('mouseover').click().clear();
})
Cypress.Commands.add('asserText',(WebElement)=>{
WebElement.should('be.visible')
})

