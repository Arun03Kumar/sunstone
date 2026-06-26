import React, { Fragment } from "react";
import Home from "./components/Home.jsx";
import "./App.css";
import { Fruits } from "./components/Fruits.jsx";
import { User } from "./components/User.jsx";

export default function App() {
  return (
    // <div>
    //   <Home name="Alice" age={20} />
    //   <Home name="Bob" age={50} />
    //   <Home name="Abc" age={50} />
    //   <Home name="ROhan" age={50} />
    //   <Home name="Bob" age={50} />
    // </div>

    // <React.Fragment>
    //   <Home name="Alice" age={20} />
    // </React.Fragment>

    // <Fragment>
    //   <Home name="Alice" age={20} />
    // </Fragment>

    <>
      <Home name="Alice" age={20} />
      <Fruits />
      <User />
    </>
  );
}

// export default App;
