import React, { createContext, useEffect, useState } from 'react';
import { useLocalState } from './hooks';

const TodoContext = createContext();

const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalState('todos', []);
  const [filterTodos, setFilterTodos] = useState([]);
  const [filterConditions, setFilterConditions] = useState('ALL');

  const addTodo = (todo) => {
    if (!todo.content.trim()) {
      return;
    }
    setTodos([todo, ...todos]);
    // console.log(todos);
  };

  const removeTodo = (id) => {
    const removeTodoArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeTodoArr);
  };

  const updateTodo = (todoId, updatedValue) => {
    if (!updatedValue.content.trim()) {
      return;
    }
    setTodos((prev) => prev.map((todo) => (todo.id === todoId ? updatedValue : todo)));
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleFilter = (filter) => {
    setFilterConditions(filter);
  };

  const clearCompletedTodos = () => {
    const clearArr = [...todos].filter((todo) => todo.isComplete === false);
    setTodos(clearArr);
  };

  const searchTodos = (input) => {
    let searchData = [...todos].filter((todo) =>
      todo.content.toLowerCase().includes(input.toLowerCase())
    );
    setFilterTodos(searchData);
  };

  const completeAllTodos = () => {
    let test = todos.map((todo) => {
      return { ...todo, isComplete: (todo.isComplete = true) };
    });
    setTodos(test);
  };

  useEffect(() => {
    switch (filterConditions) {
      case 'COMPLETED':
        setFilterTodos([...todos].filter((todo) => todo.isComplete));
        break;
      case 'ACTIVE':
        setFilterTodos([...todos].filter((todo) => !todo.isComplete));
        break;
      default:
        setFilterTodos(todos);
    }
  }, [filterConditions, todos]);

  const exportContext = {
    addTodo,
    searchTodos,
    filterTodos,
    todos,
    completeTodo,
    removeTodo,
    updateTodo,
    filterConditions,
    handleFilter,
    clearCompletedTodos,
    completeAllTodos,
  };

  return <TodoContext.Provider value={exportContext}>{children}</TodoContext.Provider>;
};

export { ContextProvider, TodoContext };
