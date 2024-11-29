"use client";
import "./style.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={openModal}
        style={{
          position: "absolute",
          border: "1px white solid",
          width: "100px",
          height: "40px",
          marginTop: "60px",
        }}
      >
        Add
      </button>

      {isOpen && (
        <div className="modal">
          <div style={{ marginTop: "40px" }}>Modal</div>
          <input
            type="text"
            style={{
              height: "45px",
              width: "300px",
              backgroundColor: "transparent",
              border: "1px solid white",
            }}
          ></input>
        </div>
      )}
      <div className="todo"></div>
    </div>
  );
}
