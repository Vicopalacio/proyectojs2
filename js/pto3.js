//pedir una cadena de texto
//cuando el usuario pulse cancelar debe aparecer el texto concatenado con -

let texto = prompt("ingrese una frase");


if (confirm()=== true){
    document.write(texto)
}else {
    document.write(texto + "-")
}