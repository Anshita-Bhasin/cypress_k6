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




// Inside cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').type(email)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

// npm install xlsx --save

const XLSX = require('xlsx')

Cypress.Commands.add('readExcelFile', (filepath) => {
    return cy.task('readExcelFile', filepath)
})

Cypress.Commands.add('writeToExcel', (data, filepath) => {
    return cy.task('writeToExcel', { data, filepath })
})

Cypress.Commands.add('getIframeBody',(selector)=>{
    return cy.get(selector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
})
