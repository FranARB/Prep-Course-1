// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  
  const array2 = array.shift();
  return array2;

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

   const array2 = array.pop();
   return array2;


}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  var largo = array.length;

  return largo;


}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  var i = 0;
  for (i=0; i<array.length;i++){
    array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  /*const str = " ";
  var i= 0;

  for(i=0;i<palabras.length;i++){
    str = palabras[i] + " ";
  }
  return str;*/

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  /*var i=0;
  for(i=0; i<array.length;i++){
    if(array[i]==elemento){
      return true;
    }else return false;
  }*/


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma=0;
  var i=0;

  for (i=0; i < numeros.length;i++){
    suma += numeros[i];
  }
  return suma;


}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  var i = 0;
  var suma = 0;
  for(i=0;i<resultadosTest.length;i++){
    suma += resultadosTest[i];
  }
  promedio = suma / resultadosTest.length;
  return promedio;


}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var i=0;
  var numG=0;
  for(i=0; i < numeros.length; i++){
    if (numeros[i] > numG){
      numG = numeros[i];
    }
  }
  return numG;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:


}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  var i = 0;
  var elementos = 0;
  for (i=0; i <arreglo.length;i++){
    if(arreglo[i]>18){
      elementos += 1;
    }
  }  
  return elementos;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

  var i = 0;

  for(i=0;i<numeroDeDia.length;i++){
    if(numeroDeDia[i] == 1 || numeroDeDia[i] == 7){
      return "Es fin de semana";
    } 
    else {
      return "Es día Laboral";
    }
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  var emp = n.toString();
  return (emp[0] ==9);
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  var I=0;

  for (I=0; I<arreglo.length;I++){
      return (arreglo[I]==arreglo[I+=1])
  }
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  var array2 = [];
    var i=0;
  
  
  /*let Mf=array2.filter(function(valor,index,array){
      console.log(valor);
      console.log(index);
      console.log(array);
      if (valor === "Enero" || valor === "Marzo" || valor === "Noviembre"){
        return valor;
      }
    })
    if (array2.length > 0){
      return Mf;
      
      }else return "No se encontraron los meses pedidos";
      
      */

        /*for (i=0; i<array.length;i++){
          if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
            array2.push(array[i]);
          }
        }
          if (array2.length===0){
            return "No se encontraron los meses pedidos"
          }else return array2;*/


    

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var array2 = [];
  var i = 0
  for(i = 0; i < array.length ; i++){

    if(array[i] > 100){
      array2.push(array[i]);
    }
  }
  return array2;

}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  /*var arrayn = [];
  var i = 0;

  while (i < 10){
    if(numero.length < numero.length)
    break;
    arrayn.push(numero[i] + 2);
    numero[i] = numero[i] + 2;
    i++;
  }
  if (i < 10) return "Se interrumpió la ejecución"
  else return arrayn;*/

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
