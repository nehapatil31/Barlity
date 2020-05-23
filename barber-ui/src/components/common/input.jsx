import React from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Input = ({ error, name, label, type, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        className={`form-control${error ? " is-invalid" : ""}`}
        name={name}
        type={type}
      />
      {type == "password" && <BsFillEyeFill />}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
