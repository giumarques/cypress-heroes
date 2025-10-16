import 'cypress-file-upload'

class NewHero {
    selectorsList() {
        const selectors = {
            newHeroName: "[data-cy='nameInput']",
            newHeroPrice: "[data-cy='priceInput']",
            newHeroFans: "[data-cy='fansInput']",
            newHeroSaves: "[data-cy='savesInput']",
            newHeroPower: "[data-cy='powersSelect']",
            newHeroAvatar: "[data-cy='avatarFile']",
            newHeroAvatarImg: "[data-cy='avatarFile']",
        }

        return selectors
    }

    acessNewHeroPage() {
        cy.visit('/heroes/new')
    }

    newHeroButton() {
        cy.contains('button', 'New Hero').click()
    }

    newHeroName() {
        cy.get(this.selectorsList().newHeroName).type('Chapolin Colorado')
    }

    newHeroPrice() {
        cy.get(this.selectorsList().newHeroPrice).type('120')
    }

    newHeroFans() {
        cy.get(this.selectorsList().newHeroFans).type('2545')
    }

    newHeroFansArrow() {
        cy.get(this.selectorsList().newHeroFans).focus().type('{uparrow}{uparrow}{uparrow}')
    }

    newHeroSaves() {
        cy.get(this.selectorsList().newHeroSaves).type('45')
    }

    newHeroPower() {
        cy.get(this.selectorsList().newHeroPower).select(['Super Logistics'])
    }

    newHeroAvatar() {
        cy.get(this.selectorsList().newHeroAvatar).click()
    }

    newHeroAvatarImg() {
        cy.get(this.selectorsList().newHeroAvatarImg).attachFile('/CH.png')
    }

    newHeroSubmit() {
        cy.contains('button', 'Submit').click()
    }

    

}

export default NewHero