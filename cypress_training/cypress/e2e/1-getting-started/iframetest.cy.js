describe('Testing IFrame', () => {

    it('Single Iframe - Test using DOM Access', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get('#singleframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('input[type="text"]')
            .clear()
            .type("testing")

    })
    it.skip('Nested Iframe - Test using DOM Access', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get('a[href="#Multiple"]').click()

        cy.get('iframe[src="MultipleFrames.html"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .within(() => {
                cy.get('iframe[src="SingleFrame.html"]')
                    .its('0.contentDocument.body')
                    .should('not.be.empty')
                    .then(cy.wrap)
                    .find('input[type="text"]')
                    .clear()
                    .type("Nested Iframe")
            })


    })

    it.only(' IFrame test using common command', () => {
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.getIframeBody('#singleframe').within(() => {
            cy.get('input[type="text"]').clear().type('IFRAME TESTING')
        })

    })

})