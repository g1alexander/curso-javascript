//Eventos con Parámetros y Remover Eventos
const $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

function saludar(nombre = "desconocido-a") {
  alert(`Hola ${nombre}`);
}

// $eventoMultiple.addEventListener("click", saludar); //{object mouse event}
$eventoMultiple.addEventListener("click", () => saludar());

const remover = () => {
  alert("removiendo evento");
  $eventoRemover.disabled = true;
  $eventoRemover.removeEventListener("click", remover);
};
$eventoRemover.addEventListener("click", remover);
