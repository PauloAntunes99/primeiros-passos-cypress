
import userData from "../fixtures/user-data.json"
describe('orange hrm tests', () => {


  const selectorlist = {
    usernamefield: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    passwordFild: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    loginButton: '.oxd-button',
    myInfoBotton:':nth-child(6) > .oxd-main-menu-item',
    myName:'.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input',
    myMidName:':nth-child(2) > :nth-child(2) > .oxd-input',
    myLastName:':nth-child(3) > :nth-child(2) > .oxd-input',
    myId:':nth-child(3) > :nth-child(2) > .oxd-input',
    myOtherId:':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'

  }



  it.only('user info update sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.userSucess.username)
    cy.get(selectorlist.passwordFild).type(userData.userSucess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location("pathname").should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    cy.get(selectorlist.myInfoBotton).click()
    cy.get(selectorlist.myName).type(userData.info.myName)
    cy.get(selectorlist.myMidName).type(userData.info.myMidName)
    cy.get(selectorlist.myLastName).type(userData.info.myLastName)
    cy.get(selectorlist.myId).type(userData.info.myId)
    cy.get(selectorlist.myOtherId).type(userData.info.myOtherId)


  })
  it('login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type("teste")
    cy.get(selectorlist.passwordFild).type("teste")
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
})  