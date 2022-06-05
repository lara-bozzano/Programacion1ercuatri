let numero: number = Number(prompt("Ingrese un numero"));

if (numero % 2 === 0) {
  console.log("El num ingresado es par");
} else {
  console.log("El num ingresado es impar");
}

while (numero <= 0) {
  numero = Number(prompt("Ingrese un num mayor a 0"));
}
