import "./styles.css";
import { useState, useCallback } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Richa");
  const handleClick = () => {
    setCount(count + 1);
  };
  const functionDemo = useCallback(() => {
    console.log("Picha");
  }, [name]);
  return (
    <div className="App">
      <Child name={name} functionDemo={functionDemo} />
      <button onClick={handleClick}> Count {count} </button>
    </div>
  );
}
