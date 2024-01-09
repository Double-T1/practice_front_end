import React from "react";

const DeleteAccount = ({onSubmitDeleteAccount, onChangeRoute}) => {
	return (
		<div className="deleteAccount">
			<h3>Are you sure you want to delete this account? All your progress will be gone.</h3>
			<input
				onClick={onSubmitDeleteAccount}
				className="b ph3 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib"
				type="submit"
				value="Proceed to delete"
			/>
			<input
	            onClick={() => onChangeRoute("default")}
	            className="b ph3 pv2 input-reset ba b--red bg-transparent grow pointer f6 dib"
	            type="submit"
	            value="Cancel"
	          />
		</div>
	)
}

export default DeleteAccount;