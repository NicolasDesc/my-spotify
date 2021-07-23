import React from "react";

import "./SidebarOption.scss";

export default function SidebarOption({ option = "test", Icon }) {
  return (
    <div className="sidebar-option d-flex align-items-center mb-4 ms-3">
      {Icon && <Icon className="me-3" size={20} />}
      <p className={`mb-0 ${Icon && 'fw-bolder'}`}>{option}</p>
    </div>
  );
}