import React, { useState, useContext } from "react";
import { TimeSheetContext } from '../contexts/TimeSheetContext';

const TimeDisplay = (props) => {
    const { counter, toggleCounter, timer } = useContext(TimeSheetContext);
    
    return (
        <div>
            <h1>Time: {counter}</h1>
            <button onClick={toggleCounter}>
                {timer !== null ? "Stop Timer": "Start Timer"}
            </button>
        </div>
    )
}

export default TimeDisplay;