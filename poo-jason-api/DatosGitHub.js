// Guardamos en una variable los datos de github de mi cuenta en formato Json 
let datosCuenta = '{"login":"adejoogaitnas","id":"02142","email":"adejoogaitnas@gmail.com","public_repos":"5"}';
//Creamos una clase donde en el constructor ingresamos los datos en formato Json
class DatosGitHub{
    constructor(gitHubDatos) {
        // Le damos formato Js a los datos que ingresamos en formato Json 
        let datos = JSON.parse(gitHubDatos);
        this.login = datos.login;
        this.id = datos.id;
        this.email = datos.email;
        this.public_repos = datos.public_repos;
    }
    // Métdodo para imprimir por consola los datos
    datosRecibidos() {
        console.log(`El Usuario de GitHub ${this.login} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
    }
}

//Creamos un objeto he imprimimos los datos del objeto
let cuenta = new DatosGitHub(datosCuenta);
cuenta.datosRecibidos();