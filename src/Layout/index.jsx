import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { useTheme } from "./../Context/ThemeContext";

const Layout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
      <button onClick={toggleTheme}>change</button>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
