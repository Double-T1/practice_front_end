import React from "react";
import Accum from "./Accum";
import Logger from "./Logger"

const Stats = ({name, todayMins, onInputChange, onInputClick}) => {
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



export default Stats;
