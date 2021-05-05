const d = document,
  $title = d.querySelector(".crud-title"),
  $inputs = d.querySelectorAll(".crud-form"),
  $table = d.querySelector(".crud-table"),
  $error = d.querySelector(".error"),
  $template = d.getElementById("crud-template").content,
  $fragment = d.createDocumentFragment(),
  xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", (e) => {
  if (xhr.readyState !== 4) return;

  if (xhr.status >= 200 && xhr.status < 300) {
    let json = JSON.parse(xhr.response);
    json.forEach((el) => {
      $template.querySelector(".id").textContent = el.id;
      $template.querySelector(".name").textContent = el.nombre;
      $template.querySelector(".constellation").textContent = el.constelacion;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);
  } else {
    let error = xhr.statusText || "error f";
    $error.classList.remove("none");
    $error.innerHTML = `${xhr.status} ${error}`;
  }
});

xhr.open("GET", "http://localhost:5000/santos");

xhr.send();

d.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.matches(".crud-form")) {
    if ($inputs[0][2].value === "editar") {
      let id = parseInt($inputs[0][2].dataset.id);
      let json = {
        nombre: $inputs[0][0].value,
        constelacion: $inputs[0][1].value,
      };
      xhr.open("PUT", `http://localhost:5000/santos/${id}`);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(json));
    } else {
      let json = {
        nombre: $inputs[0][0].value,
        constelacion: $inputs[0][1].value,
      };

      xhr.open("POST", "http://localhost:5000/santos");
      xhr.setRequestHeader("Content-type", "application/json");

      xhr.send(JSON.stringify(json));
    }
  }
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".delete")) {
    let id = e.path[2].querySelector(".id").textContent;
    xhr.open("DELETE", `http://localhost:5000/santos/${id}`);
    xhr.send();
  }
  if (e.target.matches(".edit")) {
    let id = e.path[2].querySelector(".id").textContent;
    $title.textContent = "Editar Santo";
    $inputs[0][0].value = e.path[2].querySelector(".name").textContent;
    $inputs[0][1].value = e.path[2].querySelector(".constellation").textContent;

    $inputs[0][2].value = "editar";
    $inputs[0][2].dataset.id = id;
  }
});
