import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //imposible que no me apruebe esto, no me haga sufrir ;)
  let palo = ['♦', '♥', '♠ ', '♣']
  let numeros = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K']
  let segundos = 10;
  generate.addEventListener("click", function() {
    generarCarta()
    segundos = 10;
  });

  function generarCarta() {
    let paloDefinido = palo[Math.floor(Math.random()* palo.length)]
    let numeroDefinido = document.getElementById('numero').innerHTML = numeros[Math.floor(Math.random()* numeros.length)];
    document.getElementById('palo-izquierdo').innerHTML = paloDefinido;
    document.getElementById('numero').innerHTML = numeroDefinido;
    document.getElementById('palo-derecho').innerHTML = paloDefinido;

    let color = (paloDefinido === '♦' || paloDefinido === '♥') ? 'red' : 'black';
    document.getElementById('palo-izquierdo').style.color = color;
    document.getElementById('numero').style.color = color;
    document.getElementById('palo-derecho').style.color = color;
  }

  function cuentaRegresiva() {
    document.getElementById("contador").innerText = segundos;
    if (segundos > 0) {
      segundos--;
      setTimeout(cuentaRegresiva, 1000);
    } else {
      generarCarta()
      segundos = 10;
      setTimeout(cuentaRegresiva, 1000);
    }
  }

  document.getElementById("reSizes").addEventListener("click", function () {
    let ancho = document.getElementById("ancho").value;
    let largo = document.getElementById("largo").value;
    let carta = document.getElementById("carta");
    if (!ancho.endsWith("rem")) ancho += "rem";
    if (!largo.endsWith("rem")) largo += "rem";
    carta.style.width = ancho;
    carta.style.height = largo;
  });

  cuentaRegresiva();
  generarCarta()
};
