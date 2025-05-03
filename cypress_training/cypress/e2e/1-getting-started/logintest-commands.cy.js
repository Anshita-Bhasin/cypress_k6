describe(" Common Commands Example", () => {
    it(' Test login page', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })
})