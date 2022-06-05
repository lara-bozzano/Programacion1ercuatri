//algorit q nos pida una clave
//clave = eureka
//Solo tenemos 3 intentos
//si fallamos mostrará un msj
//indicándonos que hemos agotado
//todas las oportunidades
//Si acertamos la clave, saldremos del prog

let clave: string;
let contador: number = 1;

while (clave !== "eureka" && contador <= 3) {
  clave = prompt("Ingrese una clave");
  contador++;
}
if (clave === "eureka") {
  console.log("La clave es correcta");
} else {
  console.log("Clave incorrecta, se agotaron los intentos");
}

/*if (contador > 3) {
    console.log("Se agotaron los intentos");
  }
}*/
