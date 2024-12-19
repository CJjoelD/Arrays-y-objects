"use strict"

let nums6 = [9, 4, 2, 8];
let sumaTotal = nums6.reduce((a, b) => a + b, 0);

alert("¿La suma de todos los elementos es mayor que 20?: " + (sumaTotal > 20 ? "Sí" : "No"));
