
import userData from "../fixtures/user-data.json"
describe('orange hrm tests', () => {


  const selectorlist = {
    usernamefield: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    passwordFild: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    loginButton: '.oxd-button'
  }

const userData ={
  userSucess:{
    username:"admin",
    password:"admin123"
  },

  userFail:{
    username:"teste",
    password:"teste"

  }
}
  

  it('login sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.userSucess.username)
    cy.get(selectorlist.passwordFild).type(userData.userSucess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location("pathname").should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
  })
  it('login fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorlist.usernamefield).type("teste")
    cy.get(selectorlist.passwordFild).type("teste")
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
})  