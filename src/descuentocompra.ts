let precioProducto: number = Number(prompt("ingresar el precio"));
//let cantidad: number = precioProducto * 5;//
let cantidad: number = Number(prompt("ingresar cantidad"));
let precioTotal: number = precioProducto * cantidad;

let descuento: number = precioTotal * 0.1;
let precioConDescuento: number = precioTotal - descuento;

if (precioTotal > 1000) {
  console.log("El total de la compra es:", precioConDescuento);
} else {
  console.log("El total de la compra es:", precioTotal);
}
