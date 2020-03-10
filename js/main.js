alert('Hola mundo!!');

var nombre = "Génesis Rodríguez";
var altura = 163;
var concatenacion = nombre + "" + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
  <h1>Soy la caja de datos</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h2>Mi altura es: ${altura}</h2>
`;

if(altura <= 150){
  datos.innerHTML += `<h1>Eres una persona BAJA</h1>`;
}else{
  datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
}
var i;
for(i = 2010; i<=2020; i++){
  datos.innerHTML += "<h2>Estamos en el año: "+i;
}

//Función Recursiva
var arr = [7,15,3,8,5];

const operaSuma = (datos,suma) => {
  if(datos.length > 0){
    suma += datos.shift();
    return operaSuma(datos,suma);
  }else{
    console.log(suma);
  }
};
operaSuma(arr,0);


//Segundo Ejercicio de Recursividad
function factorial(num) {
  if(num == 1){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
}
factorial(5);


//Implementa una función que retorne un string con todas las letras del alfabeto. Implementar dos versiones, una iterativa y otra recursiva.

function alfabeto(){
  var texto = '';
  for(var i=97; i<=122; i++){
    texto += String.fromCharCode(i) ;
  }
  return texto;
}
alfabeto();

//Alfabeto Recursivo
function alfabetoR(codeLetra, resultado){
  if(codeLetra <= 122){
    return resultado + String.fromCharCode(codeLetra) + alfabetoR(codeLetra + 1, resultado);
  }else{
    return '';
  }
}
alfabetoR(97, '');

//Escribe una función recursiva que dado un número entero n retorne un arreglo con todos los números enteros en orden decreciente desde n a 1. La firma de la función debe ser: array countdown( int n ). 
//Ejemplos: a) countdown(1) retorna [1]b) countdown(5) retorna [5, 4, 3, 2, 1].

function numerosDecrecientes(datos){
  var arrayNumbers = [10, 8, 9, 5, 3, 78, 23];
  arrayNumbers.sort((a, b) => a - b );
}
numerosDecrecientes(datos);

function muestraNombre(nombre, altura){
  var misDatos = 
  `<h1>Soy la caja de datos</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h2>Mi altura es: ${altura}</h2>`;

  return misDatos;
}

function imprimir(){
  var datos = document.getElementById('datos');
    datos.innerHTML = muestraNombre("Génesis R.", 163);
}

imprimir(); 

var nombres = ['Génesis', 'Luci', 'Juan'];
  document.write('<h1> Listado de nombres:</h1>');
  for(i=0; i<nombres.length; i++){
  document.write(nombres[i] + '<br/>');
  }

  nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
  });

  var coche = {
    modelo: 'Lamborghini Gallardo Superleggera',
    velocidad: 325 + 'km/h',
    año: 2020,
    mostrarDatos(){
      console.log(this.modelo, this.velocidad, this.año);
    },
    propiedad1: 'valor aleatorio'
  };
  document.write('<h1>'+coche.modelo+'</h1>');
  coche.mostrarDatos();
  console.log(coche); 

  //PROMESAS

 var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
      let saludo = 'Hola buen día para todos';
      /* saludo = false; */
      if(saludo){
        resolve(saludo);
      }else{
        reject('No hay saludo disponible');
      }
    }, 2000);
  });  
  saludar.then(resultado => {
    alert(resultado);
  })
  .catch(err => {
    alert(err);
  }); 

  class Cal{
 
    static sumar(a, b){
        return new Promise ((resolve, reject) => {
            a && b ? resolve(a * b):reject('hubo un problema');
        })
    }
    static multiplicar(valor){
        valor /= 5;
        console.log(valor)
        return valor
    }
    static comprobar(valor){
        return valor > 10 ? 'el valor es mayor': 'es menor'
    }
    static tigger(a, b){
        Cal.sumar(a, b)
        .then(result => Cal.multiplicar(result))
        .then(value =>  console.log( Cal.comprobar(value)))
        .catch(error => console.log('hubo un: '+ error))
    }
}
Cal.tigger(2,4);

/*CLASES Y HERENCIA*/

class PlayStation4 {
  constructor(nombre, antiguedad){
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }
  nombreViodejuegos(){
    this.nombre;
  }
  antiguedadVideojuegos(){
    this.antiguedad += 1;
  }
}
class XboxOne extends PlayStation4{
  constructor(nombre, antiguedad){
    super(nombre, antiguedad);
    this.genero = 'accion'; 
  }
  mostrarGenero(){
    return 'El género de Halo es: ' +this.genero;
  }
}
var juego1 = new XboxOne('Halo 5', 2015);
console.log(juego1.mostrarGenero());

var videojuego1 = new PlayStation4('Dark Souls 2', 2014);
var videojuego2 = new PlayStation4('Bloodborne', 2015);
var videojuego3 = new PlayStation4('Mortal Kombat 9', 2011);
var videojuego4 = new PlayStation4('Call of Duty Black Ops', 2010);

console.log(videojuego1);

document.write("<h1>Antiguedad: " +videojuego1.antiguedad+ "</h1>");
videojuego1.antiguedadVideojuegos();
videojuego1.antiguedadVideojuegos();
videojuego1.antiguedadVideojuegos();
document.write("<h1>Antiguedad: " +videojuego1.antiguedad+ "</h1>");
