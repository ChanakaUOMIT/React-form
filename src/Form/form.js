import React, { Component } from "react";
import EmailInput from "./EmailInput/EmailInput";
import PasswordInput from "./password/Password";
import PasswordConfirmation from "./passwordConfirmation/PasswordConfirmation";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			emailErr: "",
			password: "",
			passwordErr: "",
			passwordConfirmation: "",
			passwordConfirmationErr: ""
		};
		this.emailInputHandler = this.emailInputHandler.bind(this);
		this.passwordInputHandler = this.passwordInputHandler.bind(this);
		this.passwordConfirmationInputHandler = this.passwordConfirmationInputHandler.bind(
			this
		);
		this.handleForm = this.handleForm.bind(this);
		this.validatePassword = this.validatePassword.bind(this);
		this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
			this
		);
	}

	emailInputHandler(e) {
		this.setState({
			email: e.target.value,
			emailErr: ""
		});
	}

	passwordInputHandler(e) {
		this.setState({
			password: e.target.value,
			passwordErr: ""
		});
	}

	passwordConfirmationInputHandler(e) {
		this.setState({
			passwordConfirmation: e.target.value,
			passwordConfirmationErr: ""
		});
	}

	handleForm(e) {
		e.preventDefault();
		console.log("Submitted");
		console.log(this.validateEmail(this.state.email));
		if (!this.validateEmail(this.state.email)) {
			this.setState({
				emailErr: "Email is incorrect"
			});
		}

		this.validatePassword();
		console.log("sfsfs");
		this.validatePasswordConfirmation();

		setTimeout(() => {
			if (
				!this.state.emailErr &&
				!this.state.passwordErr &&
				!this.state.passwordConfirmationErr
			) {
				console.log("Will be submitted");
			}
		}, 1000);
	}

	validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	validatePassword() {
		if (this.state.password.length < 6) {
			this.setState({
				passwordErr: "Password must have at least 6 characters"
			});
		}
		console.log("Password Validated");
		return;
	}

	validatePasswordConfirmation() {
		if (
			this.state.password &&
			this.state.password !== this.state.passwordConfirmation
		) {
			this.setState({
				passwordConfirmationErr:
					"Password and password confirmation do not match"
			});
		}

		console.log("Password confirmation is validated");
		console.log("Password confirmation is validated username");

		return;
	}

	render() {
		return (
			<form action="" onSubmit={this.handleForm}>
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
					passwordConfirmationInputHandler={
						this.passwordConfirmationInputHandler
					}
				/>

				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
