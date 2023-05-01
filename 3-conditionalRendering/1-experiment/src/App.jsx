import { useState } from "react";

function App() {
  const showItem = true;
  return (
    <div>
      <h1>App</h1>
      {showItem && <p>I am visible!</p>}
    </div>
  );
}

export default App;
