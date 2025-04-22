describe('Login to website using basic auth', () => {
    it(' login using username & password', () => {
        cy.visit('https://authenticationtest.com/HTTPAuth/', {
            auth: {
                username: 'user',
                password: 'pass'
            }
        })
        cy.contains('Login Success1').should('be.visible')
    })
})