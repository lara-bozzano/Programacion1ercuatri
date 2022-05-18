//return area de un triangulo: base*altura/2
//funcion calcularAreaTriangulo
let base: number = 1;
let altura: number = 2;
//let operacion: number = 0;

function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

for (let contador = 0; contador <= 7; contador++) {
  console.log(calcularAreaTriangulo(base, altura));

  base += 1;
  altura += 2;
}
