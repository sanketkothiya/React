import React, { useState } from 'react';

function Hook() {
    const state = useState();
    // let count = 0;


    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    return (
        <>

            <h1> {count}</h1>
            <button onClick={inc}>clickme</button>
            {/* <h1>heloo</h1> */}
        </>
    )
}

export default Hook;
