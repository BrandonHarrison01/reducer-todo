import React, { useState } from 'react'

function TodoForm(props) {

    const [item, setItem] = useState([])

    const changeHandler = e => {
        setItem({ [e.target.name]: e.target.value })
    }

    console.log(item)

    const submitItem = e => {
        e.preventDefault();
        props.addItem(e, item)
    }

    return(
        <form onSubmit={submitItem}>
            <input 
                type='text'
                // value={item}
                name='item'
                onChange={e => changeHandler(e)}
            />
            <button>Add Item</button>
        </form>
    )
} 

export default TodoForm