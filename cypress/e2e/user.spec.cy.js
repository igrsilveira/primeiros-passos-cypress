import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js' 
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('template spec', () => {

  const selectorsList = {
    firstNameField: ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
    lastNameField: ":nth-child(3) > :nth-child(2) > .oxd-input",
    genericField: ".oxd-input--active",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    saveButton: ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button",

  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstnameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastnameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmploTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().click().type('2025-03-03');
    cy.get(selectorsList.genericCombobox).eq(0).click();
    cy.get(selectorsList.secondItemCombobox).click(); //Nacionalidade
    cy.get(selectorsList.genericCombobox).eq(1).click();
    cy.get(selectorsList.thirdItemCombobox).click();
    cy.get(selectorsList.saveButton).click()
    
  })

//   it('Login - Fail', () => {
//     cy.visit('/auth/login')
//     cy.get(selectorsList.usernameField).type(userData.userFail.username)
//     cy.get(selectorsList.passwordField).type(userData.userFail.password)
//     cy.get(selectorsList.loginButton).type('Test')
//     cy.get(selectorsList.wrongCredentialAlert).click()
//   })
// })
})
