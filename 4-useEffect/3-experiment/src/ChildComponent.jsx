import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("component mounted");
    return () => console.log("cleanup function");
  }, []);

  return <div>Child</div>;
}

export default App;
