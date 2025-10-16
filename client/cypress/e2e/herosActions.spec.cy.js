import HeroLogin from '../e2e/pages/heroLogin'
import userData from '../fixtures/userData.json'
import Dashboard from "../e2e/pages/dashboard"
import NewHero from './pages/newHero'
import HerosAction from './pages/herosActions'

const heroLogin = new HeroLogin()
const dashboard = new Dashboard()
const newHero = new NewHero()
const herosAction = new HerosAction()


describe('Hero Actions test spec', () => {


    it('Like Hero - Success', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()

        herosAction.heroLikeCurrentFans(0).then((fansBefore) => {
            herosAction.heroLikeClick()
            herosAction.heroLikeClick(0, fansBefore)}
        )
    })  

    

    it('Buy Hero - Success', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()


        herosAction.heroCurrentSaves(0).then((savesBefore) => {
            herosAction.heroMoneyButton(0)
            herosAction.heroHireYesButton()
            cy.wait(1000)
            herosAction.heroSavesCheck(0, savesBefore)
        })
    })

    it('Buy Hero - Unchanged', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()


        herosAction.heroCurrentSaves(0).then((savesBefore) => {
            herosAction.heroMoneyButton(0)
            herosAction.heroHireNoButton()
            cy.wait(1000)
            herosAction.heroSavesUnchanged(0, savesBefore)
        })
    })

    it('Edit Hero Price - Success', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()
        
        herosAction.heroEdit(0)
        herosAction.accessHeroActionsEdit()
        
        herosAction.heroCurrentPrice(0).then((oldPrice) => {
             const newPrice = oldPrice + 5;
             herosAction.heroEditPrice(newPrice)
             herosAction.heroClickSaveButton()
             cy.wait(1000)
             herosAction.heroCurrentPrice(0).then((updatedPrice) => {
                expect(updatedPrice).to.eq(newPrice)       
                expect(updatedPrice).not.to.eq(oldPrice)  
            })
        })

    })

    it('Delete Hero - Success', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()

        herosAction.heroDelete(9)
        herosAction.heroDeleteYesButton()
    })  

    it('Delete Hero - Fail', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()

        herosAction.heroDelete(8)
        herosAction.heroDeleteNoButton()
    })  
})

