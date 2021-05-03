(() => {
  const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.username} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetch.appendChild($fragment);
    })
    .catch((err) => {
      let error = err.statusText || "error f";
      $fetch.innerHTML = `Ha ocurrido un error ${err.status}: ${error}`;
    });
})();
