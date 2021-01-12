import React from "react";
import SidebarItem from "./SidebarItem";
import "./sidebar.css";

function Sidebar() {
  return (
    <React.Fragment>
      <SidebarItem title="Current Time">
        <p>This is a test</p>
      </SidebarItem>
      <SidebarItem title="Recent Posts">
        <p>This is a test</p>
      </SidebarItem>
      <SidebarItem title="Tags">
        <p>This is a test</p>
      </SidebarItem>
      <SidebarItem title="Socials">
        <p>This is a test</p>
      </SidebarItem>
    </React.Fragment>
  );
}

export default Sidebar;
