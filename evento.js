function inicializarEventos() {
    let parrafos = document.getElementsByTagName("p")
  
    let parrafo1 = parrafos[0]

    parrafo1.addEventListener("click", function() {
      alert("Has hecho clic en el párrafo 1")
    });
  }
  