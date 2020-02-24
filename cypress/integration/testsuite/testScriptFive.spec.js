const I = require('../../testbase/testbase.js')
const LoginPage = require('../../pageObjects/loginPage.json')
const HomePage = require('../../pageObjects/homePage.json')
const TestData = require('../../testdata/testdata.json')

context('testsuite', ()=> {

    beforeEach(function () {
        I.Open(Cypress.config().baseUrl)
    })

    it('testCaseOne', () => {
        I.ValidateUI(HomePage.Logo)
        I.Click(HomePage.LoginLink)
        I.Fill(LoginPage.Email, TestData.UserData.Email)
        I.Click(LoginPage.ContinueButton)
        I.Fill(LoginPage.Password, TestData.UserData.Password)
        I.Click(LoginPage.ContinueButton)
        I.DontSee(HomePage.LoginLink)
    })
})