import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [showChild, setShowChild] = useState(true);
  return (
    <div>
      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
      {showChild && <ChildComponent />}
    </div>
  );
};

export default ParentComponent;
