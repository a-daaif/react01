import React from "react";
import Lib from "./lib.jsx";

const Foo = ({y, incrementHandler}) => {
  return (
      <>
        <Lib  x="33" y={y}/>
        <button 
        className="btn btn-primary btn-block"
        onClick={() => incrementHandler(10)}>Incrémenter</button>
      </>
  );
};

export default Foo;
