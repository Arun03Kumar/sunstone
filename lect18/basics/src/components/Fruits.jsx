import React from "react";

export const Fruits = () => {
  const fruits = ["Apple", "Banana", "Grapes", "Watermelon"];
  return (
    <ul>
      {fruits.map((fruit, index) =>
        index % 2 === 0 ? (
          <li key={index} style={{ color: "red" }}>
            {fruit}
          </li>
        ) : (
          <li key={index}>{fruit}</li>
        ),
      )}
    </ul>
  );
};
