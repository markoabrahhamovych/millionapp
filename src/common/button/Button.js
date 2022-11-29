import React from "react";

// Libraries Imports
import { useNavigate } from "react-router-dom";

// Style Imports
import "./btn-style.css";

//Constants Imports
import { home } from "../../constants";

const Button = ({
  name,
  linkTo = home,
  disabled = false,
  onClick = () => {},
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        onClick();
        navigate(linkTo);
      }}
      className={"btn"}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
