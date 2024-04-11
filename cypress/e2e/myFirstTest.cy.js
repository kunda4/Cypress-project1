describe('first test', ()=> {
    it('Verify the title-positive test', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify the title-negative test', ()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM12345')
    })
})