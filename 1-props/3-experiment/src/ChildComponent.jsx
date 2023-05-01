import React from "react";

const ChildComponent = (props) => {
  const color = props.color;
  console.log("color is", color, "in ChildComponent.jsx");
  return (
    <div
      style={{
        backgroundColor: color,
        width: "100px",
        height: "100px",
      }}
    />
  );
};

export default ChildComponent;
