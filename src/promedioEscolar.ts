//algoritmo q permita cargar alumnos y sus notas en los 3 trim
//obtener el promedio anual (es decir, de sus tres notas)
//del alumno ingresado por el usuario

let cantAlumnos: number = Number(prompt("Ingrese cantidad de alumnos:"));
let alumnos: string[] = new Array(cantAlumnos);
let nota1: number[] = new Array(cantAlumnos);
let nota2: number[] = new Array(cantAlumnos);
let nota3: number[] = new Array(cantAlumnos);

for (let indice = 0; indice < cantAlumnos; indice++) {
  alumnos[indice] = prompt("Nombre del alumno: ");
  nota1[indice] = Number(prompt("Nota 1er trimestre:"));
  nota2[indice] = Number(prompt("Nota 2do trimestre:"));
  nota3[indice] = Number(prompt("Nota 3er trimestre:"));
  let promedio: number = 0;
  promedio = (nota1[indice] + nota2[indice] + nota3[indice]) / 3;
  console.log("El promedio de", alumnos[indice], "es", promedio);
}
