// PROGRAMACION FUNCIONAL

// Inmutabilidad
// es la capacidad de no cambiar algo que ya fue generado
// ejemplo

let nombre = "Pedro";
let nombre1 = "Maria";

// Recursividad
// Concepto que se basa en el invocarse a si mismo n número de veces

// Funciones Impuras
// Son funciones provoca side efect o efecto secundario
// por que hacen uso de variables globales
// no regresan valores
// no reciben parametros

// ejemplo

let nombre2 = "Pedro";

function saluda(nonbre) {
  return "Hola soy " + nombre;
}

console.log(saluda(nombre2))

let total = 0;

function suma(num1, num2) {
  const total = num1 + num2;
  return total
}

suma(4,5); // 9
suma(8,5); // 13
suma(6,5); // 11
suma(4,5); // 9

// Funciones puras
// Son funciones que no provoca side efect o efecto secundario
// no hacen uso de variables globales
// regresan valores
// reciben parametros
// a la misma, la misma salida


// Funciones de orden superior
// son funciones que pueden recibir funciones como parametro o retornar funciones

// ejemplo

function terminar(valor) {
  throw new Error(valor);
}

function finalizar(valor) {
  console.log(valor)
}

function iniciaProceso(valorentrada, fallback, callback) {
  if (valorentrada) {
    callback("Exitoso")
  } else {
    fallback("Error")
  }
}

// iniciaProceso(true, terminar, finalizar);

// terminar;

// Funciones de primera clase
// son aquellas funciones que pueden se tratadas como cualquier otra variable, por ejemplo, como parametro


// Map

// es un metodo funcional que regresa un nuevo arreglo con el mismo número de elementos que el arreglo orighinal
// pero no significa que tenga el mismo contenido que el arreglo original

// sintaxis: arreglo.map(function(valor, posicion, arreglo){})

const numeros = [2, 5, 67, 34, 76, 789, 1000];

// obtener el doble de cada elemento del arreglo

// let dobleNumero = [];

// for (let numero of numeros) {
//   dobleNumero.push(numero * 2);
// }

// console.log(dobleNumero)

// let dobleNumero = numeros.map(function(valorActual, posicion, arreglo) {
//   console.log("valorActual", valorActual)
//   console.log("posicion", posicion)
//   console.log("arreglo", arreglo)
//   return valorActual * 2
// });
// console.log(dobleNumero)

let dobleNumero = numeros.map((valorActual) => valorActual * 2);
console.log(dobleNumero)

const nuevosNombres = ["Pedro", "Ana", "Maria", "Antonio", "Jose Luis"].map(function(valorActual) {
  let contador = 0;
  for(let letra of valorActual) {
    if (letra === "o") {
      contador++;
    }
  }
  if (contador === 1) {
    return valorActual.split("")/*["P","e","d","r","o"] */.reverse()/*["o","r","d","e","P"] */.join("")/*"ordeP" */;
  }

  return valorActual
});


// Arrow Functions
// funciones de nueva generación
// cambio de sintaxis
// se elemina la referencia del this
// return implicito
// one line

// Sintaxis: () => {}

// (valorActual) => valorActual * 2

// filter
// es un metodo funcional que regresa un nuevo arreglo con un número menor o igual de elementos
// que el arreglo original

// sintaxis: arreglo.filter(function(valor, posicion, arreglo){})

// obtener solo los elementos que tengan menos de 6 caracteres y al menos 1 letra o
const algunosNombres = ["Pedro", "Ana", "Maria", "Antonio", "Jose Luis"].filter((valorActual) => valorActual.length < 6 || valorActual.includes("u"));

const numerosImpares = [23, 67,1300, 45454, 6765, 198, 2, 4].filter((num) => !(num % 2 === 0));

// reduce
// es un metodo funcional que regresa cualquier tipo de dato todo en base al arreglo original

// sintaxis: arreglo.reduce(function(valorAnterior, valorActual, posicion, arreglo){}, tipo de dato a operar)
// sintaxis: arreglo.reduce(function(valorAnterior, valorActual, posicion, arreglo){}, {});

// Obtener el promedio de un alumno por sus calificaciones

// En el caso de que el segundo parametro del reduce no exista, el valorAnterio en la primera iteracion
// tomara el valor de la posicion 0 del arreglo y valorActual tomaria el valor de la siguiente posicion
// Para las siguientes iteraciones, el valorAnterior tomara el valor del return y valorActual
// tomara el valor de la iteracion actual

const promedio = [8, 8.7, 9, 10, 5].reduce((valorAnterior, valorActual, posicion, arreglo) => {
  const acumulador = valorAnterior + valorActual;
  if (posicion === (arreglo.length - 1)) {
    return acumulador / arreglo.length
  }

  return acumulador
}, 0);
