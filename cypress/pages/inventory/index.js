class Iventory {

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')

    }

}
export default new Iventory();