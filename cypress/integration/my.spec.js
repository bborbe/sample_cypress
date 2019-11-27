/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('desk', () => {
    cy.visit('#login')
    cy.get('title').should('contain', 'heise online');
  })
})
