import React from "react";

const ChildComponent = (props) => {
  const propFunction = props.function;
  console.log("propFunction is", propFunction, "in ChildComponent.jsx");
  return (
    <div>
      <button onClick={propFunction}>Click me</button>
    </div>
  );
};

export default ChildComponent;
