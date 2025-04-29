describe(' Radio Button Test', () => {
    it(' Tc1 - Select radio button', () => {
        cy.visit('https://form.jotform.com/251177277835466')
        cy.get('#input_15_0').check({ force: true }).should('be.checked')
    })

    it.only(' Tc2 - Select Checkbox ', () => {
        cy.visit('https://form.jotform.com/251177277835466')
        cy.get('#input_31_0').check({ force: true }).should('be.checked')
        cy.get('#input_31_0').uncheck({ force: true }).should('not.be.checked')

        // cy.get('#input_31_0 :checked').should('be.checked')

    })
    it('TC3 - Multiple Checkboxes', () => {
        cy.visit('https://form.jotform.com/251177277835466')
        cy.get('input[type="checkbox"]').check(['Type option 1', 'Type option 2'], { force: true }).should('be.checked')

    })


})