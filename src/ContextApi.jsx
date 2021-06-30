import React, { createContext } from 'react';

import ComA from './ConA';



const FirstName = createContext();
const LastName = createContext();

function ContextApi() {
    return (
        <>
            <FirstName.Provider value={"sanket"}>
                <LastName.Provider value={'kothiya'}>


                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>


        </>
    );
}

export default ContextApi;
export { FirstName, LastName };
