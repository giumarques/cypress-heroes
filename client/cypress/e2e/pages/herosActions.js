import 'cypress-file-upload'


class HerosAction {
    selectorsList() {
        const selectors = {
            heroLike: "[data-cy='like']",
            heroFans: "[data-cy='fans']",
            heroMoney: "[data-cy='money']",
            heroSaves: "[data-cy='saves']",
            heroEdit: "[data-cy='pencil']",
            heroCurrentPrice: "[data-cy='price']",
            heroNewPrice: "[data-cy='priceInput']",
            heroDelete: "[data-cy='trash']",

          
        }

        return selectors
    }

    heroLikeCurrentFans(index) {
        return cy.get(this.selectorsList().heroFans).eq(index).invoke('text').then((textBefore) => {
            return parseInt(textBefore) 
        })
    }

    heroLikeClick() {
        cy.get(this.selectorsList().heroLike).eq(0).click()
    }

    heroLikeCheck(index, fansBefore) {
        cy.get(this.selectorsList().heroFans).eq(0).should(($span) => {const fansAfter = parseInt($span.text())
        expect(fansAfter).to.eq(fansBefore + 1)})
    }


    heroCurrentSaves(index) {
        return cy.get(this.selectorsList().heroSaves).eq(index).invoke('text').then((textBefore) => {
            return parseInt(textBefore) 
        })
    }

    heroMoneyButton(index) {
        cy.get(this.selectorsList().heroMoney).eq(index).click()
    }

    heroHireYesButton() {
        cy.contains('button', 'Yes', { timeout: 10000 }).should('exist').wait(200).click({ force: true })
    }

    heroSavesCheck(index, savesBefore) {
        cy.get(this.selectorsList().heroSaves).eq(index).should(($span) => {const savesAfter = parseInt($span.text())
        expect(savesAfter).to.eq(savesBefore + 1)})
    }


    heroHireNoButton() {
        cy.contains('button', 'No').click()
    }

    heroSavesUnchanged(index, savesBefore) {
        cy.get(this.selectorsList().heroSaves).eq(index).should(($span) => {
        const savesAfter = parseInt($span.text())
        expect(savesAfter).to.eq(savesBefore)
    
    })
    }

    heroEdit(index) {
        cy.get(this.selectorsList().heroEdit).eq(index).click()
    }

    accessHeroActionsEdit() {
        cy.url().should('include', '/edit')
    }

    heroCurrentPrice(index) {
        return cy.get(this.selectorsList().heroCurrentPrice)
            .eq(index)
            .invoke('text')
            .then(text => {
                const cleaned = text.replace(/[^0-9.]/g, '')  
                return parseFloat(cleaned)
            })
    }

    heroEditPrice(newPrice) {
        cy.get(this.selectorsList().heroNewPrice).eq(0).should('be.visible').clear().type(newPrice)
    }

    heroClickSaveButton() {
        cy.contains('button', 'Submit').click()
    }

    heroCheckUpdatedPrice(index, oldPrice, newPrice) {
        cy.get(this.selectorsList().heroCurrentPrice)
          .eq(index)
          .should('not.be.empty')
          .invoke('text')
          .then(text => {
              const updatedPrice = parseFloat(text.replace(/[^0-9.]/g, ''))
              expect(updatedPrice).to.eq(newPrice)
              expect(updatedPrice).not.to.eq(oldPrice)
          })
    }

    heroDelete(index) {
        cy.get(this.selectorsList().heroDelete).eq(index).click()
    }

    heroDeleteYesButton() {
        cy.contains('button', 'Yes').click()
    }

    heroDeleteNoButton() {
        cy.contains('button', 'No').click()
    }

}

export default HerosAction