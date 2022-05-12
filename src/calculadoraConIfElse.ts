function dibujarGuion() {
  let guion: string = "-";
  for (let contador: number = 1; contador <= 40; contador++) {
    guion = guion + "-";
  }
  console.log(guion);
}

let numero1: number = Number(prompt("Ingrese numero 1"));
let numero2: number = Number(prompt("Ingrese numero 2"));
let opcion: number = Number(
  prompt("Ingrese 1 para sumar, 2 para restar o cualquier otro para salir")
);
let resultado: number = 0;

if (opcion === 1) {
  resultado = numero1 + numero2;
  dibujarGuion();
  console.log("Resultado de la suma es:", resultado);
  dibujarGuion();
} else if (opcion === 2) {
  resultado = numero1 - numero2;
  dibujarGuion();
  console.log("El resultado de la resta es:", resultado);
  dibujarGuion();
} else {
  dibujarGuion();
  console.log("Opcion invalida");
  dibujarGuion();
}
