import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Controlled from "./components/Controlled";
import BigForm from "./components/BigForm";

function App() {
  const headingStyle = {
    color: "blue",
    backgroundColor: "lightgray",
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state

  return (
    <>
      {/* <h1 style={{ color: "blue", backgroundColor: "lightgray" }}>
        Hello, World!
      </h1> */}
      {/* <h1 style={headingStyle}>Hello, World!</h1> */}
      <h1 className="heading">Hello, World!</h1>

      <button
        className={isLoggedIn ? "logged-in" : "logged-out"}
        onClick={() => setIsLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>

      <Button text="Click Me!" />
      <Button text="Submit" />
      <Button text="Reset" />

      <Card title="Card Title" paragraph="This is a card component" />
      <Card title="Another Card" paragraph="This is another card component" />

      <Layout>
        <Card title="Card Title" paragraph="This is a card component" />
        <Button text="Click Me!" onClick={() => alert("Button clicked!")} />
        <Card title="Another Card" paragraph="This is another card component" />
        <Button
          text="Click Me!"
          onClick={() => console.log("Button clicked!")}
        />
      </Layout>

      <Controlled />
      <BigForm />
    </>
  );
}

export default App;
