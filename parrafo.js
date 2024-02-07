function parrafo(){
    padre = document.querySelector('body')
    parrafos = document.querySelectorAll('p')
    
    let enlace = document.createElement('a')
    enlace.href='https://www.google.com/'
    enlace.target='_blank'
    enlace.innerHTML='  Enlace'
    parrafos[2].appendChild(enlace)
    
    let elemento_creado = document.createElement('p')
    elemento_creado.textContent = 'Párrafo nuevo'
    elemento_creado.style.color = 'red'
    padre.appendChild(elemento_creado)

    padre.removeChild(parrafos[1])
}