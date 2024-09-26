/* As a user
Given que existe un usuario con credenciales válidas
When selecciona el botón "Login"
Then el usuario es autenticado satisfactoriamente
And el usuario visualiza el siguiente mensaje de confirmación "You logged into a secure area!"
 */
describe('Test Login', function () {
    beforeEach(()=> {
        cy.visit("https://the-internet.herokuapp.com/login")
    })
    //Login
    it('Ingresa al login', function () {
        //Ingresa usuario
        cy.get('#username').type("tomsmith")
        //ingresa contraseña
        cy.get('#password').type("SuperSecretPassword!")
        //Login
        cy.get('.fa').click()
        //Validar que se autenticó correctamente
        cy.get('#flash').contains('You logged into a secure area!')    
        cy.wait(500)
               
    })

}
)