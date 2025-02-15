describe('saucedemo', () => {
    it('teste de fumaca ', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="title"]').contains("Products")
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type("paulo")
      cy.get('[data-test="lastName"]').type("Antunes")
      cy.get('[data-test="postalCode"]').type("0000000")
      cy.get('[data-test="continue"]').click()
      cy.get('[data-test="finish"]').click()
      cy.get('[data-test="complete-header"]').contains("Thank you for your order!")
    })
  })
  