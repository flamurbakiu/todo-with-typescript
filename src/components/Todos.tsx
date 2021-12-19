import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  const removeTodoHandler = (id: string) => {
    props.onRemoveTodo(id);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={removeTodoHandler}
        />
      ))}
    </ul>
  );
};

export default Todos;
