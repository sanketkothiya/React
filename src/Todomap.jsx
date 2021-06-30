import React from 'react'

function Todomap(props) {

    return (<>
        <div className='todo_style '>
            <i className="fa fa-close" style={{ fontSize: "30px" }}
                onClick={
                    () => {
                        props.onSelect(props.id);
                    }
                }
            />

            <li>{props.text}</li>;
        </div>
    </>
    )
}

export default Todomap;
