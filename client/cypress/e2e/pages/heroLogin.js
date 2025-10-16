class HeroLogin {

    selectorsList () {
        const selectors = {
            emailField: "[data-cy='email']",
            passwordField: "[data-cy=password",
            signInButton: ".w-\[380px\] > .flex > .undefined"

        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/heroes')
    }

    clickLoginButton () {
        cy.contains('button', 'Login').click()
    }

    loginWithUser(email, password) {
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    clickSignInButton() {
        cy.contains('button', 'Sign in').click();
    }

    loginErrorMessage() {
        cy.get('body').should('contain', "Invalid email or password")

    }






}

export default HeroLogin