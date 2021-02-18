// variables
export const PI = Math.PI;
export let usuario = "alex";

/*
  Tenga en cuenta que no es posible usar var, let o const con export default.
  export default let password = "hola"

  si queremos hacerlo primero hay que inicializar la variable
*/

let password = "hola";
export default password;

// funciones
export const hello = () => console.log("hola mundo");
export function exportfunt() {
  console.log("funcion exportada");
}

// clases
export class claseExp {
  constructor() {
    console.log("clase exportada");
  }
}
