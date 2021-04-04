// Delegación de Eventos

/*En delegacion de eventos no necesitamos el e.stopPropagation()*/
const scot = function (e) {
  console.log(
    `hola te saluda ${this.className}, el evento lo origino ${e.target.className}`
  );
};

/*
METODO NO ADECUADO
$divEventos.forEach((div) => {
  div.addEventListener("click", flujoEvento);
}); */

document.addEventListener("click", (e) => {
  console.log("click en", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    scot.apply(e.target, [e]);
  }
  if (e.target.matches(".eventos-flujo a")) {
    alert("hola :)");
    e.preventDefault();
  }
});
