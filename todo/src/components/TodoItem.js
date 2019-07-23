import React from 'react';

function TodoItem(props) {
    console.log('THIS IS PROPS!', props.todo)
    return(
        <div
            className={props.todo.completed ? 'purchased' : ''}
            onClick={() => props.toggleItem(props.todo.id)}
        >
            <h5>{props.todo.item}</h5>
        </div>
    )
}

export default TodoItem