"use strict";

const userSelect = document.getElementById("userSelect");
const todoList = document.getElementById("todoList");
const todoCard = document.querySelector("#todoCard");

async function populateUsers() {
  const userSelect = document.getElementById("userSelect");
  const users = await getData("users");

  users.forEach((user) => {
    const option = new Option(user.name, user.id);
    userSelect.appendChild(option);
  });
}

async function loadTodos() {
  todoList.innerHTML = "";

  const todos = await getData();
  let userList = todos
    .filter((todo) => todo.userid == userSelect.value)
    .map((todo) => {
      const newTodo = todoCard.cloneNode(true);
      newTodo.style.display = "block";
      newTodo.querySelector("#category").textContent = todo.category;
      newTodo.querySelector("#description").textContent = todo.description;
      newTodo.querySelector("#deadline").textContent = todo.deadline;
      return newTodo;
    });

  todoList.append(...userList);
}

userSelect.addEventListener("change", (event) => {
  loadTodos();
});

populateUsers();
