import React from 'react';
import { Typography, Divider } from 'antd';
import '../../App.css';
import TodoList from '../../components/Todo/TodoList';
import Filters from '../../components/Todo/Filter';

const MyTodoListPage = () => {
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
            <TodoList />
        </div>
    );
}

export default MyTodoListPage;


