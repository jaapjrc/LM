function CheckPassword() {
    let input = prompt("Contraseña:")
    let password = "FP2023";
    if (input == password){
        alert("Correcto")
        return true
    } else {
        alert("Incorrecto")
        return false
    }
}