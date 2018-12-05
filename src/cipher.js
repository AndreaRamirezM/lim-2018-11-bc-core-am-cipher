let encode = (offset, string) => {

    let respuestaCipher = ""; 
    const espacio = String.fromCharCode(32)

      for (let i = 0; i < string.length; i++) { 
      if (espacio != string.charAt(i)) {
        const primeraLetraAscii = string.charCodeAt(i);
        const nuevoAscii = (primeraLetraAscii - 65 + offset) % 26 + 65; 
        const respuesta = String.fromCharCode(nuevoAscii);
        respuestaCipher = respuestaCipher + respuesta;
      }
      else {
        respuestaCipher = respuestaCipher + espacio;
      }
    }
    return respuestaCipher;
    } 
    
let decode = (offset, string) => {

    let respuestaCipher = "";
    const espacio = String.fromCharCode(32) 

    for (let i = 0; i < string.length; i++) { 
      if (espacio != string.charAt(i)) {
        const primeraLetraAscii = string.charCodeAt(i);
        const nuevoAscii = (primeraLetraAscii - 90 - offset) % 26 + 90; 
        const respuesta = String.fromCharCode(nuevoAscii);
        respuestaCipher = respuestaCipher + respuesta;
      }
      else {
        respuestaCipher = respuestaCipher + espacio;
      }
    }
    return respuestaCipher;
  }

window.cipher = {
  encode : encode,

  decode : decode,

};
