const offset = document.getElementById('tuClave');
const string = document.getElementById('cajadeTexto');
const btnCifrar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const textoRespuesta = document.getElementById('respuesta');
const btnRefrescar = document.getElementById('refrescar');

btnCifrar.addEventListener('click', () => {
    event.preventDefault();
  const valueCajadeTexto = string.value.;
  const valuetuclave = parseInt(offset.value);
  const valuerespuesta = cipher.cifrado(valueCajadeTexto, valuetuclave);
  document.getElementById('respuesta').value = valuerespuesta;

});

btnDescifrar.addEventListener('click', () => {
    event.preventDefault();
 const valueCajadeTexto = string.value;
 const valuetuclave = parseInt(offset.value);
 const valuerespuesta = cipher.descifrado(valueCajadeTexto, valuetuclave);
 document.getElementById('respuesta').value = valuerespuesta;

});

btnRefrescar.addEventListener('click', function(event) {
    event.preventDefault();
  document.getElementById('tuClave').value = "";
  document.getElementById('cajadeTexto').value = "";
  document.getElementById('respuesta').value = "";

}); 