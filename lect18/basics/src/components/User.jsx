import React from "react";

export const User = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div>
      {isLoggedIn ? <h1>Welcome, User!</h1> : <h1>Please log in.</h1>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};
