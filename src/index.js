const btnCifrar = document.getElementById('btnCifrar');
const btnDescifrar = document.getElementById('btnDescifrar');
const btnRefrescar = document.getElementById('refrescar');
const respuesta = document.getElementById('respuesta');

btnCifrar.addEventListener('click', () => {
    event.preventDefault();

  let offset = parseInt(document.getElementById('tuClave').value);
  let string = document.getElementById('cajadeTexto').value;
  respuesta.value = cipher.encode(offset,string);

});

btnDescifrar.addEventListener('click', () => {
    event.preventDefault();

    let offset = parseInt(document.getElementById('tuClave').value);
    let string = document.getElementById('cajadeTexto').value;
  respuesta.value = cipher.decode(offset,string);

});

btnRefrescar.addEventListener('click', function(event) {
    event.preventDefault();
  document.getElementById('tuClave').value = "";
  document.getElementById('cajadeTexto').value = "";
  document.getElementById('respuesta').value = "";

}); 