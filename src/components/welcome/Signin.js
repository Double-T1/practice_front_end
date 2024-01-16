import React from 'react';
import ShowPassword from "./showPassword/ShowPassword";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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

	//arrow function for the scope of 'this' keyword
	onSubmitLogin = () => {
		this.props.setLoading(true);
		fetch("https://input-hours-server.onrender.com/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(res => res.json())
		.then(user => {
			this.props.setLoading(false);
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange("progress");
			} else {
				this.props.showAlert(user,false);
			}
		})
	}

	onKeyPress = (event) => {
		if (event.key === "Enter") {
			this.onSubmitSignIn();
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
					<legend>Sign in</legend>	
					<div id="email"> 
						<label htmlFor="inputEmail">Email: </label>
						<input 
							id="inputEmail"
							type="text"
							name="email"
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
	                onClick={this.onSubmitLogin}
	                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
	                type="submit"
	                value="Enter"
	              />
	            </div>
			</div>
		)
	}
}


export default Login;