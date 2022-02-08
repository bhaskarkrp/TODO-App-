import React from 'react';
import styles from './css/TodoListItem.module.css';
import { TodoEdit } from './TodoEdit';

export const TodoListItem = ({ item, deleteTodo, toggle, list, setList }) => {
    // console.log(item);
    // console.log(isComplete);
    let [isComplete, setIsComplete] = React.useState(false);
    let [isEdit, setIsEdit] = React.useState(false);

    return (
        <>
            <li>
                <input type="checkbox" onChange={() => {
                    toggle(item.id);
                    setIsComplete(!isComplete)
                }} />
                <div className={!isComplete ? styles.normal : styles.line}>{isEdit ? <TodoEdit isEdit={isEdit} setIsEdit={setIsEdit} id={item.id} list={list} setList={setList}/> : item.value}</div>
                <p className={isComplete ? styles.completed : styles.pending}>{isComplete ? "Completed" : "Pending"}</p>
                <button className={styles.button2} onClick={() => {
                    setIsEdit(!isEdit);
                    // <TodoInput/>
                }}>Edit</button>
                <img className={styles.button_img} src="data:image/png;base64,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" onClick={() => { deleteTodo(item.id) }}/>
                {/* <button className={styles.button2} onClick={() => { deleteTodo(item.id) }}>Delete</button> */}
            </li>
        </>
    );
};
