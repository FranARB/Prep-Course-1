// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código: listo

  return nombre[0].toUpperCase() + nombre.slice(1)
  

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código: listo
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  var suma= 0;

  for(var i = 0; i<numeros.length; i++){
    suma = suma + numeros[i];
  }
cb(suma);
/*
var sumaTotal = 0;
for(var numero of numeros){
  sumaTotal = sumaTotal + numero;
}
return cb(sumaTotal);


/////////////////////////////////////////

var sumaTotal = numeros.reduce(function(acumulador, valorActual){
  return acumulador + valorActual
})

*/

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

  for(var i=0; i<array.length; i++){
    cb(array[i]);
  }

  /*
  
  */
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  var array2= [];

  for(var i = 0; i < array.length; i++){
   array2.push(cb(array[i]));
  }
return array2;


/*
var array2 = array.map((elemento) =>{
  return cb(elemento)
}) // en vez de "=> colocar function(i), otra forma"
return array2;
*/

/*
return array.map(cb)
 */
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
var arr2 = [];

for(var i = 0; i < array.length; i++){
  if(array[i][0] === "a"){
    arr2.push(array[i])
  }
}
return arr2;

/* 
var arr2 = array.filter(function(elemento){
  return elemento === "a";
})
return arr2;

///////////////////////////////////

var arr2 = [];

for(var key of array){
  if(key[0] === "a") arr2.push(key)
}
return arr2;
*/

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
