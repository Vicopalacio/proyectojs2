let texto = prompt("Ingrese un texto");
console.log(texto.length)
console.log(texto.charAt())
console.log(texto)


for(let i = 0; i < texto.length; i++){
    if(texto.charAt(i) === "a" || texto.charAt(i) === "e" || texto.charAt(i) === "i" || texto.charAt(i) === "o" || texto.charAt(i) === "u"){
        document.write("La vocal es: " + texto.charAt(i));
        break;
    }
}
