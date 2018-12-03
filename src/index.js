const tuClave = document.getElementById('tuClave');
const cajadeTexto = document.getElementById('cajadeTexto');
const btnCifrar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const textoRespuesta = document.getElementById('respuesta');
const btnRefrescar = document.getElementById('refrescar');

btnCifrar.addEventListener('click', () => {
   alert("Texto cifrado satisfactoriamente");
  // event.preventDefault();
  const valueCajadeTexto = cajadeTexto.value;
  const valuetuclave = parseInt(tuClave.value);
  const valuerespuesta = cipher.cifrado(valueCajadeTexto, valuetuclave);
  document.getElementById('respuesta').value = valuerespuesta;

});

btnDescifrar.addEventListener('click', () => {
  alert("Texto descifrado satisfactoriamente");
 // event.preventDefault();
 const valueCajadeTexto = cajadeTexto.value;
 const valuetuclave = parseInt(tuClave.value);
 const valuerespuesta = cipher.descifrado(valueCajadeTexto, valuetuclave);
 document.getElementById('respuesta').value = valuerespuesta;

});

btnRefrescar.addEventListener('click', function(event) {
    event.preventDefault();
  //window.location.src = 'index.html'
  document.getElementById('tuClave').value = "";
  document.getElementById('cajadeTexto').value = "";
  document.getElementById('respuesta').value = "";

}); 