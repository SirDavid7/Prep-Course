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
    let newArray = [];
    
    for(let a in objeto){
      newArray.push([a , objeto[a]])
    }
    return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    let obj = {};
    let transformador = string.split("").sort()

    for (let i = 0; i < transformador.length; i++) {
        if(obj[transformador[i]]){
            obj[transformador[i]] = obj[transformador[i]] + 1
        }
        else{
            obj[transformador[i]] = 1
        }
    }
    return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  str = s.split("")
  let mayuscula = "";
  let minuscula = "";
for(i = 0 ; i < str.length ; i++){
  if(str[i] === str[i].toUpperCase()){
    mayuscula = mayuscula + str[i];
  }
  else{
    minuscula = minuscula + str[i];
  }
} 
return mayuscula + minuscula 
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var mirror = "";

  for(let i = str.length-1; i >= 0 ; i--){

  		mirror = mirror + str[i];
  }
  return mirror.split(" ").reverse().join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

        esCapicua = numero.toString().split("").reverse().join("")

        esCapicua = parseInt(esCapicua)

        if(numero === esCapicua)return "Es capicua"
        return "No es capicua"
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
     
    var newCadena = cadena.split("").filter(cadena => cadena !== "a" && cadena !== "b" && cadena !== "c")

    return newCadena.join("");

  }
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
        
  return arr.sort(function(a,b){
      return a.length - b.length
  })

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

    //iguales = [];

      //for (let i = 0; i < arreglo1.length; i++) {
            //for (let f = 0; f < arreglo2.length; f++) {
              //if(arreglo1[i] === arreglo2[i]) return iguales.push(arreglo1[i]) 
            //}          
      //}

      return arreglo1.filter(x => arreglo2.includes(x))
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

