//ingresar CANTIDADdeProds que va a llevar,
//cuales y ctos(cantidad) PRODUCTOS de c/u y
//el PRECIO UNITARIO de cada producto
//mostrar: detalle de la compra: prods, cant, precio unitario y precio total.

let cantTotalProductos: number = Number(
  prompt("Ingrese la cantidad de productos")
);
let productos: string[] = new Array(cantTotalProductos);
//let precioProdus: number[] = new Array(cantTotalProductos);
//let cantProdus: number[] = new Array(cantTotalProductos);

function cargarProductos(arrayProductos: string[]): void {
  for (let i: number = 0; i < arrayProductos.length; i++) {
    arrayProductos[i] = prompt("Ingrese los productos de la compra");
  }
}

console.log(cargarProductos(productos));
