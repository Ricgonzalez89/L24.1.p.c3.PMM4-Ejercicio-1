/* EJERCICIO #1
|* Sea el array de objetos personas, donde cada objeto persona tiene
|*    la estructura: {nombre:'Ana', edad: 20}.
|*    Se requiere programar la función cuantosConEdad(edad) que retorne
|*    la cantidad de personas que tienen la edad enviada por argumento.
*/
let cuantosConEdad = (arr, edad) => {
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].edad === edad) {
            cnt++;
        }
    }
    return cnt;
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
Personas con 20 años de edad: ${cuantosConEdad(personas, 20)}
<br>Personas con 19 años de edad: ${cuantosConEdad(personas, 19)}
<br>Personas con 18 años de edad: ${cuantosConEdad(personas, 18)}
<br>Personas con 15 años de edad: ${cuantosConEdad(personas, 15)}
`;