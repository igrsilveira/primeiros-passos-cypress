import userData from '../fixtures/user-data.json'
describe('template spec', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
    lastNameField: ":nth-child(3) > :nth-child(2) > .oxd-input",
    genericField: ".oxd-input--active",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    saveButton: ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button",

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
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
