import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  notes: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, [action.field]: action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const ReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (field, value) => {
    dispatch({ type: "change", field, value });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <div>
        <label>username : </label>
        <input
          type="text"
          value={state.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
      </div>
      <div>
        <label>email : </label>
        <input
          type="email"
          value={state.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      <div>
        <label>notes : </label>
        <input
          type="text"
          value={state.notes}
          onChange={(e) => handleInputChange("notes", e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerComponent;
