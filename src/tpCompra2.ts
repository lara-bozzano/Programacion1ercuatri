//ingresar CANTIDADdeProds que va a llevar,
//cuales y ctos(cantidad) PRODUCTOS de c/u y
//el PRECIO UNITARIO de cada producto
//mostrar: detalle de la compra: prods, cant, precio unitario y precio total.

let cantTotalProductos: number = Number(
  prompt("Ingrese la cantidad de productos")
);
let productos: string[] = new Array(cantTotalProductos);
let precioProdus: number[] = new Array(cantTotalProductos);
let cantProdus: number[] = new Array(cantTotalProductos);
let precioTotal: number = 0;

function cargarProductos(arrayProductos: string[]): void {
  for (let i: number = 0; i < cantTotalProductos; i++) {
    productos[i] = prompt("Ingrese los productos de la compra");
  }
}

function cargarPrecioProd(arrayprecioProdus: number[]): void {
  for (let i: number = 0; i < cantTotalProductos; i++) {
    let precio: number = Number(prompt("Ingrese el precio de " + productos[i]));
    precioProdus[i] = precio;
  }
}

function cargarCantProd(arrayCantProdus: number[]): void {
  for (let i: number = 0; i < cantTotalProductos; i++) {
    let cantidad: number = Number(
      prompt("Ingrese la cantidad de " + productos[i])
    );
    arrayCantProdus[i] = cantidad;
  }
}

function calcularPrecioTotal(
  arregloPrecioProds: number[],
  arregloCantProds: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < cantTotalProductos; i++) {
    total = total + arregloPrecioProds[i] * arregloCantProds[i];
  }
  return total;
}

function mostrarListado(): void {
  console.log("Detalles de la compra :");
  for (let i: number = 0; i < cantTotalProductos; i++) {
    console.log(
      cantProdus[i] +
        " unidades de " +
        productos[i] +
        " al precio de " +
        precioProdus[i] +
        " pesos"
    );
  }
  console.log("El total de la compra es: ", precioTotal);
}

cargarProductos(productos);
cargarPrecioProd(precioProdus);
cargarCantProd(cantProdus);
precioTotal = calcularPrecioTotal(precioProdus, cantProdus);

mostrarListado();

//el cliente participa de un sorteo segun monto:
//si compra menos de 1000 no participa por nada
//si compra mas de 3000 participa por un 0km
//si compra mas de 2000 pero menos de 3000 participa por una
//moto 0k
//si compra mas de 1000 pero menos de 2000 participa un tv led

if (precioTotal > 1000 && precioTotal < 2000) {
  console.log(
    "Por su compra mayor a 1000 participa de un sorteo por un tv led."
  );
} else if (precioTotal > 2000 && precioTotal < 3000) {
  console.log(
    "Por su compra mayor a 2000 participa de un sorteo por una moto 0km."
  );
} else if (precioTotal > 3000) {
  console.log(
    "Por su compra mayor a 3000 participa de un sorteo por un auto 0km."
  );
} else {
  console.log("Usted no participa de ningun sorteo.");
}
