import React from "react";
import SidebarItem from "./SidebarItem";
import RecentPosts from "./RecentPosts";
import "./sidebar.css";
import Contact from "./Contact";

function Sidebar() {
  return (
    <React.Fragment>
      <SidebarItem title="Recent Posts">
        <RecentPosts />
      </SidebarItem>
      <SidebarItem title="Contact">
        <Contact />
      </SidebarItem>
    </React.Fragment>
  );
}

export default Sidebar;
