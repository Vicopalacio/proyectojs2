let dni = parseInt(prompt("Ingrese un dni 0 y 99999999"))
console.log(dni)

do{
console.log("hola")
console.log(isNaN(dni))
confirm = true;
if(isNaN(dni)){
    console.log("texto")
    alert("Valor erroneo")
    dni = parseInt(prompt("Repita el numero"))
}else if(dni >= 0 && dni <= 99999999){
    let resultado = dni % 23;
    switch(resultado){
        case 0:
            document.write("T");
            alert("T");
        break;
        case 1:
            document.write("R");
            alert("R");
        break;
        case 2:
            document.write("W");
            alert("W");
        break;
        case 3:
            document.write("A");
            alert("A");
        break;
        case 4:
            document.write("G");
            alert("G");
        break;
        case 5:
            document.write("M");
            alert("M");
        break;
        case 6:
            document.write("Y");
            alert("Y");
        break;
        case 7:
            document.write("F");
            alert("F");
        break;
        case 8:
            document.write("P");
            alert("P");
        break;
        case 9:
            document.write("D");
            alert("D");
        break;
        case 10:
            document.write("X");
            alert("X");
        break;
        case 11:
            document.write("B");
            alert("B");
        break;
        case 12:
            document.write("N");
            alert("N");
        break;
        case 13:
            document.write("J");
            alert("J");
        break;
        case 14:
            document.write("Z");
            alert("Z");
        break;
        case 15:
            document.write("S");
            alert("S");
        break;
        case 16:
            document.write("Q");
            alert("Q");
        break;
        case 17:
            document.write("V");
            alert("V");
        break;
        case 18:
            document.write("H");
            alert("H");
        break;
        case 19:
            document.write("L");
            alert("L");
        break;
        case 20:
            document.write("C");
            alert("C");
        break;
        case 21:
            document.write("K");
            alert("K");
        break;
        case 22:
            document.write("E");
            alert("E");
        break;
        case NaN:
            alert("Valor erroneo")
        break;
        default:
            alert("Valor erroneo")
    }
}
}while(confirm = false);