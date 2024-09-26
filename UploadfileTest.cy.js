/* # As a user
#Given que existe un usuario con un archivo válido para cargar
#And el usuario carga un archivo válido en el botón de carga
#When selecciona el botón "Upload"
#Then el usuario carga satisfactoriamente su archivo
#And el usuario visualiza el siguiente mensaje "File Uploaded!" */

describe('Test Upload file', function () {
    beforeEach(()=> {
        cy.visit("https://the-internet.herokuapp.com/upload")
    })
    //upload site
    it('Upload', function () {
        //Upload file
        cy.get('#file-upload').selectFile('C:/Users/ingha/Downloads/LD.png')
        //Submit
        cy.get('#file-submit').click()
        //confirmar una carga exitosa
        cy.get('h3').contains('File Upload')
        cy.wait(500)
               
    })

}
)