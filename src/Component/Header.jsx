import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding:"6px"
      }}
    >
      <h1>web.dev</h1>
      <button
        style={{
          width: "100px",
          height: "30px",
          borderRadius: "6px",
          border: "none",
        }}
      >
        Toggle Theme
      </button>
      <nav>
        <NavLink to="/html">Html</NavLink>
        <NavLink
          to="/css"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          Css
        </NavLink>
        <NavLink to="/js">JS</NavLink>
        {/* <>
          <NavLink
            to="/signin"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            signin
          </NavLink>
          <NavLink to="/signup">signup</NavLink>
        </> */}
      </nav>
  
    </div>
  );
};

export default Header;
