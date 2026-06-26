import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const xRef = useRef(10);

  useEffect(() => {
    console.log(xRef.current);
  }, [count]);
  // useEffect(() => {
  //   console.log("Component mounted");
  // }, [count]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("Interval running");
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // });

  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 5)}>+</button>
      <button onClick={() => setCount(count - 2)}>-</button>
    </>
  );
}

export default App;
