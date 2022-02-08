import React from 'react';
import { TodoListItem } from './TodoListItem';
import styles from "./css/TodoInput.module.css";


export const TodoList = ({ list, setList }) => {
    // console.log(list);

    let [showCompleted, setShowCompleted] = React.useState(true);

    const deleteTodo = (id) => {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    const toggle = (id) => {
        const updatedList = list.map((item) =>
            item.id === id ? { ...item, status: !item.status } : item
        );
        setList(updatedList);
        // console.log(updatedList);
    }

    return (
        <div>
            <ol>
                {list.filter(item => showCompleted ? true : item.status).map((item) => <TodoListItem key={item.id} item={item} list={list} setList={setList} deleteTodo={deleteTodo} toggle={toggle} />)}
            </ol>
            <button className={styles.button2} onClick={() => setShowCompleted(!showCompleted)}>{showCompleted ? "Show Completed ToDos" : "Show All ToDos"}</button>
        </div>
    );
};
