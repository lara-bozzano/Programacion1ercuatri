let numero: number = 0;
let cantTotal: number = 0;
let cantPositivos: number = 0;
let porcPositivos: number = 0;

numero = Number(prompt("Ingrese un numero"));
while (numero !== 0) {
  if (numero > 0) {
    cantPositivos++;
  }
  cantTotal++;
  numero = Number(prompt("Ingrese un numero"));
}

if (cantTotal > 0) {
  porcPositivos = (cantPositivos * 100) / cantTotal;

  console.log(
    "Cantidad de positivos: ",
    cantPositivos,
    "-",
    porcPositivos,
    " % del total"
  );
}
