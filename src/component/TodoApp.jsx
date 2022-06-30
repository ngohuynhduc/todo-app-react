import React from 'react';
import Footer from './Footer';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoApp = () => {
  return (
    <div className='container'>
      <h1 className='title'>Todos</h1>
      <div className='container__todos'>
        <TodoForm />
        <Todo />
        <Footer />
      </div>
    </div>
  );
};

export default TodoApp;
