"use client";
import "./todo-style.css";
import "./todo-box";
export default function Home() {
  return (
    <div>
      <div class="main-inside">
        <div class="header">
          <button onclick="addTodo()" class="add-task-button">
            Add task
          </button>
        </div>

        <div class="all-black-box">
          <div class="black-box">
            <div class="box-header">
              <div class="white-sircle"></div>
              <h1 class="title">To do</h1>
              <div id="todoCounter" class="meter"></div>
            </div>
            <div id="todos" class="todos"></div>
          </div>

          <div class="black-box">
            <div class="box-header">
              <div class="yellow-sircle"></div>
              <h1 class="title">In progress</h1>
              <div id="inProgressCounter" class="meter"></div>
            </div>
            <div id="inprogress" class="todos"></div>
          </div>

          <div class="black-box">
            <div class="box-header">
              <div class="green-sircle"></div>
              <h1 class="title">Done</h1>
              <div id="doneCounter" class="meter"></div>
            </div>
            <div id="done" class="todos"></div>
          </div>

          <div class="black-box">
            <div class="box-header">
              <div class="red-sircle"></div>
              <h1 class="title">Blocked</h1>
              <div id="blockedCounter" class="meter"></div>
            </div>
            <div id="blocked" class="todos"></div>
          </div>
        </div>
      </div>

      <div class="modal" id="modal">
        <div class="modal-content">
          <h2>Enter task</h2>
          <input type="text" id="taskName" class="add-text" />

          <select id="task-status" value="todo">
            <option value="todos">Todo</option>
            <option value="inprogress">in progress</option>
            <option value="done">done</option>
            <option value="blocked">Blocked</option>
          </select>
          <button onclick="saveTodo()" class="add-task-button-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
