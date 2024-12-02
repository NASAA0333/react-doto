"use client";

import "./style.css";
import Image from "next/image";
import { useState } from "react";

let todos = [];

let numbers = "#" + todos[i].status;
let taskNumber = 0;
for (let i = 0; i < todos.length; i++) {
  if (numbers === "#Number") {
    taskNumber++;
  }
}
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div id="header">
      <button onClick={openModal} id="add-button">
        Add
      </button>

      {isOpen && (
        <div>
          <div>Modal</div>
          <div id="Number"></div>
          <input type="text" id="imput"></input>
          <button id="">save</button>
        </div>
      )}
    </div>
  );
}
