describe(' dropdown test in cypress', () => {

    // it(' Dropdown test', () => {

    //     // select -> .select  
    //     // cy.select()  => Not valid , not invalid
    //     // cy.get().select()

    //     // Index  - 0, 1,2
    //     // value -
    //     // text
    //     // {force:true}

    //     cy.visit('https://ecommerce-playground.lambdatest.io/')
    //     cy.get('.figure-img.img-fluid.lazy-load').eq(1).click()
    //     // select by Index
    //     //cy.get('#input-sort-212403').select(1)
    //     // select by value
    //     //cy.get('#input-sort-212403').select('https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18&sort=order_quantity&order=DESC')
    //     // select by text
    //     cy.get('#input-sort-212403').select('Best sellers')
    //     cy.get('#input-sort-212403 option:selected').should('have.text', 'Best sellers')


    // })

    // Multi- select 
    // .select(['India','UAE'])

    it.skip(' Dropdown without multi select || Dynamic dropdown ', () => {

        cy.visit('https://www.amazon.ae/')
        cy.get('#twotabsearchtextbox').first().type('iphone')
        cy.get('.two-pane-results-container').find('>div').contains(' 15 pro max').click()
    })
    it.skip(' Multi select dropdown', () => {
        cy.visit('https://demo.mobiscroll.com/react/select/multiple-select')
        cy.get('#multiple-select-input').click({ force: true })
        const optionsToSelect = ['Books', 'Electronics & Computers']

        optionsToSelect.forEach(option => {
            cy.get('[role="listbox"]').contains(option).click()

        })


        // cy.get('[role="listbox"]').contains('Books').click()
        // cy.get('[role="listbox"]').contains('Electronics & Computers').click()

    })
    it.only('Multi Select Dropdown - Cypress TC2', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/select')
        cy.get('#spices-select-multi').select(['Chili Powder', 'Ginger'])

    })


})