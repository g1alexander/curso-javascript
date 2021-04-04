//Manejadores de Eventos
function holamundo() {
  alert("hola mundo");
}
const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holamundo;
$eventoSemantico.onclick = function (e) {
  alert("manejador semantico");
  console.log(e);
};

$eventoMultiple.addEventListener("click", (e) => {
  alert("manejador multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});
$eventoMultiple.addEventListener("click", holamundo);
