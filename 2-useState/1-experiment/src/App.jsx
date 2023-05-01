import { useState } from "react";

function App() {
  const [value, setValue] = useState("Hello World");

  console.log("value is", value);

  return <h1>{value}</h1>;
}

export default App;
