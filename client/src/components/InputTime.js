import React, { useState } from 'react';

const InputTime = () => {
    const [ timeIn, setTimeIn ] = useState("");
    const [timeOut, setTimeOut ] = useState("");

    const changeTimeIn = (e) => {
        if (!e.target.value) return;
        console.log(e.target);
        setTimeIn(e.target.value);
    }

    return(
        <div>
            <input type="time" value={timeIn} onChange={changeTimeIn} />

        </div>
    )
};


export default InputTime;