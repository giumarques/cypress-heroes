import HeroLogin from '../e2e/pages/heroLogin'
import userData from '../fixtures/userData.json'
import Dashboard from "../e2e/pages/dashboard"

const heroLogin = new HeroLogin()
const dashboard = new Dashboard()


describe('Login Cypress Hero test spec', () => {

    it('Login - Succes', () => {
        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()
        dashboard.checkDashboardPage()

    })

    it('Login - Fail', () => {
        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userFail.email, userData.userFail.password)
        heroLogin.clickSignInButton()
        heroLogin.loginErrorMessage()
        dashboard.checkDashboardPage()

    })





})