import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  console.log("current value is", value);
  const increaseValue = () => {
    console.log("increaseValue function was called");
    setValue((previousValue) => {
      console.log("1st call previousValue is", previousValue);
      return previousValue + 1;
    });
    console.log("value after first setValue", value);
    setValue((previousValue) => {
      console.log("2nd call previousValue is", previousValue);
      return previousValue + 1;
    });
    console.log("value after second setValue", value);
  };
  return (
    <div>
      <h1>value is {value}</h1>
      <button onClick={increaseValue}>Increment</button>
    </div>
  );
}

export default App;
