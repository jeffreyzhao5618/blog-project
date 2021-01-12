import React from "react";

function SidebarItem(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-title sidebar primary" href="#">
          {props.title}
        </p>
        {props.children}
      </div>
    </div>
  );
}

export default SidebarItem;
