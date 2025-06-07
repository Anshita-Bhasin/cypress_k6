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

describe.only('Handle window.open', () => {
    it.only('should stub the window.open and visit the URL directly', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.get('.example>a').click();

        cy.get('@windowOpen').should('be.calledWith', 'https://the-internet.herokuapp.com/windows/new');

        cy.visit('https://the-internet.herokuapp.com/windows/new');

        cy.url().should('include', 'https://example.com');
    });

    it.only('should simulate window location change', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.window().then((win) => {
            win.location.href = 'https://the-internet.herokuapp.com/windows/new';
        });

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    });

});