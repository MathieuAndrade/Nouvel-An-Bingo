import React, {useState} from "react";
import {Button, Form, List, Input} from "antd";

const buttonNew = ({setEditing}) => (
    <Button type="primary" shape="round" onClick={() => setEditing(true)}>Ajouter une phrase</Button>
)

const newSentence = ({name, setEditing, addSentence}) => (
    <Form
        name="new_sentence"
        onFinish={({sentence}) => {
            if (sentence && sentence !== "" && sentence.trim() !== "") {
                addSentence(name, sentence)
            }
            setEditing(false)
        }}
    >
        <Form.Item name="sentence">
            <Input placeholder="Tapez votre phrase ici"/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" shape="round" htmlType="submit">
                Ajouter
            </Button>
        </Form.Item>
    </Form>
)

function People({people, addSentence}) {
    const [editing, setEditing] = useState(false);
    return (
        <div>
            <List
                size="small"
                header={<div><b>{people.name}</b></div>}
                footer={editing ? newSentence({name: people.name, setEditing, addSentence}) : buttonNew({setEditing})}
                bordered
                dataSource={people.sentences}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </div>
    )
}

export default People;
