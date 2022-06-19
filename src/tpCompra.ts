//ingresar CANTIDADdeProds que va a llevar, 
//cuales y ctos(cantidad) PRODUCTOS de c/u y
//el PRECIO UNITARIO de cada producto 
//mostrar: detalle de la compra: prods, cant, precio unitario y precio total.

let cantTotalProd: number = Number(prompt("Ingrese cantidad total de productos:"));
let productos: string[] = new Array(cantTotalProd);
let cantCadaProd: number = Number(prompt("Ingrese ctos compro de este prod"))
let cantProds:number[] = new Array(cantCadaProd);

let precioProducto: number = Number(prompt("ingresar el precio"));
let cantidad: number = Number(prompt("ingresar cantidad"));
let precioTotal: number = precioProducto * cantidad;

let ingresarCantProd;
for (let i = 0; i <= cantTotalProd; i++) {
  productos[i] = prompt("Ingrese los productos de la compra:");
  cantProds[i] = Number(prompt("Que cantidad compro de este producto?"))
  for (productos[]= )
console.log("Cant total de prods: ", cantTotalProd, ". De los cuales:", cantProds[i], "son", productos[i]);
}

