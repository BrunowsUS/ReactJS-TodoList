import React, { useState } from 'react';

const Todo = ({ todo }) => {

  return (
    <div className="todo">
    <div className="content">
      <p>{todo.text}</p>
      <p className='category'>
        ({todo.category})
      </p>
    </div>
    <div>
      <button className='btn-complete'>Completar</button>
      <button className='btn-delete'>deletar</button>
    </div>
  </div>
  );
};

export default Todo;