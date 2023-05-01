import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    setValue(1);
  }, []);

  useEffect(() => {
    if (value === 0) return;
    console.log("value changed");
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      <h1>value is {value}</h1>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default App;
