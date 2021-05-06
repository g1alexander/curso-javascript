//Templetes HTML
const $templete = document.getElementById("templete-card").content,
  $cards = document.querySelector(".cards"),
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

cardContent.forEach((el) => {
  $templete.querySelector("img").setAttribute("src", el.img);
  $templete.querySelector("img").setAttribute("alt", el.title);
  $templete.querySelector("figcaption").textContent = el.title;

  /*Necesitamos clonar la estrutura, esto para que pueda crear mas de 
    una "figure" eso lo hacemos atraves de importNode
    true: clona la estrutura interna
    false: clona solo la etiqueta*/
  let $clone = document.importNode($templete, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
