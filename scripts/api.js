"use strict"
async function getData(type, id = "") {
    return fetch(`http://localhost:8083/api/todos`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => error);
  }
  