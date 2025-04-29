describe('Using Fixtures', () => {
    let value
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/v1/')
        cy.fixture('login').then((data) => {
            value = data
        })
    })


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
        cy.get('#user-name').type(this.data.testdata2.username)
        cy.get('#password').type(this.data.testdata2.password)
        cy.get('#login-button').click()
        cy.get('.error-button').should('be.visible')

        //})
    })
})