let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));
let resultado = filas * columnas;

console.log(filas)
console.log(columnas)

document.write(`<table class="tabla">
        <tbody>`)
for(let Ifila = 0; Ifila < filas; Ifila++){
    document.write(`<tr>`)
    for(let Icolumna = 0; Icolumna < columnas; Icolumna++){
    document.write(`<td>${resultado}</td>`);
    resultado--;
    }
    document.write(`</tr>`)
}
document.write(`
        </tbody>
    </table>`)