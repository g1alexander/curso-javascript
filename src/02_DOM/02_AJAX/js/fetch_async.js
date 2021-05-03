(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();

  async function getPeticion() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users"),
        json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      json.forEach((el) => {
        let $li = document.createElement("li");
        $li.innerHTML = `${el.username} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      let error = err.statusText || "error f";
      $fetchAsync.innerHTML = `Ha ocurrido un error ${err.status}: ${error}`;
    } finally {
      // se ejecutara cualquier cosa idenpendientemente de que sea
      // try o catch
    }
  }

  getPeticion();
})();
