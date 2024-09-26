/* # As a user
#Given que existe un usuario con credenciales inválidas
#When selecciona el botón "Login"
#Then el usuario no es autenticado satisfactoriamente
#And el usuario visualiza el siguiente mensaje "Your username is invalid!" */

describe('Test Login', function () {
    beforeEach(()=> {
        cy.visit("https://the-internet.herokuapp.com/login")
    })
    //Login
    it('Ingresa al login', function () {
        //Ingresa usuario
        cy.get('#username').type("omsmith")
        //ingresa contraseña
        cy.get('#password').type("SuperSecretPassord!")
        //Login
        cy.get('.fa').click()
        //Validar que se autenticó incorrectamente
        cy.get('#flash').contains('Your username is invalid!')    
        cy.wait(500)
               
    })

}
)