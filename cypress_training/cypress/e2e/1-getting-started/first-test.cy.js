describe('My First Test ', () => {

    it('Visit website', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.opencart.com/index.php?route=cms/demo');
        cy.get('.nav > :nth-child(3) > a').click();
        cy.get(':nth-child(3) > label').click();
        cy.get(':nth-child(3) > label > input').check();
        cy.get(':nth-child(3) > :nth-child(1) > section > .extension-preview > a > .extension-description').click();
        cy.get('#button-purchase').click();
        /* ==== End Cypress Studio ==== */
    })

    it('Second test 12', () => {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io/todo');
        cy.get(':nth-child(1) > .view > .toggle').check();
        cy.get(':nth-child(2) > .view > label').click();
        cy.get(':nth-child(2) > .view > .toggle').check();
        cy.get('.filters > :nth-child(2) > a').click();
        cy.get('.view > label').click();
        cy.get('.view > label').click();
        cy.get('.toggle').check();
        cy.get('.toggle').check();
        cy.get(':nth-child(1) > :nth-child(2) > a').click();
        cy.get(':nth-child(1) > :nth-child(3) > a').click();
        cy.get('.navbar-brand').click();
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click();
        cy.get('#query-btn').click();
        /* ==== End Cypress Studio ==== */
    })
})


// Cypress Studio 