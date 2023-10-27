import React, {useState} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers/todos-reducer";
import {deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";


const Todos = () => {
    const todos = useSelector(state => state.todos);

const [todo, setTodo] = useState({do:""});

const dispatch = useDispatch();

const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
}

const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
}

const createTodoClickHandler = () => {
    dispatch(addTodo());
}

const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo ={
        do: doValue
    };
    setTodo(newTodo);
}

    return (
        <div>
        <h3>Todos</h3>
        <ul className="list-group">
        <li className="list-group-item">
            <button onClick={createTodoClickHandler}
            className="btn btn-primary w-25 float-end">Create</button>
            <input className="form-control w-75" 
            value={todo.do}
            onChange={todoChangeHandler}/>
        </li>
        {todos.map((todo,index) => (
            <li key={todo.id}
            className="list-group-item">
                <button onClick={() => deleteTodoClickHandler(index)}
                className="btn btn-danger w-25 float-end ms-2">Delete</button>
                <input type="check-box" 
                checked={todo.done}
                onChange={() => toggleTodoDone(todo)}
                className="me-2"/>
                {todo.do}
            </li>
        ))}
        </ul>
        </div>
    );
};

export default Todos;