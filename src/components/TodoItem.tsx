import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  id: string;
  text: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  const removeTodoHandler = () => {
    props.onRemoveTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={removeTodoHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
