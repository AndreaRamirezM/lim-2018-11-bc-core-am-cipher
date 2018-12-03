window.cipher = {

  cifrado : (texto, numero) => {

    let respuestaCipher = ""; //declaro una cadena vacia que sera mi cadena respuesta
    const espacio = String.fromCharCode(32) //definimos un espacio

    for (let i = 0; i < texto.length; i++) {
      if (espacio != texto.charAt(i)) {
        const asciiOriginal = texto.charCodeAt(i);
        /* Ponemos la formula porque queremos solo de la A -Z , si no leera todo el codigo ASCII */
        const nuevoAscii = (asciiOriginal - 65 + numero) % 26 + 65;
        const nuevoCaracter = String.fromCharCode(nuevoAscii);
        respuestaCipher = respuestaCipher + nuevoCaracter; //concateno la nueva letra a mi cadena respuesta
      }
      else {
        //concateno el espacio a mi cadena respuesta
        respuestaCipher = respuestaCipher + espacio;
      }
    }
    return respuestaCipher;
  },


  descifrado : (texto, numero) => {

    let respuestaCipher = "";
    const espacio = String.fromCharCode(32) //definimos un espacio

    for (let i = 0; i < texto.length; i++) { // posiciones bucle  del texto que parametros 
      if (espacio != texto.charAt(i)) {
        const primeraLetraAscii = texto.charCodeAt(i);
        /* Aqui ponemos la formula por que queremos solo de la A -Z , si no leera todo el codigo ASCII */
        const nuevoAscii = (primeraLetraAscii - 90 - numero) % 26 + 90; // logica =  se pone 90 porque empieza desde la Z a regresar
        const respuesta = String.fromCharCode(nuevoAscii);
        respuestaCipher = respuestaCipher + respuesta;
      }
      else {
        respuestaCipher = respuestaCipher + espacio;
      }
    }
    return respuestaCipher;
  },

};
