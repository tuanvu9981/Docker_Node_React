import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../../components/Todo/Todo";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoList() {

    // INITIALIZE 
    const [todos, setTodos] = useState([]);

    useEffect(() => { getAllTodo() }, []);

    const getAllTodo = async () => {
        const res = await axios.get('http://localhost:8000/api/todo/getAll');
        if (res.data.status === "OK") {
            setTodos(res.data.todos);
        } else {
            console.log(res.data.error);
        }
    }

    // CLICK TO ADD
    const [name, setName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const onHandleChange = (e) => setName(e.target.value);
    const onChangePriority = (value) => setPriority(value);

    const handleClick = async () => {
        const newTodo = {
            "name": name,
            "priority": priority
        }

        const res = await axios.post('http://localhost:8000/api/todo/add', newTodo);
        if (res.data.status === "OK") {
            setTodos([...todos, { ...newTodo, "_id": res.data.todo._id }]); //set a list ....
            setName("");
            setPriority("Medium");
        } else {
            console.log(res.data.error);
        }
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todos.map((todo) => {
                    return (
                        <Todo
                            key={todo._id}
                            name={todo.name}
                            priority={todo.priority}
                        />
                    );
                })}
                {/* <Todo name='Learn React' priority='High' />
                <Todo name='Learn Redux' priority='Medium' />
                <Todo name='Doing morning exercise' priority='Low' /> */}
            </Col>

            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={name}
                        onChange={onHandleChange}
                    />
                    <Select defaultValue="Medium" value={priority} onChange={onChangePriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>

                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>

                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>

                    <Button
                        type="primary"
                        onClick={handleClick}
                    >
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}