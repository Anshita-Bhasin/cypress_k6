describe(' Open New Tab ', () => {
    it(' Approach1 ', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').invoke('removeAttr', 'target').click()
    })
    it('Approach 2', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example>a').click()
        // cy.get('.example>a').invoke('attr', 'target', '_self').click()
    })


})

