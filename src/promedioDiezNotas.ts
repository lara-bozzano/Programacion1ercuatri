//Calcular el Promedio de 10 Notas

//CON FOR (CORRECTO)
let nota: number;
let suma: number = 0;
let promedio: number = 0;

for (let contador = 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese la nota" + contador + ":"));
  suma = suma + nota;
}

promedio = suma / 10;
console.log(promedio);

//CON WHILE
/*
let nota: number;
let suma: number = 0;
let contador: number = 1;
let promedio: number = 0;

while (contador <= 10) {
  nota = Number(prompt("Ingrese una nota"));
  suma = suma + nota;
  contador = contador + 1;
}

promedio = suma / 10;
console.log("El promedio de sus notas es", promedio);
*/
