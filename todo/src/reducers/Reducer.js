export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Build Todo app using reducers',
            completed: false,
            id: 2
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = {
                item: action.payload.item,
                completed: false,
                id: Date.now(),
            }
            return {
                ...state,
                todos: [...state.todos, newItem]
            }
        case TOGGLE_ITEM:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (action.payload === todo.id) {
                        return{
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        default:
            return state
    }
}