import React from "react";
import "./style.scss";
import { Icon } from "../Icon/Icon";

const Side = () => {
  let activeIcon ='File_Document'

  let iconNames = [
    "Circle",
    "House_01",
    "Users_Group",
    "Calendar_Check",
    "Share_Android",
    "File_Document",
    "Notebook",
    "Heart_01",
    "Chevron_Right_MD",
  ];

  return (
    <div className="side">
      <div className="side-icons">
        {iconNames.map((name) => (
          <div className={`side-icon ${name === activeIcon ? 'active':''}`}>
            <Icon name={name} />
          </div>
        ))}
      </div>
      <div className="side-icons">
        <div className="side-icon">
          <Icon name="Setting" />
        </div>
        <div className="name">AS</div>
      </div>
    </div>
  );
};

export default Side;
