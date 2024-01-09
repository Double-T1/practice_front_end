import React from "react";

const NoChange = ({name, email, onChangeRoute}) => {
	return (
		<div>
			<p>{`User name: ${name}`}</p>
			<p>{`Email: ${email}`}</p>
			<input
				onClick={() => onChangeRoute("changeName")}
				className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				type="submit"
				value="Change Name"
			/>
			<input
				onClick={() => onChangeRoute("changeEmail")}
				className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				type="submit"
				value="Change Email"
			/>
			<input
				onClick={() => onChangeRoute("changePassword")}
				className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
				type="submit"
				value="Change Password"
			/>
			<div className="pa3">
				<input
					onClick={() => onChangeRoute("deleteAccount")}
					className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
					type="submit"
					value="Delete Account"
				/>
	        </div>
		</div>
	)
}


export default NoChange;