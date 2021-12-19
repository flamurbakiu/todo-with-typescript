import React, { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  id: string;
  text: string;
}> = (props) => {
  const todosCtx = useContext(TodosContext);

  const removeTodoHandler = () => {
    todosCtx.removeTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={removeTodoHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
