//Flujo de Eventos (Burbuja y Captura)

const $divEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEvento(e) {
  console.log(
    `hola te saluda ${this.className}, el evento lo origino ${e.target.className}`
  );
}

$divEventos.forEach((div) => {
  //fase de burbuja

  // div.addEventListener("click", flujoEvento);

  //fase de captura

  // div.addEventListener("click", flujoEvento, true);
  div.addEventListener("click", flujoEvento, {
    capture: true, //referencia a captura o burbuja
    once: true, //ejecutara el evento solo una vez
  });
});
