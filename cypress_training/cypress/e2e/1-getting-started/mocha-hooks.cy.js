// Mocha Hooks


// describe -> group of test , test suite
// it -> test case

// Hooks -> 
// before: It runs once before the test in a test suite
//beforeEach: It runs before each test in a test suite
// After : It runs once and after the last test in a test suite
// AfterEach : It runs after each test in a test suite

describe(' TestSuite 1', () => {
    before(function () { // Before ALl
        cy.log(" *** before Hook *** ")
        cy.log(" *** Run once before all test *** ")
    })

    beforeEach(() => { //
        cy.log(" *** before each : runs before each test****")
    })
    after(() => { // After All
        cy.log(" *** AFter hook *** ")
        cy.log(" *** All Done *** ")
    })

    afterEach(() => { // After Each 
        cy.log(" *** After Each **** ")
        cy.log(" *** Your test is executes **** ")
    })
    it('Test1', () => {
        cy.log(" **** 1st test **** ")
    })

    it(' Test2 ', () => {
        cy.log(" *** test2 ***")
    })
})

