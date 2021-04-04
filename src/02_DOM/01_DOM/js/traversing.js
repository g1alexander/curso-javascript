//Traversing: Recorriendo el DOM
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement); //padre mas cercano de la <section>
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
//cual es el ancentro mas cernado
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
