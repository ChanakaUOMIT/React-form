import React from "react";

const PasswordInput = props => {
  return (
    <div className="form-group">
      <input
        type="password"
        placeholder="*Enter password"
        value={props.password}
        onChange={props.passwordInputHandler}
      />

      {props.passwordErr && <p className="input-error">{props.passwordErr}</p>}
    </div>
  );
};

export default PasswordInput;
