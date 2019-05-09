import React, { Component } from 'react';
import EmailInput from './EmailInput/EmailInput';
import PasswordInput from './password/Password';
import PasswordConfirmation from './passwordConfirmation/PasswordConfirmation';


class Form extends Component{
    constructor(props){
        super(props);
            this.state={
                email:'',
                emailErr:'',
                password:'',
                passwordErr:'', 
                passwordConfirmation:'',
                passwordConfirmationErr:'',
            }
        this.emailInputHandler=this.emailInputHandler.bind(this);  
        this.passwordInputHandler=this.passwordInputHandler.bind(this);
        this.passwordConfirmationInputHandler=this.passwordConfirmationInputHandler.bind(this);
    }

    emailInputHandler(e){
        this.setState({
            email:e.target.value,
        })
    }

    passwordInputHandler(e){
        this.setState({
            password:e.target.value,
        })
    }

    passwordConfirmationInputHandler(e){
        this.setState({
            passwordConfirmation:e.target.value,
        })
    }
    render(){
        return(
            <form action="">           
                <EmailInput 
                    email={this.state.email}
                    emailErr={this.state.emailErr}
                    emailInputHandler={this.emailInputHandler}
                />
                <PasswordInput 
                    password={this.state.password}
                    passwordErr={this.state.passwordErr}
                    passwordInputHandler={this.passwordInputHandler}
                />
                <PasswordConfirmation 
                    passwordConfirmation={this.state.passwordConfirmation}
                    passwordConfirmationErr={this.state.passwordConfirmationErr}
                    passwordConfirmationInputHandler={this.passwordConfirmationInputHandler}
                />           

                <button className="btn" type="submit">Sign Up</button>
            </form>
        )
    }
}

export default Form;