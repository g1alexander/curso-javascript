// validaciones expresiones
let validarId = /^[a-zA-Z]{2}[\d]{7}$/;
let validarString = /^[a-zA-Z]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
let validarAnio = /^[0-9]{4}$/;
//----------------------------------------------------
// generos
const generos = [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality TV",
  "Romance",
  "Sci Fi",
  "Short",
  "Sport",
  "Talk Show",
  "Thriller",
  "War",
  "Western",
];
const mostrarGeneros = () => {
  console.log("**************************************************");
  console.log("los generos que puedes ingresar son los siguientes");
  console.table(generos);
  console.log("**************************************************");
};
//----------------------------------------------------
// clase Pelicula
const isRequired = function () {
  console.warn("debes enviar un objeto");
};
class Pelicula {
  constructor(objeto = isRequired()) {
    this.objeto = objeto;
  }
  ficha() {
    console.log(`**********************************`);
    console.log(`Ficha de la pelicula "${this.objeto.titulo}"`);
    console.log(`----------------------------------`);
    console.log(`Identificador: ${this.objeto.id}`);
    console.log(`Titulo: ${this.objeto.titulo}`);
    console.log(`Director: ${this.objeto.director}`);
    console.log(`Anio: ${this.objeto.anio}`);
    console.log(`Pais: ${this.objeto.pais}`);
    console.log(`Generos: ${this.objeto.generos}`);
    console.log(`Calificacion: ${this.objeto.calificacion}`);
    console.log(`**********************************`);
  }
}
//----------------------------------------------------
// llenado de datos
const datosPelicula = (...datos) => {
  /* ------------------------------------ */
  /* validaciones de los datos que llegan */
  /* ------------------------------------ */
  if (datos.length > 7)
    return console.warn("solo son 7 datos que debes ingresar");
  if (datos.length === 0) return console.warn("debes poner los datos");
  if (typeof datos[0] !== "string")
    return console.error("el primer valor debe ser un string");
  if (validarId.exec(datos[0]) === null)
    return console.error(
      "el primer valor debe tener 9 caracteres, los primeros 2 sean letras y los 7 restantes números."
    );
  if (typeof datos[1] !== "string" || validarString.exec(datos[1]) === null)
    return console.error("el segundo valor debe ser un string");
  if (datos[1].length > 100)
    return console.error("el título no debe rebasar los 100 caracteres.");
  if (typeof datos[2] !== "string" || validarString.exec(datos[2]) === null)
    return console.error("el tercer valor debe ser un string");
  if (datos[2].length > 50)
    return console.error("el director no debe rebasar los 50 caracteres.");
  if (typeof datos[3] !== "number" || validarAnio.exec(datos[3]) === null)
    return console.error(
      "el cuarto valor debe ser un number y debe ser mayor a 1895"
    );
  if (datos[3] < 1895)
    return console.error("el el anio debe ser mayor o igual a 1895.");
  if (!(datos[4] instanceof Array))
    return console.error("el quinto valor debes ingresar un array");
  if (datos[4].length === 0)
    return console.error("el array de los paises no puede estar vacio");
  for (const elem of datos[4]) {
    if (
      typeof elem !== "string" ||
      validarString.exec(elem) === null ||
      elem === ""
    )
      return console.error(
        "el quinto array debe ser string y no puede estar vacio"
      );
  }
  if (datos[5] instanceof Array === false)
    return console.error("el sexto valor debes ingresar un array");
  if (datos[5].length === 0)
    return console.error("el array de los generos no puede estar vacio");
  for (const elemt of datos[5]) {
    if (typeof elemt !== "string" || elemt === "")
      return console.error(
        "el sexto array debe ser string y no puede estar vacio"
      );
    if (generos.includes(elemt) === false)
      return console.warn("debes introducir un genero valido");
  }
  if (typeof datos[6] !== "number")
    return console.error("el septimo valor debe ser un number entre 0 a 10");
  if (datos[6] < 0 || datos[6] > 10)
    return console.error("la calificacion debe ser de 0 a 10");
  /* ------------------------------------------ */
  /* validaciones de los datos que llegan - fin */
  /* ------------------------------------------ */

  const pelicula = new Pelicula({
    id: datos[0],
    titulo: datos[1],
    director: datos[2],
    anio: datos[3],
    pais: datos[4],
    generos: datos[5],
    calificacion: datos[6].toFixed(1),
  });

  pelicula.ficha();
  console.log("**********************************");
};

//----------------------------------------------------
// ejecuciones

datosPelicula(
  "iu2312413",
  "The Joker",
  "Joaquin Phoenix",
  2019,
  ["EEUU"],
  ["Action", "Adult"],
  8.8
);
datosPelicula(
  "eu2346242",
  "Back to the Future",
  "Robert Zemeckis",
  1985,
  ["EEUU", "Francia"],
  ["Action", "Fantasy", "Mystery", "Adventure"],
  9.2
);

// mostrarGeneros();
