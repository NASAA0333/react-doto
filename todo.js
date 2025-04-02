const taskName = document.getElementById("taskName");
const statusSelect = document.getElementById("statusSelect");
const taskPopup = document.getElementById("taskPopup");
const taskContainerMain = document.getElementById("taskContainerMain");
const section1 = document.createElement("section");
const section2 = document.createElement("section");
const section3 = document.createElement("section");
const section4 = document.createElement("section");
taskContainerMain.appendChild(section1);
taskContainerMain.appendChild(section2);
taskContainerMain.appendChild(section3);
taskContainerMain.appendChild(section4);
const editTaskPopup = document.getElementById("editTaskPopup");
const sectionHeader1 = document.createElement("div");
const sectionHeader2 = document.createElement("div");
const sectionHeader3 = document.createElement("div");
const sectionHeader4 = document.createElement("div");
section1.appendChild(sectionHeader1);
section2.appendChild(sectionHeader2);
section3.appendChild(sectionHeader3);
section4.appendChild(sectionHeader4);
sectionHeader1.setAttribute("class", "sectionHeader");
sectionHeader2.setAttribute("class", "sectionHeader");
sectionHeader3.setAttribute("class", "sectionHeader");
sectionHeader4.setAttribute("class", "sectionHeader");
sectionHeader1.innerHTML = "<div class='statusBar1'></div>" + "<h1> To do</h1>";
sectionHeader2.innerHTML =
  "<div class='statusBar2'></div>" + "<h1> In progress</h1>";
sectionHeader3.innerHTML = "<div class='statusBar3'></div>" + "<h1> Done</h1>";
sectionHeader4.innerHTML =
  "<div class='statusBar4'></div>" + "<h1> Blocked</h1>";
let taskCounter1 = 0;
let taskCounter2 = 0;
let taskCounter3 = 0;
let taskCounter4 = 0;
let counterPrint1 = document.createElement("h3");
let counterPrint2 = document.createElement("h3");
let counterPrint3 = document.createElement("h3");
let counterPrint4 = document.createElement("h3");

function popup() {
  taskPopup.style.display = "block";
}
function closePopup() {
  taskPopup.style.display = "none";
}

function addTask() {
  let taskDiv = document.createElement("div");
  taskDiv.setAttribute("class", "addedTasks");

  if (taskName.value === "") {
    alert("You must write your task");
    return;
  }

  let h3Name = document.createElement("h3");
  h3Name.innerHTML = taskName.value;

  let editButton = document.createElement("i");
  editButton.setAttribute("class", "fa fa-edit");
  editButton.setAttribute("id", "editButton");
  editButton.setAttribute("onclick", "editTask(this)");

  let removeButton = document.createElement("i");
  removeButton.setAttribute("class", "fa fa-trash");
  removeButton.setAttribute("id", "removeButton");
  removeButton.setAttribute("onclick", "deleteTask(this)");

  taskDiv.appendChild(h3Name);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(removeButton);
  if (statusSelect.value === "to-do") {
    section1.appendChild(taskDiv);
    taskCounter1++;
    counterPrint1.innerText = taskCounter1;
  } else if (statusSelect.value === "in-progress") {
    section2.appendChild(taskDiv);
    taskCounter2++;
    counterPrint2.innerText = taskCounter2;
  } else if (statusSelect.value === "done") {
    section3.appendChild(taskDiv);
    taskCounter3++;
    counterPrint3.innerText = taskCounter3;
  } else if (statusSelect.value === "blocked") {
    section4.appendChild(taskDiv);
    taskCounter4++;
    counterPrint4.innerText = taskCounter4;
  }
  sectionHeader1.appendChild(counterPrint1);
  sectionHeader2.appendChild(counterPrint2);
  sectionHeader3.appendChild(counterPrint3);
  sectionHeader4.appendChild(counterPrint4);
}

function deleteTask(button) {
  let parentSection = button.parentElement.parentElement;
  button.parentElement.remove();

  if (parentSection === section1) {
    taskCounter1--;
    counterPrint1.innerHTML = taskCounter1;
  } else if (parentSection === section2) {
    taskCounter2--;
    counterPrint2.innerHTML = taskCounter2;
  } else if (parentSection === section3) {
    taskCounter3--;
    counterPrint3.innerHTML = taskCounter3;
  } else if (parentSection === section4) {
    taskCounter4--;
    counterPrint4.innerHTML = taskCounter4;
  }
}
let currentEditingTask;
function editTask(button) {
  currentEditingTask = button.parentElement;
  const taskName = currentEditingTask.children[0].innerText;

  document.getElementById("editTaskName").value = taskName;

  const currentSection = currentEditingTask.parentElement;
  let currentStatus = "";
  if (currentSection === section1) currentStatus = "to-do";
  else if (currentSection === section2) currentStatus = "in-progress";
  else if (currentSection === section3) currentStatus = "done";
  else if (currentSection === section4) currentStatus = "blocked";

  document.getElementById("editStatusSelect").value = currentStatus;

  document.getElementById("editTaskPopup").style.display = "block";
}

function closeEditPopup() {
  document.getElementById("editTaskPopup").style.display = "none";
}

function saveEditedTask() {
  const newTaskName = document.getElementById("editTaskName").value;
  const newStatus = document.getElementById("editStatusSelect").value;
  const currentStatus = document.getElementById("statusSelect").value;
  currentEditingTask.children[0].innerText = newTaskName;

  if (newStatus === currentStatus) {
    closeEditPopup();
    return;
  }

  let targetSection;
  if (newStatus === "to-do") {
    targetSection = section1;
    taskCounter1++;
    counterPrint1.innerText = taskCounter1;
  } else if (newStatus === "in-progress") {
    targetSection = section2;
    taskCounter2++;
    counterPrint2.innerText = taskCounter2;
  } else if (newStatus === "done") {
    targetSection = section3;
    taskCounter3++;
    counterPrint3.innerText = taskCounter3;
  } else if (newStatus === "blocked") {
    targetSection = section4;
    taskCounter4++;
    counterPrint4.innerText = taskCounter4;
  }

  const currentSection = currentEditingTask.parentElement;
  if (currentSection !== targetSection) {
    currentSection.removeChild(currentEditingTask);
    if (currentSection === section1) {
      taskCounter1--;
      counterPrint1.innerText = taskCounter1;
    } else if (currentSection === section2) {
      taskCounter2--;
      counterPrint2.innerText = taskCounter2;
    } else if (currentSection === section3) {
      taskCounter3--;
      counterPrint3.innerText = taskCounter3;
    } else if (currentSection === section4) {
      taskCounter4--;
      counterPrint4.innerText = taskCounter4;
    }

    targetSection.appendChild(currentEditingTask);
  }

  closeEditPopup();
}
function filterTasksByStatus() {
  const selectedStatus = document.getElementById("statusFilter").value;

  section1.classList.remove("active-section");
  section2.classList.remove("active-section");
  section3.classList.remove("active-section");
  section4.classList.remove("active-section");

  if (selectedStatus === "to-do") {
    section1.classList.add("active-section");
  } else if (selectedStatus === "in-progress") {
    section2.classList.add("active-section");
  } else if (selectedStatus === "done") {
    section3.classList.add("active-section");
  } else if (selectedStatus === "blocked") {
    section4.classList.add("active-section");
  }
}

function initializeMobileView() {
  section1.classList.add("active-section");
}

window.onload = initializeMobileView;
