//funcion que reciba por parametro su nombre y apellido y lo imprima por consola.

let nombre: string = "Lara";
let apellido: string = "Bozzano";
let resultado: string = nombreYApellido(nombre, apellido);

function nombreYApellido(nom: string, ape: string): string {
  let nombreYApe: string = nom + ape;
  return nombreYApe;
}
console.log(resultado);

//crear una funcion que reciba un valor numerico y devuelva true si es par o false si es impar (con retorno)
