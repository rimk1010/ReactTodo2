import React, { useState, useMemo } from 'react';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';

function App() {
  const {todos, toggleTodo, deleteTodo, addTodo} = useTodo();

  const [filter, setFilter] = useState('all');

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const filteredTodos = useMemo(() => {
    switch(filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
        default:
        return todos;
    }
  },[todos, filter]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter}/>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;