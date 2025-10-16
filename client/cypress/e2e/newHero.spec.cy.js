import HeroLogin from '../e2e/pages/heroLogin'
import userData from '../fixtures/userData.json'
import Dashboard from "../e2e/pages/dashboard"
import NewHero from "../e2e/pages/newHero"

const heroLogin = new HeroLogin()
const dashboard = new Dashboard()
const newHero = new NewHero()


describe('New Hero test spec', () => {

    it('Create New Hero - Success', () => {

        heroLogin.accessLoginPage()
        heroLogin.clickLoginButton()
        heroLogin.loginWithUser(userData.userSuccess.email, userData.userSuccess.password)
        heroLogin.clickSignInButton()

        dashboard.checkDashboardPage()

        newHero.newHeroButton()
        newHero.acessNewHeroPage()
        newHero.newHeroName()
        newHero.newHeroPrice()
        newHero.newHeroFans()
        newHero.newHeroSaves()
        newHero.newHeroPower()
        newHero.newHeroAvatar()
        newHero.newHeroAvatarImg()
        newHero.newHeroSubmit()
        dashboard.checkDashboardPage()
    })


})