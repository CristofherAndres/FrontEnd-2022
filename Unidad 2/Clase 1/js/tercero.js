function saludar(nombre) {
    alert('Hola ' + nombre)
}

function despedida(nombre) {
    alert('Adios ' + nombre)
}

function ingresarUsuario(callback) {
    var nombre = prompt('Por favor indica tu nombre')
    callback(nombre)
}

ingresarUsuario(saludar);
ingresarUsuario(despedida);