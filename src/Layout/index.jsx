import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import { ThemeContext } from "../Context/ThemeProvider";
import { useContext } from "react";


const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
   <div style={{backgroundColor: theme.backgroundColor, color: theme.textColor}}>
    <Header/>
    <button
        style={{
          width: "100px",
          height: "30px",
          borderRadius: "6px",
          border: "none",
        }}
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    <Outlet />
    <Footer/>
   </div>
    
  )
}

export default Layout