import React, { useState } from 'react';




function Form() {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",

    });

    // const [fullName, setFullName] = useState();

    const inputEvent = (e) => {
        // setName(e.target.value);
        // const value = e.target.value;
        // const name = e.target.name;

        const { name, value } = e.target;
        console.log(name);


        setFullName((preval) => {
            // console.log(preval.fname);
            // console.log(preval.value);
            return {
                ...preval,
                [name]: value,
            };




            // if (name === 'fName') {
            //     return {
            //         fname: value,
            //         lname: preval.lname,
            //     };

            // } else if (name === 'lName') {
            //     return {
            //         fname: preval.fname,
            //         lname: value,
            //     };
            // }
        })
    }

    const onsubmits = (events) => {
        events.preventDefault();
        alert('submitted');

        // setFullName(name);
    }

    return (
        <>
            <form onSubmit={onsubmits} action="">
                <div>
                    <h1>Hello {fullName.fname} {fullName.lname}</h1>
                    <input type="text"
                        placeholder="entet your fname"
                        onChange={inputEvent}
                        name="fname"
                        value={fullName.fname}
                    />
                    <br />

                    <input type="text"
                        placeholder="entet your lname"
                        onChange={inputEvent}
                        name="lname"
                        value={fullName.lname}
                    />
                    <br />
                    <button type="submit" > clicked me</button>
                </div>
            </form>

        </>
    )
}

export default Form;
