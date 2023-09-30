import React from "react";
import {useReducer} from "react";

const data = {
  name: "leen",
  age: 22,
  count: 0,
  theme: "white",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changename":
      return { ...state, name: action.new };

    case "changeage":
      return { ...state, age: action.new };

      case "changecount":
      return { ...state, count: action.new };


    default:
      return state;
  }
};
const Reducer = () => {
  const [alldata, dispatch] = useReducer(reducer, data);
  return (
    <div>
      <div>
        <h3>My name is {alldata.name}</h3>
        <button onClick={() => dispatch({ type: "changename", new: "hala" })}>
          change
        </button>
      </div>

      <div>
        <h3>My nage is {alldata.age}</h3>
        <button onClick={() => dispatch({ type: "changeage", new: 33 })}>
          change
        </button>
      </div>
      <div>
        <h3> count is {alldata.count}</h3>
        <button onClick={() => dispatch({ type: "changecount", new: alldata.count + 1 })}>
          change
        </button>
      </div>
    </div>
  );
};

export default Reducer;
