
import React from 'react';
import { FirstName, LastName } from './ContextApi';

function ConC() {
    return (
        <>
            <FirstName.Consumer>

                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>hello i am {fname}  {lname}</h1>

                            }}
                        </LastName.Consumer>

                    )


                }}


            </FirstName.Consumer>

        </>
    )
}

export default ConC;
