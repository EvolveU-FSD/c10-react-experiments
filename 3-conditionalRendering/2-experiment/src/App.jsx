import { useState } from "react";

function App() {
  const [showItem, setShowItem] = useState(true);
  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setShowItem(!showItem)}>Toggle</button>
      {showItem && <p>I am visible!</p>}
    </div>
  );
}

export default App;
