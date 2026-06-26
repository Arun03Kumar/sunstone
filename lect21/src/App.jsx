import "./App.css";
import React, { createContext } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setUsername":
      return { ...state, username: action.payload };
    case "setPassword":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

function App() {
  const initialState = {
    count: 0,
    username: "",
    password: "",
  };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const context = createContext();
  console.log(context);

  return (
    <>
      <h1>counter: {state.count}</h1>

      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>

      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "setUsername", payload: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({ type: "setPassword", payload: e.target.value })
        }
      />
    </>
  );
}

export default App;
