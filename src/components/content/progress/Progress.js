import React from "react";
import Today from "./Today";
import Logger from "./Logger";
import Accum from "./Accum";

const Progress = ({name, todayMins, onInputChange, onInputClick}) => {
	return (
		<div>
			<Today 
				name={name} 
				todayMins={todayMins}
			/>
			<Logger onInputChange={onInputChange} onInputClick={onInputClick}/>
			<Accum />
        </div>  
	)
}



export default Progress;


/*
1. purpose of the logged time
2. the total time in term of hours (totalMins/60mins)
3. the amount of days logged in time




*/