//calc 2 num: +, -, * y /) utilizando Switch y la funcion

function dibujarGuion() {
  let guion: string = "-";
  for (let contador: number = 1; contador <= 40; contador++) {
    guion = guion + "-";
  }
  console.log(guion);
}

let numero1: number = Number(prompt("Ingrese primer numero"));
let numero2: number = Number(prompt("Ingrese segundo numero"));
let opcion: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir"
  )
);
let resultado: number = 0;

switch (opcion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarGuion();
    console.log("El resultado de la suma es:", resultado);
    dibujarGuion();
    break;
  case 2:
    resultado = numero1 - numero2;
    dibujarGuion();
    console.log("El resultado de la resta es:", resultado);
    dibujarGuion();
    break:
  case 3:
    resultado = numero1 * numero2;
    dibujarGuion();
    console.log("El resultado de la multiplicacion es:", resultado);
    dibujarGuion();
    break;
  case 4:
    resultado = numero1/numero2;
    dibujarGuion();
    console.log("El resultado de la division es:", resultado);
    dibujarGuion();
    break;
  default:   
    console.log("Opcion invalida");
} 
  

