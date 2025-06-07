/// <reference types="cypress" />

describe('Using Fixtures', () => {
    let value
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.fixture('login').then((data) => {
            value = data
        })
        //cy.ge
    })
/*
given i am on login page
when i enter ***
Then it should return ***

*/

    it.only('TC1 - Passsing data from fixtures', () => {


        // cy.fixture('login').then((data) => {
        cy.get('#user-name').type(value.testdata1.username)
        cy.get('#password').type(value.testdata1.password)
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html')


        //})
    })
    it('TC2 - Passsing data from fixtures - user data 2', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        //cy.fixture('login').then((data) => {
        // cy.get('#user-name').type(this.data.testdata2.username)
        // cy.get('#password').type(this.data.testdata2.password)
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')

        //})
    })
})

// API 
// endpoint -> 
// request / payload -> 
// method -> GET, POST, PUT , PATCH, DELETE ( 204) -> 
// HTTP Codes -> 
// 1xx, 2xx, 3xx, 4xx, 5xx
// 1xx -> Informational 
// 2xx  => Success, 200- ok , 201 - Created, 204 - Success and no content in response

// Employee -> username, age,dept => id 
// 3xx - Redirection , 301 - Moved Permanently, 302- URL is temp moved

//4xx => Client Errors, 400 - Bad Request , 401 - unauthorized, 403 - forbidden
// 404 - Not Found , 409 - Conflict, 429 - Too Many Request


//5xx => Server Error , 500 - Internal Server Error , 502 - Bad Gateway, 
// 503 - Service Unavailable


