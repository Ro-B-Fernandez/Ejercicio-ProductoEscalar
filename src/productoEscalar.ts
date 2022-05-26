// Producto Escalar

  let cantidad: number = Number(prompt("Ingrese la cantidad de números"));
  let v1: number[] = new Array(cantidad);
  let v2: number[] = new Array(cantidad);
  let total: number = 0;
  let indice: number;

let calcularProductoEscalar = (v1: number[], v2: number[], cantidad: number): number => {
 
 for(indice = 0; indice < cantidad; indice ++) {
  total = total + (v1 [indice] * v2 [indice]) 
  }

return total;

}
// Cargo el vector 1
for(indice= 0; indice < cantidad; indice++){
  v1[indice] = Number(prompt("Ingrese el valor de v1 ["+indice+"]: "));
}
// Cargo el vector 2
for(indice=0; indice < cantidad; indice++){
  v2[indice] = Number(prompt("Ingrese el valor de v2 ["+indice+"]: "));
}

console.log("El Producto Escalar es: " + calcularProductoEscalar(v1, v2, cantidad));






