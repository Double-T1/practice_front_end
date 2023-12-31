import React from "react";
import Accum from "./progress/Accum";
import Logger from "./progress/Logger"

const Progress = ({name, todayMins, onInputChange, onInputClick}) => {
	return (
		<div>
			<Accum 
				name={name} 
				todayMins={todayMins}
			/>
			<Logger onInputChange={onInputChange} onInputClick={onInputClick}/>
        </div>  
	)
}



export default Progress;
