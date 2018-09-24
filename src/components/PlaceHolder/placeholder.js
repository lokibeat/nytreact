import React from "react";

const Placeholder = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
    <h1>{children.text}</h1>
  </div>
);

export default Placeholder;
