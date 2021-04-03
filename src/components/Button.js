import React from "react";
import "../styles/Button.scss";

const Button = ({ count, setCount, step }) => {
  const handleCount = () => {
    setCount(count + parseInt(step));
  };

  const handleCountMinus = () => {
    setCount(count - parseInt(step));
  };

  return (
    <div className="action">
      <button onClick={handleCountMinus} className="minus">
        -
      </button>
      <button onClick={handleCount} className="plus">
        +
      </button>
    </div>
  );
};

export default Button;
