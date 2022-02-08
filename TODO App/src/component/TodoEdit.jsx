import React from 'react';
import styles from "./css/TodoInput.module.css";
import {v4} from "uuid"
import { TodoList } from './TodoList';


export const TodoEdit = ({list, setList, id, setIsEdit, isEdit}) => {

    let [value, setValue] = React.useState("");
    const addTodo = (todo) => {
        setList([...list, todo]);
        // console.log(list);

    }

    const edit = (todo) => {
        // console.log(id);
        const updatedList = list.map((item) =>
            item.id === id ? { ...item, value: todo } : item
        );
        setList(updatedList);
        // console.log(updatedList);
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
                    // console.log(value, list);
                    if (value.length > 0) {
                        edit(value);
                        setValue("");
                        <TodoList list={list} setList={setList}/>
                        setIsEdit(!isEdit);
                    } else {
                        alert("Please add a Todo...");
                    }
                }}>ADD</button>
            </div>
        </div>
    );
};
