function crearNueva() {
   ventana = window.open("https://www.cesurformacion.com","nuevaVentana","width=500,height=500")
}

function cerrarNueva() {
    ventana.close()
}

function inicializar() {
    document.getElementById("crear-ventana").onclick=crearNueva
    document.getElementById("cerrar-ventana").onclick=cerrarNueva
}