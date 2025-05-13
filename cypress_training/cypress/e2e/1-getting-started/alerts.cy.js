describe('Handling Alert Box', () => {
    beforeEach(() => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
    })
    it('Test Alert Box', () => {

        // Alert Box

        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am an alert box!')
        })
        cy.get('#alertexamples').click()
        cy.get('#alertexplanation').should('contain', 'You triggered and handled the alert dialog')
    })
    // Confifrmation
    it('Test Confirmation Box', () => {
        cy.on("window:confirm", (confirmText) => {
            expect(confirmText).to.equal('I am a confirm alert')
            return false
        })
        cy.get('#confirmexample').click()
        cy.get('#confirmexplanation').should('contain', 'You clicked Cancel, confirm returned')

    })

    // Prompt
    it(' Prompt ', () => {

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('change me')
        })
        cy.get('#promptexample').click()
        cy.get('#promptexplanation').should('contain', "You clicked OK. 'prompt' returned ")
    })

})