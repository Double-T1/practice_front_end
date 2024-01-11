import React from 'react';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

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
	onSubmitRegister = () => {
		this.props.setLoading(true);
		fetch("https://input-hours-server.onrender.com/register", {
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
		.then(res => res.json())
		.then(user => {
			this.props.setLoading(false);
			if (user.id) {
				this.props.showAlert("Registered succesfully! You can now sign in to start your journey.",true);
				this.props.onRouteChange("signin");
			} else {
				this.props.showAlert(user,false);
			}
		})
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
						{/*terrible layout so far*/}
						{
							this.state.showPassword ? 
							( <FaEyeSlash className="ml1" onClick={this.setShowPassword}/> ) :
							( <MdOutlineRemoveRedEye className="ml1" onClick={this.setShowPassword}/> ) 
						}
						
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