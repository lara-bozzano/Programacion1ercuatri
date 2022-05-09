let numero: number;
let cantPositivos: number = 0;
let cantTotal: number = 0;
let porcentajePositivos: number = 0;

numero = Number(prompt("Ingrese un numero positivo o negativo"));
while (numero !== 0) {
  if (numero > 0) {
    cantPositivos++;
  }
  cantTotal++;
  numero = Number(prompt("Ingrese un numero positivo o negativo"));
}

if (cantTotal > 0) {
  porcentajePositivos = (cantPositivos * 100) / cantTotal;
}

console.log(
  "Cantidad de positivos:",
  cantPositivos,
  "y",
  porcentajePositivos,
  "% del total"
);
