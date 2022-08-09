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
return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {}
  let suma = 0;
  for(let i=0;i<string.length;i++){
    for(let j=0;j<string.length;j++){
      if(string[i] == string[j]){
        suma++;
      }
    }
    objeto[string[i]] = suma;
    suma = 0;
  }
  return objeto;
}
  // var i = 0;
  // var objeto = {};
  // var acumulador = 0;
  // while (i < string.length) {
  //   //for (var j = 0;j < string.length;j++ ){
  //     //console.log(string[i]);
  //     objeto[string[i]] 
  //     //console.log();
  //     if(string[i] === string[i]){
  //       acumulador++
  //       objeto[string[i]] = acumulador;
  //     }
  //   //}
    
  //   i++;
  // }
  // console.log(acumulador)
  // console.log(objeto)
  // return objeto;
//   
//var objeto = {};
//   for (const clave in objeto) {
//     var acumulador = 0;
//     for (const repite in objeto) {
//       if (clave == repite) {
//         acumulador++
//       }
//     }
//     objeto[clave] = acumulador; 
//   }
//   return objeto
// }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arr= new Array;
  var min = new Array;

  function soymayuscula(letra)
    {
        return letra === letra.toUpperCase();
    }
  for (let i = 0; i < s.length; i++) {
    if ( soymayuscula(s[i] )){
      arr.push(s[i])
    } else{min.push(s[i])} 
  }
  return arr.concat(min).join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrne Hegne llahCsi !esolc"
  //Escribe tu código aquí
  var invertida = str.split(' ').map(function(elemento){
    return elemento.split('').reverse().join('')
  })
  return invertida.join(' ')
} 

//45780.toString => '4' '5' '7' '8' '0' join => '08754'
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capi = numero.toString();
  var invertida = capi.split('').reverse().join('');
  if (capi === invertida) {
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //fulano
  //stringNueva = [f,u,l]
  //0 1 2 3 4 5
  var stringNueva = '';
  for (var i = 0;i < cadena.length; i++) {
    if(cadena[1] !== 'a' && cadena[1] !== 'b' && cadena[1] !== 'c'){
      stringNueva += cadena[i];
    }
  }
  return stringNueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var aux = '';
  var bandera = true;
  while (bandera) {
    bandera = false;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i].length > arr[i+1].length){
        aux = arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=aux;
        bandera=true;
      }
      
    } 
  }
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var arr = [];
for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i]===arreglo2[j]){
        arr.push(arreglo1[i])
      }      
    }
  
}
return arr; 
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

