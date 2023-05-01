import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    if (value === 0) return;
    console.log("value changed");
  }, [value]);

  return (
    <div>
      <h1>value is {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default App;
