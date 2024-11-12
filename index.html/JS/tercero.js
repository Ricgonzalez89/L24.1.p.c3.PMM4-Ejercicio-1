/* EJERCICIO #3
|* Sea el array de objetos personas, donde cada objeto persona tiene 
|*    la estructura: {nombre:'Ana', edad: 20}.
|*    Se requiere programar la función agregarPersona(nombre, edad), la 
|*    cual recibe los datos simples y los agrega al array como objeto 
|*    persona, siempre que el nombre no exista. La función debe retornar 
|*    un valor booleano indicando true si se agregó la persona, false 
|*    caso contrario.
*/
let agregarPersona = (arr, nombre, edad) => {
    let resultado = arr.filter((p) => p.nombre === nombre);
    if (resultado.length === 0) {
        arr.push({nombre: nombre, edad: edad});
        return true;
    } else {
        return false;
    }
};

let personas = [
    {nombre: "Ana", edad: 20},
    {nombre: "Daniela", edad: 19},
    {nombre: "Angel", edad: 19},
    {nombre: "Sabrina", edad: 20},
    {nombre: "Ricardo", edad: 18}
];

console.log(agregarPersona(personas, "Angel", 19));
console.log(JSON.stringify(personas));