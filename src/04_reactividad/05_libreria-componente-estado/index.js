import { Component } from "./Component.js";

const app = new Component({
  el: "#todos",
  data: {
    todos: [],
  },
  template: function (props) {
    if (props.todos.length < 1) {
      return /*html*/ `<p>No hay listas por completar</p>`;
    }
    let todos = props.todos.map((item) => /*html*/ `<li>${item}</li>`).join("");
    return todos;
  },
});

const d = document;

d.addEventListener("DOMContentLoaded", app.render());

d.addEventListener("submit", (e) => {
  if (!e.target.matches("#form-todo")) return false;

  e.preventDefault();
  const $todo = d.getElementById("todo-item");

  //actualizar el state de forma reactiva  e inmutable
  const data = app.getState();
  data.todos.push($todo.value);
  app.setState({
    todos: data.todos,
  });

  // limpiar input
  $todo.value = "";
  $todo.focus();
});
