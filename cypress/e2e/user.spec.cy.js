
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
    myOtherId:':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
   driverLicense:'.oxd-form[data-v-6653c066] > .oxd-form-row > div:nth-of-type(2) [data-v-957b4417] > .oxd-input',
   licenseDate:".oxd-form[data-v-6653c066] .oxd-grid-3 > div:nth-of-type(2) [placeholder='yyyy-dd-mm']",
   buttonClose:'.--close'
  }



  it.only('user info update sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type(userData.userSucess.username)
    cy.get(selectorlist.passwordFild).type(userData.userSucess.password)
    cy.get(selectorlist.loginButton).click()
    cy.location("pathname").should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains("Dashboard")
    cy.get(selectorlist.myInfoBotton).click()
    cy.get(selectorlist.myName).clear().type(userData.info.myName)
    cy.get(selectorlist.myMidName).clear().type(userData.info.myMidName)
    cy.get(selectorlist.myLastName).clear().type(userData.info.myLastName)
    cy.get(selectorlist.myId).clear().type(userData.info.myId)
    cy.get(selectorlist.myOtherId).clear().type(userData.info.myOtherId)
    cy.get(selectorlist.driverLicense).clear().type(userData.driverdriverLicense.number)
    cy.get(selectorlist.licenseDate).clear().type("2025-05-25")
    cy.get(selectorlist.buttonClose).click()
    cy.get('.oxd-button[data-v-6653c066]').click()
    cy.get('.oxd-form-actions[data-v-6653c066]').click()


   
  })
  it('login fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorlist.usernamefield).type("teste")
    cy.get(selectorlist.passwordFild).type("teste")
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content')
  })
})  