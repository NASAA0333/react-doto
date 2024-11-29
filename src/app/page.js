"use client";

import { useState } from "react";
export default function Home() {
  const [index, setIndex] = useState(0);
  
  return (
    <>
      <button type="button" onClick={() => setIndex(index + 1)} className="">
        +
      </button>
      <button type="button" onClick={() => setIndex(index - 1)} className="">
        -
      </button>
      <h1>{index}</h1>
      <button onClick={}>add</button>
    </>
    
  );
}
