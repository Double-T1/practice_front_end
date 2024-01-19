import React from 'react';
import ShowPassword from "./showPassword/ShowPassword";
import validator from "email-validator";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			showPassword: false
		}
	}

	onInputChange = (target) => {
		const onChange = (event) => {
			this.setState({
				[target]: event.target.value 
			})
		}
		return onChange;
	}

	//arrow function for clarity of this keyword
	onSubmitRegister = async () => {
		try {
			if (!validator.validate(this.state.email))
				throw "not a valid email format";

			this.props.setLoading(true);
			const res = await fetch("https://input-hours-server.onrender.com/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: this.state.name,
					email: this.state.email,
					password: this.state.password
				})
			})

			//why does res.json here needs await?? is it an api call as well?
			const user = await res.json();
			this.props.setLoading(false);
			if (user.id) {
				this.props.showAlert("Registered succesfully! You can now sign in to start your journey.",true);
				this.props.onRouteChange("signin");
			} else {
				throw user;
			}
		} catch (error) {
			this.props.showAlert(error,false);
		}
	}

	onKeyPress = (event) => {
		if (event.key === "Enter") {
			this.onSubmitRegister();
		}
	}

	setShowPassword = () => {
		const current = this.state.showPassword;
		this.setState({showPassword: !current});
	} 

	render() {
		return (
			<div>
				<fieldset onKeyDown={this.onKeyPress}>
					<legend>Register your account</legend>	
					<div id="name">
						<label htmlFor="inputName">Name: </label>
						<input 
							id="inputName"
							type="text"
							name="name"
							onChange={this.onInputChange("name")}
						/>
					</div>
					<div id="email"> 
						<label htmlFor="inputEmail">Email: </label>
						<input 
							id="inputEmail"
							type="text"
							name="email"
							placeholder="example@example.com"
							onChange={this.onInputChange("email")}
						/>
					</div>
					<div id="password">
						<label htmlFor="inputEmail">Password: </label>
						<input 
							id="inputPassword"
							type={this.state.showPassword ? "text" : "password"}
							name="password"
							onChange={this.onInputChange("password")}
						/>
						<ShowPassword showPassword={this.state.showPassword} setShowPassword={this.setShowPassword}/>
					</div>
				</fieldset>
				<div className="">
	              <input
	                onClick={this.onSubmitRegister}
	                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
	                type="submit"
	                value="Enter"
	              />
	            </div>
			</div>
		)
	}
}




export default Register;