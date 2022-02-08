import React from 'react';
import { TodoList } from './TodoList';
import {v4} from "uuid"
import styles from "./css/TodoInput.module.css";

export const TodoInput = () => {
    let [value, setValue] = React.useState("");
    let [list, setList] = React.useState([]);

    const addTodo = (todo) => {
        setList([...list, todo]);
        // console.log(list);

    }
    return (
        <div>
            <div className={styles.margin}>
                <input
                    type="text"
                    placeholder="Enter your Todo..."
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button className={styles.button} onClick={() => {
                    if (value.length > 0) {
                        addTodo({value, id:v4(), status:false});
                        setValue("");
                    } else {
                        alert("Please add a Todo...");
                    }
                }}>ADD</button>
            </div>
            <TodoList list={list} setList={setList}/>
        </div>
    );
};
