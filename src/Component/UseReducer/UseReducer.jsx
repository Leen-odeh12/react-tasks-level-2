import React, { useReducer } from 'react';

const UseReducer = () => {
  const data = [
    { name: "leen", age: 22 },
    { name: "salma", age: 14 },
    { name: "ali", age: 33 },
    { name: "ahmad", age: 23 }
  ];

  const reducer = (state, action) => {
    switch (action.type) {
      case "changeName":
        return state.map(item => {
          if (item.name === state[3].name) {
            return { ...item, name: action.newvalue };
          }
          return item;
        });

      default:
        return state;
    }
  };

  const [alldata, dispatch] = useReducer(reducer, data);

  const alter = () => {
    dispatch({
      type: "changeName",
      newvalue: "hala"
    });
  };

  return (
    <div>
      {alldata.map((e, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "#242424",
              padding: "20px",
              color: "white",
              margin: "auto",
              marginTop: "30px",
              width: "400px",
              textAlign: "center"
            }}
          >
            <h3>My name is {e.name}</h3>
            <h3>My age is {e.age}</h3>
            <button onClick={alter}>change</button>
          </div>
        );
      })}
    </div>
  );
};

export default UseReducer;
