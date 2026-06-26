import React from "react";

const Card = ({ title, paragraph }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{paragraph}.</p>
    </div>
  );
};

export default Card;
