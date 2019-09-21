import React from "react";

<<<<<<< HEAD
const EmailInput = (props) =>{
    return(
        <div className="form-group">
            <input type="email" placeholder="*Enter Email" 
                value={props.email} 
                onChange={props.emailInputHandler}
                
            />
=======
const EmailInput = props => {
  return (
    <div className="form-group">
      <input
        type="email"
        placeholder="*Email Here"
        value={props.email}
        onChange={props.emailInputHandler}
      />
>>>>>>> 7e3aa68101023bd7b8bf7458d283781205ab7ba2

      {props.emailErr && <p className="input-error">{props.emailErr}</p>}
    </div>
  );
};

export default EmailInput;
