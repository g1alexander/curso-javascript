//Nodos, elementos, selectores

//metodos que ya no se suelen utilizar
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("cards"));
console.log(document.getElementsByName("nombre"));
//***************************************************
console.log(document.getElementById("menu")); //recomendable
// console.log(document.querySelector("#menu")); no es recomendable para los id por temas de rendimiento
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));

console.log(document.querySelector(".cards"));
console.log(document.querySelectorAll(".cards"));
console.log(document.querySelectorAll(".cards")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
