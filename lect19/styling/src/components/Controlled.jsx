import React from "react";

const Controlled = () => {
  const [value, setValue] = React.useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Controlled Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current Value: {value}</p>
    </>
  );
};

export default Controlled;
