import { operaciones } from "./aritmetica.js";
import contra, {
  PI,
  usuario as user,
  hello,
  exportfunt,
  claseExp,
} from "./variables.js";

console.log(operaciones.sumar(3, 4));
console.log(operaciones.restar(3, 4));

console.log("****************");

console.log(contra);
console.log(PI);
console.log(user);
hello();
exportfunt();

let clase = new claseExp();
clase;
