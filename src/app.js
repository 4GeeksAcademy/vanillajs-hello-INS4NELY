import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ['♦', '♥', '♠ ', '♣']
  let paloDefinido = palo[Math.floor(Math.random()* palo.length)]
  let numeros = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K']
  let segundos = 10;
  document.getElementById('palo-izquierdo').innerHTML = paloDefinido;
  document.getElementById('numero').innerHTML = numeros[Math.floor(Math.random()* numeros.length)];
  document.getElementById('palo-derecho').innerHTML = paloDefinido;

  generate.addEventListener("click", function() {
    let paloDefinido = palo[Math.floor(Math.random()* palo.length)]
    document.getElementById('palo-izquierdo').innerHTML = paloDefinido;
    document.getElementById('numero').innerHTML = numeros[Math.floor(Math.random()* numeros.length)];
    document.getElementById('palo-derecho').innerHTML = paloDefinido;
    segundos = 10;

  });

  function cuentaRegresiva() {
    document.getElementById("contador").innerText = segundos;
    if (segundos > 0) {
      segundos--;
      setTimeout(cuentaRegresiva, 1000);
    } else {
      let paloDefinido = palo[Math.floor(Math.random()* palo.length)]
      document.getElementById('palo-izquierdo').innerHTML = paloDefinido;
      document.getElementById('numero').innerHTML = numeros[Math.floor(Math.random()* numeros.length)];
      document.getElementById('palo-derecho').innerHTML = paloDefinido;
      segundos = 10;
      setTimeout(cuentaRegresiva, 1000);
    }
  }
  cuentaRegresiva();

  document.getElementById("reSizes").addEventListener("click", function () {
    let ancho = document.getElementById("ancho").value;
    let largo = document.getElementById("largo").value;
    let carta = document.getElementById("carta");
    if (!ancho.endsWith("rem")) ancho += "rem";
    if (!largo.endsWith("rem")) largo += "rem";
    carta.style.width = ancho;
    carta.style.height = largo;
  });
};
