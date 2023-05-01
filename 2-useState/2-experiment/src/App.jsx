import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  console.log("current value is", value);
  const increaseValue = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>value is {value}</h1>
      <button onClick={increaseValue}>Increment</button>
    </div>
  );
}

export default App;
