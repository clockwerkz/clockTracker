import React, { useState } from 'react';
import { calculateTimeBlock } from '../utility/timeFunctions';
import '../css/timeEntry.css';

const TimeBank = ({ start, end, idx, editTimeBlock  }) => {
    const [ startTime, setStartTime ] = useState(start);
    const [ endTime, setEndTime ] = useState(end);

    const updateStartTime = (e) => {
        if (!e.target.value) return;
        setStartTime(e.target.value);
        editTimeBlock(startTime, endTime, idx);
    }

    const updateEndTime = (e) => {
        if (!e.target.value) return;
        setEndTime(e.target.value);
        editTimeBlock(startTime, endTime, idx);
    }

    return (
        <div className="time-entry">
            <div className="time-entry__row">
                <label htmlFor="time-entry__start">Start:</label> 
                <input type="time" className="time-entry__start" value={startTime} onChange={updateStartTime} />
            </div>
            <div className="time-entry__row">
                <label htmlFor="time-entry__end">End:</label>
                <input type="time" className="time-entry__end" value={endTime} onChange={updateEndTime}/>
            </div>
            <button className="btn btn--add-entry" onClick={()=>{}}>-</button>
        </div>
    )
}

export default TimeBank;