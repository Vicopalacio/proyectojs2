let numero = prompt ("Ingrese un numero del 1 al 10");

switch (numero){
    case "0":
    case "1":
    case "2":
        document.write("Muy deficiente");
break;
    case "3":
    case "4":
        document.write("Insuficiente");
break;
    case "5":
    case "6":
        document.write("Suficiente");
break;
    case "7":
        document.write("Bien");
break;
    case "8":
    case "9":
        document.write("Notable");
break;
    case "10":
        document.write("Sobresaliente");
default:
        document.write("Introduce un numero valido");
}