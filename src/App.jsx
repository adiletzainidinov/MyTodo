import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const [filterTodo, setFilterTodo] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const inputValue = (e) => {
    setInput(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (input !== '') {
      const newTask = {
        id: Math.random(),
        name: input,
        isCompleted: false,
      };
      setTodo([...todo, newTask]);
    }
    setInput('');
  };

  const deleteTodo = (id) => {
    const deleteTodo = todo.filter((item) => item.id !== id);
    setTodo(deleteTodo);
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const toggleIsCompleted = (id) => {
    const toggle = todo.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodo(toggle);
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEditing = (id) => {
    const updatedTodos = todo.map((item) => {
      if (item.id === id) {
        return { ...item, name: editingText };
      }
      return item;
    });
    setTodo(updatedTodos);
    setEditingId(null);
    setEditingText('');
  };

  const filter = todo.filter((item) => {
    if (filterTodo === 'InCompleted') {
      return !item.isCompleted;
    }
    if (filterTodo === 'Completed') {
      return item.isCompleted;
    }
    return true;
  });

  console.log(todo);

  return (
    <div>
      <TodoList
        input={input}
        todo={todo}
        inputValue={inputValue}
        addTask={addTask}
        deleteTodo={deleteTodo}
        deleteAll={deleteAll}
        toggleIsCompleted={toggleIsCompleted}
        setFilterTodo={setFilterTodo}
        filter={filter}
        editingId={editingId}
        editingText={editingText}
        setEditingText={setEditingText}
        startEditing={startEditing}
        saveEditing={saveEditing}
      />
    </div>
  );
};

export default App;
