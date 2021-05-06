//Atributos y Data-Attributes
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.setAttribute("lang", "es");
console.l;
og(document.documentElement.getAttribute("lang"));
document.documentElement.lang = "es-CO";
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://g1alexander.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//data-
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //lo devuelve en forma de map
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "modelo de objeto del documento");
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "hola mundo";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-description"));
