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


})