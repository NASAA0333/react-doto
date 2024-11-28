const STATUS = "TODO" || "DONE";

let todos = [];
let i = 0;
// todo add
function addOne(newTodo) {
  todos.push(newTodo);
}

// status uurchluh :func
function editStatus(index, status) {
  let item = todos[index];
  item.status = status;
}

// Ner uurchilih :Func
function editName(index, name) {
  let item = todos[index];
  item.name = name;
  render();
}

//Todo delete one item
function deleteOne(index) {
  console.log(index);
  let arr = [];
  for (let i = 0; i < todos.length; i++) {
    if (i !== index) {
      arr.push(todos[i]);
    }
  }
  todos = arr;
  render();
}

// todo delete all
function deleteAll() {
  todos = [];
  render();
}

// Count DONE
function countDone() {
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    let item = todos[i];
    if (item.status === "DONE") {
      count++;
    }
  }

  return count;
}

// RUNNING APPLICATION

// function render
function render() {
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#inprogress").innerHTML = "";
  document.querySelector("#done").innerHTML = "";
  document.querySelector("#blocked").innerHTML = "";

  let todoCounter = 0;
  let inProgressCounter = 0;
  let doneCounter = 0;
  let blockedCounter = 0;

  for (let i = 0; i < todos.length; i++) {
    const todolist = document.querySelector("#" + todos[i].status);
    let containerName = "#" + todos[i].status;
    console.log(todolist);
    const item = todos[i];
    // tooloh system
    if (containerName === "#todos") {
      todoCounter++;
    } else if (containerName === "#inprogress") {
      inProgressCounter++;
    } else if (containerName === "#done") {
      doneCounter++;
    } else if (containerName === "#blocked") {
      blockedCounter++;
    }

    // create task item
    const element = document.createElement("div");
    element.classList.add("todo-item");

    //   create task name
    const titleEl = document.createElement("p");
    titleEl.style.color = "#ffffff";
    titleEl.innerText = item.name;

    //   create edit button
    const btnEl = document.createElement("i");
    btnEl.classList.add("fa-solid", "fa-pen");
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      editName(i, newName);
    };

    //   DELETE

    const btnDelete = document.createElement("i");
    btnDelete.classList.add("fa-solid", "fa-trash");

    btnDelete.onclick = function () {
      deleteOne(i);
    };

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(btnDelete);

    todolist.appendChild(element);
  }
  document.getElementById("todoCounter").innerHTML =
    '<span class="counter">' + todoCounter + "</span>";
  document.getElementById("inProgressCounter").innerHTML =
    '<span class="counter">' + inProgressCounter + "</span>";
  document.getElementById("doneCounter").innerHTML =
    '<span class="counter">' + doneCounter + "</span>";
  document.getElementById("blockedCounter").innerHTML =
    '<span class="counter">' + blockedCounter + "</span>";
}
function addTodo() {
  const modal = document.querySelector("#modal");
  modal.style.display = "block";
}
function saveTodo() {
  const inputValue = document.getElementById("taskName").value;
  const statsuValue = document.getElementById("task-status").value;
  todos.push({
    name: inputValue,
    status: statsuValue,
  });
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  render();
}
function meter() {
  console.log(i);
}
