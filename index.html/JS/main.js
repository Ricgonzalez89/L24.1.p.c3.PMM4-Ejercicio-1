/* EJERCICIO #2
|* Sea el array de objetos personas, donde cada objeto persona tiene 
|*    la estructura: {nombre:'Ana', edad: 20}.
|*    Se requiere programar la función nombresConEdad(edad) que retorne 
|*    un array de strings (datos simples) con los nombres de las personas 
|*    que tienen la edad enviada por argumento.
*/
let nombresConEdad = (arr, edad) => {
    let nombres = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edad === edad) {
            nombres.push(arr[i].nombre);
        }
    }
    return nombres;
};

let personas = [
    {nombre: "Ana", edad: 20},
    {nombre: "Daniela", edad: 19},
    {nombre: "Angel", edad: 19},
    {nombre: "Sabrina", edad: 20},
    {nombre: "Ricardo", edad: 18}
];

let salida = document.getElementById("salida");

salida.innerHTML += `
<br>Nombres de las personas con 20 años de edad: ${JSON.stringify(nombresConEdad(personas, 20))}
<br>Nombres de las personas con 19 años de edad: ${JSON.stringify(nombresConEdad(personas, 19))}
<br>Nombres de las personas con 18 años de edad: ${JSON.stringify(nombresConEdad(personas, 18))}
<br>Nombres de las personas con 15 años de edad: ${JSON.stringify(nombresConEdad(personas, 15))}
`;