window.cipher = {

  cifrado : (offset, string) => {

    let respuestaCipher = ""; 
    const espacio = String.fromCharCode(32)

    for (let i = 0; i < offset.length; i++) {
      if (espacio != offset.charAt(i)) {
        const asciiOriginal = offset.charCodeAt(i);
        const nuevoAscii = (asciiOriginal - 65 + string) % 26 + 65;
        const nuevoCaracter = String.fromCharCode(nuevoAscii);
        respuestaCipher = respuestaCipher + nuevoCaracter; 
      }
      else {
            respuestaCipher = respuestaCipher + espacio;
      }
    }
    return respuestaCipher;
  },


  descifrado : (texto, numero) => {

    let respuestaCipher = "";
    const espacio = String.fromCharCode(32) 

    for (let i = 0; i < texto.length; i++) { 
      if (espacio != texto.charAt(i)) {
        const primeraLetraAscii = texto.charCodeAt(i);
        const nuevoAscii = (primeraLetraAscii - 90 - numero) % 26 + 90; 
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
