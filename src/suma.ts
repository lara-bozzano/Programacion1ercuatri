let numero1: number = Number(prompt("Ingrese primer numero"));
let numero2: number = Number(prompt("Ingrese segundo numero"));
let suma = 0;
if (numero1 <= numero2) {
  for (let indice: number = numero1; indice <= numero2; indice++) {
    suma = suma + indice;
  }
} else {
  for (let indice2: number = numero2; indice2 <= numero1; indice2++) {
    suma = suma + indice2;
  }
}
console.log("Su resultado es", suma);
