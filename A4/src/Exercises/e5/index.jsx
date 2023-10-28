import Classes from "./classes/index.jsx";
import Styles from "./styles/index.jsx";
import ConditionalOutput from "./conditional-output/index.jsx";
import TodoItem from "./todo/todo-item.jsx";
import TodoList from "./todo/todo-list.jsx";

function Exercise5() {
    return(
        <div>
            <h1>Exercise 5</h1>
            <TodoItem />
            <TodoList />
            <ConditionalOutput />
            <Classes />
            <Styles />
        </div>
    );
}
export default Exercise5;