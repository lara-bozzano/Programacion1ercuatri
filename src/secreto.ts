
let arr: number;
let nro
let ocu
let elem: number = Number(prompt("ingrese tamaño))
arr = new Array(elem)

function cargar(arr,elem)
nro: Number = prompt("Ingrese numero")
ocu = metodo (arr, elem, nro)
console.log("El num" + nro + "..."+ ocu)
mostrar(arr,elem);

function cargar (v,l) {
for (let i: string= 0; i < l; i++)
v[i]= Math.floor(Math.random()*100);
}

function mostrar (v,l): void {
let c = " ";
for (let i: number=0; i < l; i++)
c+= v [i] + " ";
console.log (c);
}

function metodo(v,l,n): number {
let oc;
for (let i= 0; i < l; i++)
if (v[i] = n)
oc++
}