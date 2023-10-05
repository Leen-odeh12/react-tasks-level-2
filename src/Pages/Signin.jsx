import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          padding: "20px",
          backgroundColor: "pink",
          margin: "100px",
        }}
      >
        <input type="text" style={{ padding: "10px" }} placeholder="username" />
        <input
          type="password"
          style={{ padding: "10px", margin: "20px" }}
          placeholder="password"
        />
        <button
          style={{
            padding: "10px",
            backgroundColor: "#242424",
            color: "white",
            borderRadius: "6px",
            width: "200px",
            margin: "auto",
          }}
        >
          Login
        </button>
        <p>
          Dont have an account <Link to="/signup">signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
