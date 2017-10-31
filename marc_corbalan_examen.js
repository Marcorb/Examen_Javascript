
/*==================================================================|
| Ejercicio 1.                                                      |
|===================================================================|
| Hacer una función "concatenarStrings" que concatene dos cadenas.  |
|==================================================================*/

function concatenarStrings (a, b) {
	return `${a} ${b}`;
}

console.log(concatenarStrings('Hello','world'));


/*==================================================================|
| Ejercicio 2.                                                      |
|===================================================================|
| Hacer una función "notaMedia" que devuelva la media de 3 numeros. |
|==================================================================*/

function notaMedia (num1, num2, num3) {
 // return '{(6, 10, 7) % (3)'
  return  (num1 + num2 + num3) / (3);
}
  
console.log(notaMedia(6, 10, 7));


/*==================================================================|
| Ejercicio 3.                                                      |
|===================================================================|
| Tenemos un objeto literal con dos atributos:                      |
|       let persona = {                                             |
|          nombre: 'Violeta',                                       |
|          apellido: 'Ibáñez'                                       |
|       }                                                           |
| Hacer una función "saludar" que devuelva                          | 
| “Hola Violeta Ibáñez ¿Cómo estás?” a partir de las propiedades    |
| del objeto.                                                       |
|==================================================================*/

let persona = {
    nombre: 'Violeta',
    apellido: 'Ibáñez'
}
  
persona.nombre
persona.apellido

function saludar () {
  return `hola ${persona.nombre} ${persona.apellido} ¿Cómo estas?`;
}



console.log(saludar());


/*==================================================================|
| Ejercicio 4.                                                      |
|===================================================================|
| Hacer una función "comparar" que se le pasen dos números y que    |
| devuelva un mensaje comparándolos, como en el siguiente ejemplo:  |
| “5 es menor que 12 “ -  “6 es igual que 6”  -  “2 es menor que 3” |
|==================================================================*/

 function comparar (num1, num2) { 
    if (num1 < 12) {
  return "Es menor";
} else if (num1 = num1) {
  return "Es igual";
} else (5 < num2) {
  return "Es menor";
}
  
console.log(comparar(6, 8));*/






/*==================================================================|
| Ejercicio 5.                                                      |
|===================================================================|
| Crear una instancia a partir de una función constructora de       |
| objetos "Contacto". Dicha función recibirá 3 parámetros (nombre,  |
| apellido y teléfono) y tendrá 1 método que devuelva la frase:     | 
| "El teléfono de Steve Worzniak es 666335500"                      |
|==================================================================*/

function Contacto (nombre, apellido, telefono) {
           
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.contactar = function(){

        return `El telefono de ${this.nombre} ${this.apellido} es ${telefono}`;
    }

}
  
let fer = new Contacto('Steve', 'Wozniak', 666335500);
//let paco = new Contacto('Paco', 'García', 66555500);
  
console.log(fer.contactar());






/*==================================================================|
| Ejercicio 6.                                                      |
|===================================================================|
| Crear una función "contarPropiedades" que cuente el número de     |
| propiedades que tienen los objetos. Partiremos del objeto literal |
| siguiente:
|     let coche = {                                                 |
|         marca: 'Renault',                                         |
|         tipo: 'deportivo',                                        |
|         caracteristicas: {                                        |
|             cilindrada: '2200',                                   |
|             motor: 'gasolina'                                     |
|         }                                                         |
|      }                                                            |
|==================================================================*/

let coche = {
    marca: 'Renault',
    tipo: 'deportivo',
    caracteristicas: {
      cilindrada: '2200', 
      motor: 'gasolina'
    }
  }
  
  function contarPropiedades () {
    for (let coche= {tipo: marca, caracteristicas};



  }

/*let miDiccionario = {key_1: value_1};
for (item in miDiccionario) {
  console.log(miDiccionario[item]);
  }*/
  

  console.log(contarPropiedades());

/*==================================================================|
| Ejercicio 7.                                                      |
|===================================================================|
| Crear una función que cuente el número de enteros positivos que   |
| hay en un array de números enteros. Partiremos del siguiente      |
| array:  let miArray = [1, 2, 3, -5, -6, 10];                      |
|==================================================================*/

let miArray = [1, 2, 3, -5, -6, 10];

function contarPositivos () {
  return [1, 2, 3, 10];
 
}

console.log(contarPositivos());




/*==================================================================|
| Ejercicio 8.                                                      |
|===================================================================|
| A partir del siguiente array con elementos de diferentes tipos:   |
|     miLista = [1, true, 2, 3, 'a', 'b']                           |
| Crear una función "filterNumbers" que devuelva el valor de la suma|
| de sus numeros.                                                   |
|==================================================================*/

miLista = [1, true, 2, 3, 'a', 'b'];

