import React, { useState } from 'react';
import Todomap from './Todomap';

function Todo() {

    const [InputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (e) => {
        setInputList(e.target.value);
    }

    const listOfItems = () => {
        setItems((olditem) => {
            return [...olditem, InputList];

        })
        setInputList("");


    }

    const delitem = (id) => {
        // console.log("deleted");
        setItems((oldItem) => {

            return oldItem.filter((arritem, index) => {
                return index !== id;
            })
        })

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" name="" id="  " placeholder="Add a Items" onChange={itemEvent}
                        value={InputList}
                    />
                    <button onClick={listOfItems} >+</button>
                    <ol>
                        {/* <li>{InputList}</li> */}

                        {
                            Items.map((itemval, index) => {
                                return <Todomap

                                    // key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={delitem}
                                />

                            })}

                    </ol>

                </div>
            </div>

        </>
    )
}

export default Todo;
