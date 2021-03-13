import React, { useState, useEffect } from 'react';
import { isValidTime } from '../utility/timeFunctions';

const InputTime = () => {
    const [ timeIn, setTimeIn ] = useState("");
    const [timeOut, setTimeOut ] = useState("");

    // useEffect(()=>{
    //     if (timeIn && timeOut && isValidTime(timeIn, timeOut)) {
    //         //display time as valid
    //         console.log("valid time");
    //     } else {
    //         console.error("Timeframe is invalid");
    //     }
    // }, [timeOut]);

    const changeTimeIn = (e) => {
        if (!e.target.value) return;
        setTimeIn(e.target.value);
    }

    const changeTimeOut = (e) => {
        if (!e.target.value) return;
        setTimeOut(e.target.value);
    }

    return(
        <div>
            <input type="time" value={timeIn} onChange={changeTimeIn} />
            <input type="time" value={timeOut} onChange={changeTimeOut} />
        </div>
    )
};


export default InputTime;