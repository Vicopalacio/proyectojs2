let numero = parseInt (prompt("Ingrese un numero"))
let resultado = numero + numero;


while(confirm = true){
    if (isNaN (numero)){
        alert("Valor erroneo")
        numero = parseInt (prompt("Ingrese solo numero"))
    }else if (confirm = false){
        document.write(numero + numero)
    }
}
