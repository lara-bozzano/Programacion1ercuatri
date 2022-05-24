//func cantidadDeDivisores q reciba un núm entero y devuelva cantdivisores
//ej: para el número 16, sus divisores son 1, 2, 4, 8, 16, cantdivisores 5
//Re-utilice el método esMultiplo implementado para el ejercicio anterior

/*function cantidadDivisores(numero: number,divisor: number, cantidad:number) : number {
  let divisor: number
  let numero: number;
  for () {
  if (dividendo % indice === 0) {
    contador = contador + 1:
  } else { 
    return 
  }
  return contador 
}*/
function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;
  for (divisor = 0; divisor <= numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
  }
  return cantidad;
}

let numero: number = Number(prompt("Ingrese un numero"));
let numDivisores: number = cantidadDeDivisores(numero);
console.log("El número", numero, "tiene ", numDivisores, "divisores.");
