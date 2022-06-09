//Para cada vendedor mostrar su nombre y
//1- su venta maxima indicando semana y mes de la misma.
//2- su venta minima indicando semana y mes de la misma.
//3- su promedio semanal de ventas.
//4- su promedio mensual de ventas.

let vendedores: string[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];

let ventaCamila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];

//let ventas: string[] = ["ventaCamila", "ventaFranco"];
let maximo: number = 0;
let semana: number = 0;
let vendedor: number = 0;
let ventas: number = 0;
ventas = ventaCamila[1 - 12];
//let indice: number = 0;

for (let i: number = 0; i < 5; i++) {
  console.log(vendedores[i]);
  for (let j: number = 0; j < 12; j++) {
    if (ventas[j] > maximo) {
      maximo = ventas[j];
      semana = j;
      vendedor = i;
    }
    console.log("El monto maximo de Camila fue" + maximo + "en la semana" + j);
  }
}

//while (indice < 5) {

//console.log(vendedores[indice]);
//indice++;
