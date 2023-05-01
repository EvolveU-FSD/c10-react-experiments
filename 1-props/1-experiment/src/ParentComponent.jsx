import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <div>
      <ChildComponent color="orange" />
    </div>
  );
}

export default ParentComponent;
