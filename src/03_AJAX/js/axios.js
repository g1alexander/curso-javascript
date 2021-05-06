(() => {
  const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      let json = res.data;
      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.username} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axios.appendChild($fragment);
    })
    .catch((err) => {
      let error = err.response.statusText || "error f";
      $axios.innerHTML = `Ha ocurrido un error ${err.response.status}: ${error}`;
    });
})();
