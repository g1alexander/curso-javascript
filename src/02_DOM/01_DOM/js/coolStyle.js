//Modificando Elementos (Cool Style)

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");

// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="Any" />
//   <figcaption>Any</figcaption>
// `;
let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any" />
  <figcaption> </figcaption>
`;
$newCard.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin", $newCard);

// $cards.before($newCard); //hermano anterior
// $cards.prepend($newCard); //primer hijo
// $cards.append($newCard); //ultimo hijo
// $cards.after($newCard); //hermano posterior
