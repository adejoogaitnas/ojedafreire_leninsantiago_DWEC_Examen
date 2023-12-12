// Creamos la función prototipo CuentaBancaria como indica el enunciado
function CuentaBancaria(nombre, dni, saldo = 0) {
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    // Inicialización del atributo numeroCuenta con un número de cuenta español aleatorio
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');

    // Método para mostrar los datos de la cuenta por consola
    this.mostrarDatos = function () {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`DNI: ${this.dni}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: ${this.saldo}€`);
        console.log(`-----------------------------------`);
        console.log('\n');
        
    };

    // Método para realizar un ingreso en la cuenta
    this.realizarIngreso = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
        } else {
            console.log('El monto debe ser un número positivo.');
        }
    };

    // Método para realizar un retiro de la cuenta
    this.realizarRetiro = function (monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
        } else {
            console.log('Monto inválido o insuficiente saldo para realizar el retiro.');
        }
    };

    // Método para realizar una transferencia a otra cuenta
    this.realizarTransferencia = function (cuentaDestino, monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            cuentaDestino.realizarIngreso(monto);
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
        } else {
            console.log('Monto inválido o insuficiente saldo para realizar la transferencia.');
        }
    };
}

// Creamos los objetos para la clase CuentaBancaria
let cuentaJuan = new CuentaBancaria("Juan Pérez", "12345678A", 1000);
let cuentaAna = new CuentaBancaria("Ana Gómez", "87654321B", 500);

// Imprimimos por consola los datos iniciales de las cuentas
cuentaJuan.mostrarDatos();
cuentaAna.mostrarDatos();

//Realizamos las operaciones en los objetos
cuentaAna.realizarIngreso(100);
cuentaAna.realizarTransferencia(cuentaJuan, 300);

// Imprimimos por consola los datos después de las operaciones
cuentaJuan.mostrarDatos();
cuentaAna.mostrarDatos();
