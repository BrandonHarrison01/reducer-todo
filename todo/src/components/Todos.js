import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/Reducer';

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

function Todos() {

    const [{ todos }, dispatch] = useReducer(reducer, initialState)
    // console.log(state)

    const addItem = (e, item) => {
        e.preventDefault();
        console.log('add item', item)
        dispatch({ type: 'ADD_ITEM', payload: item })
    }

    const toggleItem = itemId => {
        dispatch({ type: 'TOGGLE_ITEM', payload: itemId})
    }

    // console.log('TODOS', todos)

    return (
        <div>
            {todos.map(todo => <TodoItem todo={todo} toggleItem={toggleItem} />)}
            <TodoForm addItem={addItem} />
        </div>
    )
}

export default Todos