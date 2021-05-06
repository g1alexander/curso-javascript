(() => {
  const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();

  async function getData() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
        json = res.data;

      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.username} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $axiosAsync.appendChild($fragment);
    } catch (err) {
      let error = err.response.statusText || "error f";
      $axiosAsync.innerHTML = `Ha ocurrido un error ${err.response.status}: ${error}`;
    } finally {
    }
  }

  getData();
})();
