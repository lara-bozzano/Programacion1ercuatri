//ingresar CANTIDADdeProds que va a llevar,
//cuales y ctos(cantidad) PRODUCTOS de c/u y
//el PRECIO UNITARIO de cada producto
//mostrar: detalle de la compra: prods, cant, precio unitario y precio total.

let cantTotalProdus: number = Number(prompt("Ingrese la cantidad de productos"));
let productos: string[] = new Array(cantTotalProdus);
let precioProdus: number[] = new Array(cantTotalProdus);
let cantProdus: number[] = new Array(cantTotalProdus);

function cargarProds(arrayProductos: string[]): void {
  for (let i: number = 0; i <= productos.length; i ++)
  productos[i] = prompt("Ingrese el producto "+ i + "de la compra");
}

cargarProds(productos)