import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent color="orange" />
      <ChildComponent color="blue" />
    </div>
  );
}

export default ParentComponent;
