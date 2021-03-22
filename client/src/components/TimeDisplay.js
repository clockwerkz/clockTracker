import React, { useContext } from "react";
import { TimeSheetContext } from '../contexts/TimeSheetContext';

const TimeDisplay = (props) => {
    const { counter } = useContext(TimeSheetContext);
    return (
        <div>
            <h1>Time: {counter}</h1>
        </div>
    )
}

export default TimeDisplay;