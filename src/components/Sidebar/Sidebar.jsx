import React, { useContext } from "react";
import classes from "./Sidebar.module.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
import { SidebarContext } from "../../contex/SidebarContext";
import { SettingsContext } from "../../contex/SettingsContext";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
const Sidebar = (props) => {
  const { isSidebarVisible } = useContext(SidebarContext);
  const { isSettingsVisible } = useContext(SettingsContext);

  return (
    <div
      className={`${isSidebarVisible ? classes.hideSideBar : classes.sidebar}`}
    >
      <Navbar />
      {isSettingsVisible ? (
        <SettingsMenu />
      ) : (
        <>
          <Search />
          <Chats />
        </>
      )}
    </div>
  );
};

export default Sidebar;
