// stopPropagation & preventDefault
const $divEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEvento(e) {
  console.log(
    `hola te saluda ${this.className}, el evento lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

$divEventos.forEach((div) => {
  div.addEventListener("click", flujoEvento);
});

$linkEventos.addEventListener("click", (e) => {
  alert("hola :)");
  e.preventDefault();
  e.stopPropagation();
});
