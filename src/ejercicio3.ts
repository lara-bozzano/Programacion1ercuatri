let precioProducto: number = Number(prompt("ingresar el precio"));
let cantidad: number = precioProducto * 5;
let precioTotal: number = cantidad;

let descuento: number = precioTotal * 0.1;
let descuentoTotal: number = precioTotal - descuento;

if (precioTotal > 1000) {
  console.log("El total de la compra es:", descuentoTotal);
} else {
  console.log("El total de la compra es:", precioTotal);
}
