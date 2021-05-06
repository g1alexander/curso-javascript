//Métodos
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://g1alexander.com");
});

$btnCerrar.addEventListener("click", (e) => {
  // window.close()
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});
