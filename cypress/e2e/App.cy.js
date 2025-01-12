describe('Star wars app', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')

  })
  it('successfully lands on home page', () => {
    cy.title().should('eq', 'Star Wars Universe')
  })

  it('has header', () => {
    cy.get('[class=app__heading]').should('contain.text', 'Star Wars') 
   })

   it('has search bar', () => {
    cy.get('[class=search__container]').should('exist') 
   })

   it('has pagination bar', () => {
    cy.get('[class=pagination]').should('exist') 
   })
    })