//Modificando Elementos (Old Style)
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $clone = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]); remplaza un nodo
// $cards.removeChild($cards.lastElementChild); elimina un nodo
// $cards.insertBefore($newCard, $cards.firstElementChild); insertar un nodo antes del primero
document.body.appendChild($clone); //clona toda una seccion
