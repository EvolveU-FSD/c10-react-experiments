import { useState } from "react";

function App() {
  const [itemToShow, setItemToShow] = useState("one");

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setItemToShow("one")}>Show Item 1</button>
      <button onClick={() => setItemToShow("two")}>Show Item 2</button>
      {itemToShow === "one" ? <p>One</p> : <p>Two</p>}
    </div>
  );
}

export default App;
