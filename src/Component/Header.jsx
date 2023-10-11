import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "6px",
      }}
    >
      <h1>web.dev</h1>

      <nav>
        <NavLink to="/html">Html</NavLink>
        <NavLink
          to="/css"
          style={{ paddingLeft: "30px", paddingRight: "30px" }}
        >
          Css
        </NavLink>
        <NavLink to="/js">JS</NavLink>
      </nav>
    </div>
  );
};

export default Header;
