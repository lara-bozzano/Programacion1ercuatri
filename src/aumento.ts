let sueldoActual: number = Number(prompt("Ingrese su sueldo actual"));
let nuevoSueldo: number = 0 

if (0 < sueldoActual && sueldoActual <= 15000) {
  (nuevoSueldo = sueldoActual*1.2);
  console.log("Tiene un aumento del 20%, su sueldo actualizado es", nuevoSueldo);
  } else if (15001 <= sueldoActual && sueldoActual <= 20000) {
  (nuevoSueldo = sueldoActual*1.1);
   console.log("Tiene un aumento del 10%, su sueldo actualizado es", nuevoSueldo);
    } else if (20001 <= sueldoActual && sueldoActual <= 25000) {
  (nuevoSueldo = sueldoActual*1.05);
    console.log("Tiene un aumento del 5%, su sueldo actualizado es", nuevoSueldo);
      } else {
  (nuevoSueldo = sueldoActual);
  console.log("Usted no posee aumento");
  }
//No me estaria saliendo por consola el sueldo actualizado(nuevoSueldo) 