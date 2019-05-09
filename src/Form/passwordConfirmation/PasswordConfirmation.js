import React from 'react';

const PasswordConfirmation = (props) =>{
    return(
        <div className="form-group">
                <input type="password" placeholder="*password confirmation" 
                    value={props.passwordConfirmation}
                    onChange={props.passwordConfirmationInputHandler}
                />

                {props.passwordConfirmationErr &&
                    <p className="input-error">{props.passwordConfirmationErr}</p>
                
                }
            </div>
    )
}

export default PasswordConfirmation;