import React from "react";

export default function Bar({ name, age }) {
  
  return (
    <>
      <h1>Hello from Bar to {name}</h1>
      <h1>Votre age est : {age}</h1>
    </>
  );
}

export const TOTO = 23;
