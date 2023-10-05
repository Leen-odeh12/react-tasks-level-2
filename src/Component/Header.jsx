import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div
      style={{ display:"flex"
      ,justifyContent:"space-around", alignItems:"center"}}
    >
      <h1>web.dev</h1>
     
      <nav>
        <NavLink to="/html">Html</NavLink>
        <NavLink
          to="/css"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          Css
        </NavLink>
        <NavLink to="/js" >Js</NavLink>
        <NavLink to="/signin" style={{paddingLeft: "20px", paddingRight: "20px"}}>signin</NavLink>
        <NavLink to="/signup">signup</NavLink>
      </nav>
    </div>
  );
};

export default Header;
