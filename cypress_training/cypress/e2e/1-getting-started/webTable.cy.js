describe(' Handling Web Table', () => {

    it(' Fetch name of employess', () => {
        cy.visit('https://datatables.net/')
        let namesInLondon = [];
        cy.get('#example tbody tr').each(($row) => {
            const office = $row.find('td').eq(2).text()
            //cy.log(office)
            if (office === 'New York') {
                const name = $row.find('td').eq(0).text()
                namesInLondon.push(name)
            }

        }).then(() => {
            cy.log(' Names in London', namesInLondon)
        })
    })


    it(' verify total number of rows', () => {
        cy.visit('https://datatables.net/')
        cy.get('#example tbody tr').should('have.length', 10)
        cy.get('#example thead tr th').should('have.length', 6)
    })

    it('Searrh Employee & verify the result', () => {
        cy.visit('https://datatables.net/')
        cy.get('input[type="search"]').type('London')
        cy.get('#example tbody tr').each(($row) => {
            cy.wrap($row).find('td').eq(2).should('contain.text', 'London')
        })
    })

    it(' Change entries per page & verify row count ', () => {
        cy.visit('https://datatables.net/')
        cy.get('.dt-input').first().select('25')
        cy.get('#example tbody tr').should('have.length.at.most', 25)
        cy.get('.dt-input').first().select('50')
        cy.get('#example tbody tr').should('have.length.at.most', 50)

    })


    it.only('Pagination', () => {
        cy.visit('https://datatables.net/')
        cy.get('.dt-paging-button.current').should('contain.text', '1')
        cy.get('.dt-paging-button.next').click()
        cy.get('.dt-paging-button.current').should('contain.text', '2')
        cy.get('#example tbody tr').should('have.length.greaterThan', 0)

    })


});


