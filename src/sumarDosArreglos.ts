/*Sumar los elem de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
el arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario*/

let numero1: number[] = new Array(6);
let numero2: number[] = new Array(6);

let suma: number[] = new Array(6);

let indice: number;
for (indice = 0; indice < 6; indice++) {
  numero1[indice] = Number(prompt("Ingrese el primer numero"));
}
for (indice = 0; indice < 6; indice++) {
  numero2[indice] = Number(prompt("Ingrese el 2do numero"));
}

for (indice = 0; indice < 6; indice++) {
  suma = numero1[indice] + numero2[indice];
  console.log(suma);
}
