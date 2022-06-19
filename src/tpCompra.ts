let cantTotalProd: number = Number(prompt("Ingrese cantidad total de productos:"));
let productos: string[] = new Array(cantTotalProd);
let cantProds:number[] = new Array(cantTotalProd);

let ingresarCantProd;
for (let i = 0; i <= cantTotalProd; i++) {
  productos[i] = prompt("Ingrese los productos de la compra:");
  cantProds[i] = Number(prompt("Que cantidad compro de este producto?"))
console.log("Cant total de prods: ", cantTotalProd, ". De los cuales:", cantProds[i], "son", productos[i]);
}