import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filter';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => { getAllTodo() }, []);

  const getAllTodo = async () => {
    const allTodos = await axios.get('http://localhost:8000/getAllTodo');
    setTodos(allTodos);
  }

  return (
    <div
      style={{
        width: 600,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh'
      }}
    >
      <Typography style={{ textAlign: 'center' }}>TODO APP with REDUX</Typography>
      <Filters />
      <Divider />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
