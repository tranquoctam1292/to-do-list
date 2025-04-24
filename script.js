// script.js
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todos.forEach((todo, i) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.innerHTML = `
      ${todo.text}
      <span>
        <button onclick="toggle(${i})">✔</button>
        <button onclick="del(${i})">🗑</button>
      </span>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const text = input.value.trim();
  if (text) {
    todos.push({ text, done: false });
    saveTodos();
    render();
    input.value = "";
  }
}

function toggle(i) {
  todos[i].done = !todos[i].done;
  saveTodos();
  render();
}

function del(i) {
  todos.splice(i, 1);
  saveTodos();
  render();
}

document.getElementById("add-btn").addEventListener("click", addTodo);
render();
