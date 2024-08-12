import Login from '../pages/login'
import Iventory from '../pages/inventory';

describe('Login com credenciais válidas', () => {

  beforeEach(() => {
    Login.acessarPagina();
  });
  it('Login com credenciais válidas', () => {
          
    Login.fazerLogin('standard_user','secret_sauce')
    Iventory.validarAcessoAPagina()
  })

  it('Login com senha incorreta', () => {
    
    Login.fazerLogin('standard_user','senha_incorreta')
    Login.validarMensagemDeErro('Epic sadface: Username and password do not match any user in this service')
    Login.validarAcessoAPagina()
    
  });

  it('Login com campo de senha vazio', () => {
    Login.fazerLogin('standard_user', '')
    Login.validarMensagemDeErro('Epic sadface: Password is required')
    Login.validarAcessoAPagina()
  });
  
  it('Login com campo de nome de usuário vazio', () => {
    Login.fazerLogin('', 'secret_sauce')
    Login.validarMensagemDeErro('Epic sadface: Username is required')
    Login.validarAcessoAPagina()
  });
  it('Login com ambos os campos vazios', () => {
    Login.fazerLogin('', '')
    Login.validarMensagemDeErro('Epic sadface: Username is required')
    Login.validarAcessoAPagina()
  });
  
})