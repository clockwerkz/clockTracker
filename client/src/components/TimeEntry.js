import React, { useState } from 'react';
import { calculateTimeBlock } from '../utility/timeFunctions';

const TimeBank = ({ start, end, idx, editTime }) => {
    const [ startTime, setStartTime ] = useState(start);
    const [ endTime, setEndTime ] = useState(end);

    const updateStart = (e) => {
        if (!e.target.value) return;
        setStartTime(e.target.value);
        editTime(startTime, endTime, idx);
    }

    const updateEnd = (e) => {
        if (!e.target.value) return;
        setEndTime(e.target.value);
        editTime(startTime, endTime, idx);
    }

    return (
        <div>
            <input type="time" value={startTime} onChange={updateStart} />
            <input type="time" value={endTime} onChange={updateEnd}/>
            <p>Total Time: {calculateTimeBlock(startTime, endTime)}</p>
        </div>
    )
}

export default TimeBank;