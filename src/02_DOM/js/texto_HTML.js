//Texto y HTML
const $whatIfDOM = document.getElementById("que-es");
let text = `
  <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
  API para documentos HTML y XML.
      </p>
      <p>
      Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
      </p>
      <p>
          <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
      </p>
  `;
//$whatIfDOM.innerText = text; //no estandar
$whatIfDOM.textContent = text; //estandar
$whatIfDOM.innerHTML = text;
$whatIfDOM.outerHTML = text;
