import React from "react";

const Button = ({ onClick, label, type }) => {
  return (
    <div>
      <button type={type} onClick={onClick} label={label}>
        {label}
      </button>
    </div>
  );
};

export default Button;
