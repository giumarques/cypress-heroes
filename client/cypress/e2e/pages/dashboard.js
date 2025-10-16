class Dashboard {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".flex-wrap"
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/heroes')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}

export default Dashboard