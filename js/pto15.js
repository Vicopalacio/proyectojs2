let frase = prompt("Ingrese una frase");
console.log(frase.length)
let contarVocales = 0; 

for(let i = 0; i < frase.length; i++){
    if(frase.charAt(i) === "a" || frase.charAt(i) === "e" || frase.charAt(i) === "i" || frase.charAt(i) === "o" || frase.charAt(i) === "u"){
        document.write(++contarVocales);
    }
}