//!Crea una función que tome dos números como argumentos y devuelva su suma.
//! Ejercicio01

function sumar(num1, num2) {
    return num1 + num2;
  }
  console.log(sumar(20, 58)); 
  
  //*Crea una función que tome una cadena como argumento y devuelva el número de caracteres que tiene
  //*Ejercicio02
  
  function contarCaracteres(cadena) {
      return cadena.length;
  }
  console.log(contarCaracteres ("Aguapanela"))
  
  //?Crea una función que tome un array de números como argumento y devuelva el número más grande
  //?Ejercicio03
  
  function encontrarNumeroMayor(numeros){
      let maximo = numeros[0];
      for (let i =1; i < numeros.length; i++){
        if (numeros[i] > maximo){
          maximo = numeros [i];
        }
      }
      return maximo;
    }
      console.log(encontrarNumeroMayor([1, 2, 3, 50, 80]));
      
  //!Crea una función que tome una cadena como argumento y devuelva la misma cadena pero con todas las letras en mayúsculas
  //!Ejercicio04
  
    function convertirMayuscula(cadena){
      return cadena.toUpperCase();
    }
    console.log(convertirMayuscula("hola colombia"))
  
  //*Crea una función que tome un objeto como argumento y devuelva un array con todas las claves del objeto
  //*Ejercicio05
  
  function objectoClave(obj) {
    return Object.keys (obj);
  }
  const objecto = {
    nombre: "Sergio Andres",
    apellido: "Narvaez Fernandez",
    email: "3105984187.sanf@gmail.com",
    edad: 21,
  }
  console.log(objectoClave(objecto))