import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "./Todo";

export default function TodoList({ todos }) {
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
                    <Input />
                    <Select defaultValue="Medium">
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

                    <Button type="primary">
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}