import React from "react";
import classes from "./Sidebar.module.css";
import Navbar from "../Navbar/Navbar";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Navbar />
    </div>
  );
};

export default Sidebar;
