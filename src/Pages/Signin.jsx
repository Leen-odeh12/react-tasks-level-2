import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase/Config";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
        <input
          type="text"
          style={{ padding: "10px" }}
          placeholder="username"
          required
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          required
          type="password"
          style={{ padding: "10px", margin: "20px" }}
          placeholder="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
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
          onClick={(e) => {
            e.preventDefault();
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
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
