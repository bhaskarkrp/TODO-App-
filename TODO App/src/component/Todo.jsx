import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoListItem } from './TodoListItem';

export const Todo = () => {

    let [list, setList] = React.useState([]);
  return (
  <div> 
      <TodoInput list={list} setList={setList}/>
      <TodoListItem list={list} setList={setList}/>
  </div>
  );
};
