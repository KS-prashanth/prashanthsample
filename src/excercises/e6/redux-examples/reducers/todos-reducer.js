import {createSlice} from '@reduxjs/toolkit';

const initialTodos = [
    { id: 1, do: 'Learn React', done: true },
    { id: 2, do: 'Learn Redux', done: false, color: 'purple' },
    { id: 3, do: 'Build something fun!', done: false, color: 'blue' }
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: (new Date()).getTime(),
                do: action.payload.do,
                done: false
            });
            },
        deleteTodo: (state, action) => {
            const index = action.payload;
            state.splice(index, 1);
        },
        todoDoneToggle: (state, action) => {
            const todo = state.find((todo) => 
            todo.id === action.payload.id);
            todo.done = !todo.done;
        },
    }          
});

export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions;
export default todosSlice.reducer;
