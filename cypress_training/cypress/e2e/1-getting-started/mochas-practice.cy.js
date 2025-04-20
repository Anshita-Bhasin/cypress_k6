// describe(' Mocha Hooks Example', () => {

//     before(() => {
//         cy.log(" *** Welcome to LIVE Training *** ") // 1
//     })

//     beforeEach(() => {

//         cy.log("*** Welcome to Cypress Sessions *** ")
//     })
//     it(' Test 1', () => {

//         cy.log(" *** test 1 *** ")
//     })

//     it.skip(' test 2 ', () => {
//         cy.log(' *** test 2*** ')
//     })
//     afterEach(() => {
//         cy.log(" **** Bye **** ")
//     })
//     after(() => {
//         cy.log(" *** Today's session is completed *** ")
//     })

// })
// 1st Test
// Welcome to LIVE Training 
// Welcome to Cypress Sessions
// test1
// Bye

// 2nd test

// Welcome to Cypress Sessions
// test 2
// Bye

// Today's session is completed


// afterEach(() => {

//     cy.log(" *** Outside the block *** ")
// })
// describe(" Mocha Hoooks 2 *** ", () => {

//     it(" Inside Test - TestCase2 ", () => {

//         cy.log(" This is test2 inside Test Suite 2 ***")
//     })
//     afterEach(() => {

//         cy.log(" *** Inside the block after each *** ")
//     })
// })

// // it

// it(" Outside test", () => {
//     cy.log(" ** test outside the block **")
// })

// before(() => {
//     describe('Wrong way', () => {
//         it('should fail', () => {
//             cy.log(" ** inside before ***")
//         });
//     });
// });



before(() => {
    cy.log(" *** outside describe block before all - launch browser **** ")
})
beforeEach(() => {
    cy.log(" **** outside describe block || before each **  ")
})
after(() => {
    cy.log(" **** outside describe || After all - closing browser  *** ")
})
afterEach(() => {
    cy.log(" **** outside **** ")
})

describe(' 1 - describe || Mocha Hooks Example', () => {
    before(() => {
        cy.log(" *** before all - Inside describe ||| Welcome to LIVE Training *** ") // 1
    })

    beforeEach(() => {

        cy.log("*** Welcome to Cypress Sessions *** ")
    })
    it(' Test 1', () => {
        cy.log(" *** test 1 *** ")
    })
    // it(' test 2 ', () => {
    //     cy.log(' *** test 2*** ')
    // })
    afterEach(() => {
        cy.log(" **** Bye **** ")
    })
    after(() => {
        cy.log(" *** Today's session is completed *** ")
    })

})
describe(' 2 - describe || Mocha Hooks Example', () => {
    before(() => {
        cy.log(" *** Welcome to LIVE Training *** ") // 1
    })
    beforeEach(() => {

        cy.log("*** Welcome to Cypress Sessions *** ")
    })
    it(' Test 1', () => {
        cy.log(" *** test 1 *** ")
    })

    it(' test 2 ', () => {
        cy.log(' *** test 2*** ')
    })
    afterEach(() => {
        cy.log(" **** Bye **** ")
    })
    after(() => {
        cy.log(" *** Today's session is completed *** ")
    })

})