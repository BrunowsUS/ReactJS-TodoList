import React, { useState } from 'react';

const Todo = ({ todo, removeTodo, completeTodo }) => {

  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className="content">
      <p>{todo.text}</p>
      <p className='category'>
        ({todo.category})
      </p>
    </div>
    <div>
      <button className='btn-complete' onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='btn-delete' onClick={() => removeTodo(todo.id)}>deletar</button>
    </div>
  </div>
  );
};

export default Todo;