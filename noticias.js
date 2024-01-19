function preguntar(){
    let respuesta = window.confirm("¿Quieres seguir?")

    if(respuesta){
        window.location.assign("https://elpais.com/")
    }else{
        alert("No verás las noticias")
    }
}