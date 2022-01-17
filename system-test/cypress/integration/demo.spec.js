// describe('My first grup', () => {
//   it('My first test', () => {
//     //write test here
//     const User = {
//       age: 25,
//       skills: ['JS', 'Cypress']
//     }
//     expect(User.age).to.equal(25)
//     expect(User.skills).to.have.length(2)
//   })

//   it('My second test', () => {

//   })
// })
describe('sign in', () => {

  it('sign in without user and password..', () => {
    cy.visit('/')
    cy.get('#signin form email error').should('not.exist')
    cy.get('#signin form password error').should('not.exist')
  })
})