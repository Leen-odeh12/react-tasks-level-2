import React, { useState } from "react";

const Usestate = () => {
  const [name, setname] = useState("someone");
  const [age, setage] = useState(0);
  const [count, setcount] = useState(0);

  const change = () => {
    setname("leen");
  };

  const change2 = () => {
    setage("22");
  };

  return (
    <div>
      <div>
        <h1>My name is {name}</h1>
        <button onClick={change}>Alter</button>
      </div>
      <div>
        <h1>My age is {age}</h1>
        <button onClick={change2}>Alter</button>
      </div>
      <div>
        <h1>count is {count}</h1>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            setcount(count - 1);
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Usestate;
