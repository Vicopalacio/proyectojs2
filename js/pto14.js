let frase = prompt("Ingrese una frase")
let salida = ""

for(let i = 0; i < frase.length; i++){
    let letra = frase[i]
    console.log(letra)
    if(letra != " "){
        letra = letra + "-" 
    }
    salida = salida + letra
    console.log(salida)
}document.write(salida)