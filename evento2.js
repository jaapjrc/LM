function inicializarEventos() {
  let elementos = document.querySelectorAll("ul li")

  let elemento1 = elementos[0]

  elemento1.addEventListener("click", function() {
    elemento1.style.fontWeight = "bold"
    elemento1.style.color = "green"
  })
}
  