function ins(){
    let nuevoElemento = document.createElement("li");
            
    let texto = document.createTextNode("Nuevo Elemento");
    nuevoElemento.appendChild(texto);

    let lista = document.querySelector("ul");

    let segundoElemento = lista.children[1];

    lista.insertBefore(nuevoElemento, segundoElemento);
}