let filas = parseInt(prompt("Ingrese un numero de filas"));
let columnas = parseInt(prompt("Ingrese un numero de columnas"));

console.log(filas)
console.log(columnas)

document.write(`<table class="tabla">
        <tbody>`)
for(let Ifila = 0; Ifila < filas; Ifila++){
    document.write(`
        <tr>
            <td>hola</td>
            <td>mundo</td>
        </tr>`)
}
document.write(`
        </tbody>
    </table>`)