import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";


const ShowPassword = ({showPassword, setShowPassword}) => {
	return (
		showPassword ? 
		( <FaEyeSlash className="ml1" onClick={setShowPassword}/> ) :
		( <MdOutlineRemoveRedEye className="ml1" onClick={setShowPassword}/> ) 
	)
}

export default ShowPassword;