import React from "react";
import Today from "./Today";
import Logger from "./Logger";
import Stats from "./Stats";

const Progress = ({name, todayMins, onSubmitInput, totalMins, totalDays, streaks}) => {
	return (
		<div>
			<Today 
				name={name} 
				todayMins={todayMins}
			/>
			<Logger onSubmitInput={onSubmitInput}/>
			<Stats totalMins={totalMins} totalDays={totalDays} streaks={streaks}/>
        </div>  
	)
}



export default Progress;


/*
1. purpose of the logged time
2. the total time in term of hours (totalMins/60mins)
3. the amount of days logged in time




*/