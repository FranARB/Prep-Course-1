// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
let arr2 = [];
  for(let key in objeto){
    let arr1 = []
    arr1.push(key)
    arr1.push(objeto[key])
    arr2.push(arr1);
  }
return arr2;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 let obj = {}
 for (let i = 0; i < string.length; i++) {

 if(obj.hasOwnProperty(string.charAt(i))) {
  obj[string.charAt(i)] += 1 // obj[string.charAt(i)] + 1
 }else{
  obj[string.charAt(i)] = 1;
 }
  
 }
return obj;


/*
for(let i=0;i<string.length;i++){
  if(objeto[string[i]]){
    obj[string[i]] = 0;
  }
  obj[string[i]] +=1;
}
return obj;
*/
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var word = s.split("");
  var arr1 = [];
  var arr2 = [];

  for(var i=0; i < word.length; i++){
    if(word[i] === word[i].toUpperCase() /*eleva todas las letras a mayúsculas*/){
      arr1.push(word[i]);
    }else{
      arr2.push(word[i]);
    }
  }

  let arrfin = arr1.concat(arr2); //concatena 2 arrays
  let string = arrfin.join(""); //agrego el array a la string
  return string;
/*
var minus = "";
var mayus = "";

for(i=0; i <s.lenght; i++){
  if(s[i]===s[i].toUpperCase()){
    mayus = mayus + s[i];
  }else{
      minus = minus + s[i];
    }
}
return (mayus + minus);
*/
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let newArr = str.split(" ");

  let newArrInv = newArr.map((value) => {
    return value.split("").reverse().join("");
});
  let result = newArrInv.join(" ");
  return result;
  
/*
var mirror = ""

for(let i = str.length; i>=o; i--){
mirro += str[i];
}
return mirror.split(" ").reverse().join(" ");
*/




/*   let hiarr = [];
   let word = str.split(" "); //["The", "Henry", "Challenge", "is", "close!"]
  
for (let i = 0; i < word.lengtht; i++) {
     var arr2 = word[i].split(""); // => ["e", "h", "T"]
     var arrInversa = []; 
     for (let j = arr2.length - 1; j >= 0; j--) {
      let letra = arr2[j];
       arrInversa.push(letra);
     }
     let palabra = arrInversa.join("");
     hiarr.push(palabra);
   }
let franseinvertida = hiarr.join(" ");
 return franseinvertida;*/
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numString = numero.toString();
  let cambio = numString.split("");
  let reverso = cambio.reverse();

  let cap = reverso.join("");

if(numString === cap)return "Es capicua";
return "No es capicua";

  // if(numString.join("") === NewNumber.join("")){
  //   return "No es capicua";
  // }else return "Es capicua";
/*
var numero1 = numero.toString()
var numeroinv = ""

for(var i= numero1.length - 1; i>=0; i--){
  numeroinv +=numero1[i];
}

*/
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let newString = cadena.split("");
  let result = newString.filter((value)=>value !== "a" && value !== "b" && value !== "c").join("");

  return result;

/*
var miCadena = "";

for(var i=0; i<cadena.length; i++){
  if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c") miCadena += cadena[i]
}
return miCadena;
*/

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
let sorted = arr.sort((a,b) => a.length - b.length);

return sorted;


/*
no//function ordenCreciente(a, b){

  if(a.length < b.length)return -1;

  if(a.length > b.length)return 1;
  return 0;
}no

return arr.sort(function(a,b) {
  if(a.length < b.length)return -1;

  if(a.length > b.length)return 1;
  return 0;
})

*/
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let result = arreglo1.filter((value) => arreglo2.includes(value));

  return result;

/*
  var miArray = [];

  for(var i = 0; i < arreglo1.length; i++) {
    for(var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j])miArray.push(arreglo1[i])
    }
  }

  //return arr.sort((a,b) => ordenCreciente(a,b))

  return miArray;
*/


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

