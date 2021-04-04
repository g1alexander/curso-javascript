//Creando Elementos y Fragmentos
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figCaption = document.createElement("figcaption"),
  $figCaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figCaption.appendChild($figCaptionText);
$figure.appendChild($img);
$figure.appendChild($figCaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
  <img src="https://placeimg.com/200/200/tech" alt="tech" />
  <figcaption>tech</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera", "verano", "otoño", "invierno"],
  $ul = document.createElement("ul");

document.write("<h3>estaciones</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

document.write("<h3>continentes</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = ""; //recomendable, mas no necesario
continentes.forEach((el) => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

//forma recomendada :)
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>meses</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
