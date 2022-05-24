/*arreglo de dimensión 5 y llenar con num q desee
Mostrar los números del arreglo al usuario
*/

let numDeseado: number[] = new Array(5);

let indice: number = 0;
numDeseado[0] = 4;
numDeseado[1] = 3;
numDeseado[2] = 2;
numDeseado[3] = 1;
numDeseado[4] = 0;

while (indice < 5) {
  console.log("El numero de la posicion", indice, "es", numDeseado[indice]);
  indice++;
}
