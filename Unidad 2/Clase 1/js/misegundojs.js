function cargar() {
    /* var valor = document.getElementById('boton') */
    console.log("Has apretado el boton")
}

function recargar() {
    console.log("Has recargado la página")
}

function verde() {
    var caja = document.getElementById('caja')
    caja.style.backgroundColor = 'green'
}

function rojo() {
    var caja = document.getElementById('caja')
    caja.style.backgroundColor = 'red'
}

function cambiarEstilo(color) {
    var caja = document.getElementById('caja')
    caja.style.backgroundColor = color
}