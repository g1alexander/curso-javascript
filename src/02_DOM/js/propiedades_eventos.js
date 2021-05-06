//Propiedades y Eventos
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("****evento resize****");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});

window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("****evento scroll****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.log("****evento load****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("****DOMContentLoaded****");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});
