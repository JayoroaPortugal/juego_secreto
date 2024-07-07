/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';// Cambia el contenido de la etiqueta h1 por 'Hola Mundo' */

/* let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Adivina el número secreto' */;// Cambia el contenido de la etiqueta p por 'Adivina el número secreto'

 let numeroSecreto = generarNumeroAleatorio();
 let intentos=1;

 console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;// Cambia el contenido de la etiqueta h1 por 'Juego del número secreto'
}

function generarNumeroAleatorio() {
   
  return Math.floor(Math.random() * 10) + 1;
 
}
function condionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 100');
    numeroSecreto = generarNumeroAleatorio()
    intentos = 1;
}
function verficarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
  
  
  if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p', `¡Felicidades! ¡Adivinaste el número secreto en ${intentos} ${intentos===1 ? 'intento' : 'intentos'}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else if(numeroDeUsuario>numeroSecreto){
    asignarTextoElemento('p', '¡El número secreto es menor!');
  }else{
    asignarTextoElemento('p', '¡El número secreto es mayor!');
  }
  intentos++;
  LimpiarInput();
  return
}

function LimpiarInput() {
    document.getElementById('numeroUsuario').value = '';
}


function reiniciarJuego() {
 //limpiar input
 LimpiarInput();
 //indicar el intervalo de numeros
 
//mostrar mensajes iniciales
condionesIniciales();
  //bloquear boton reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
   
    
    
    }
    



reiniciarJuego()