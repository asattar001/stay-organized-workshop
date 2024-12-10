"use strict";
async function getData(type = "todos", id = "") {
  return fetch(`http://localhost:8083/api/${type}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
}
