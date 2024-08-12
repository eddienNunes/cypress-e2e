# Cypress Test Automation Project - SauceDemo

Este repositório contém a automação de testes para a aplicação SauceDemo, utilizando Cypress 13.6.4 e o padrão Page Object Model (POM). Os testes foram escritos em BDD e até o momento, cinco testes foram automatizados para a página de Login


## Padrão Page Object Model (POM)

O padrão POM foi utilizado para organizar o código de forma que cada página da aplicação tenha sua própria classe, encapsulando as interações e localizadores dos elementos. Isso facilita a manutenção e escalabilidade dos testes.

## Casos de Teste em BDD
Os casos de teste foram escritos em BDD, utilizando a sintaxe Gherkin. A seguir, um exemplo de um cenário de teste:

Funcionalidade: Login no site SauceDemo

  Cenário: Login com credenciais válidas
    Dado que o usuário acessa a página de login do site SauceDemo
    E o usuário insere o nome de usuário "standard_user"
    E o usuário insere a senha "Password"
    Quando o usuário clica no botão de login
    Então o usuário é redirecionado para a página de inventário
    E a URL deve conter "/inventory.html"