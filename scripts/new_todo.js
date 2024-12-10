"use strict";

const form = document.querySelector("#todoForm");

async function populateUsers() {
  const userSelect = document.getElementById("userSelect");
  const users = await getData("users");

  users.forEach((user) => {
    const option = new Option(user.name, user.id);
    userSelect.appendChild(option);
  });
}

async function populateCategories() {
  const categorySelect = document.getElementById("categorySelect");
  const categories = await getData("categories");

  categories.forEach((category) => {
    const option = new Option(category.name, category.name);
    categorySelect.appendChild(option);
  });
}

async function postData(data) {
  fetch("http://localhost:8083/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "todos.html";
      }
    })
    .catch((error) => error);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoData = {
    userid: document.getElementById("userSelect").value,
    category: document.getElementById("categorySelect").value,
    description: document.getElementById("todoDescription").value,
    deadline: document.getElementById("todoDeadline").value,
    priority: document.getElementById("urgencySelect").value,
    completed: false,
  };

  postData(todoData);
});

populateUsers();
populateCategories();
