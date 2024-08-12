import { elementos as el} from "./elements"
class Login{

    acessarPagina(){
        cy.visit('https://www.saucedemo.com/')
    }

    validarAcessoAPagina(){
        cy.url().should('eq', 'https://www.saucedemo.com/');
    }

    fazerLogin(usuario, senha){
        if(usuario){
            cy.get(el.userName).clear().type(usuario)
        }
        
        if (senha) {
            cy.get(el.passWord).clear().type(senha);
        }
        cy.get(el.btnLogin).click() 

    }

    validarMensagemDeErro(mensagem){
        cy.get(el.errorMsg).should('contain.text', mensagem);

    }

}
export default new Login();