let texto = prompt("Ingrese un texto");
console.log(texto.length)
console.log(texto.charAt())
console.log(texto)

for(let texto; texto.charAt(0) === "a" || texto.charAt(0) === "e" || texto.charAt(0) === "i" || texto.charAt(0) === "o" || texto.charAt(0) === "u"; texto = texto.charAt++){
    document.write("La vocal es: " + texto.charAt(0))
    document.write(texto.length)
}


// while(texto >= 0){
//     if (texto.charAt(0) === "a" || texto.charAt(0) === "e" || texto.charAt(0) === "i" || texto.charAt(0) === "o" || texto.charAt(0) === "u"){
//         document.write("la vocal es :" + texto.charAt(0));
//         texto = texto++
//     }
// }