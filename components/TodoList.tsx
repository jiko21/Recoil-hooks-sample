import * as React from 'react';
import { useTodo } from '../hooks/useTodo';

const TodoList: React.VFC = () => {
  const todos = useTodo();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.text}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
