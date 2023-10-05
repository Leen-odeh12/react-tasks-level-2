import { NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/Config";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {user && (
        <div>
          <NavLink to="/html">Html</NavLink>
          <NavLink
            to="/css"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            Css
          </NavLink>
          <NavLink to="/js">Js</NavLink>
          <NavLink  style={{paddingLeft:"20px"}} onClick={()=>{

const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
          }}>sign-out</NavLink>
        </div>
      )}
      <h1>web.dev</h1>

      <nav>
        {/* <NavLink to="/html">Html</NavLink>
        <NavLink
          to="/css"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          Css
        </NavLink>
        <NavLink to="/js" >Js</NavLink> */}
        {!user && (
          <>
            <NavLink
              to="/signin"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              signin
            </NavLink>
            <NavLink to="/signup">signup</NavLink>{" "}
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
