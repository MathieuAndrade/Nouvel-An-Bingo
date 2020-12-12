import React, {useState} from "react";
import {Button, List} from "antd";
import newForm from './NewForm'

const buttonNew = ({setEditing}) => (
    <Button type="primary" shape="round" onClick={() => setEditing(true)}>Ajouter une phrase</Button>
)

function People({people, addSentence}) {
    const [editing, setEditing] = useState(false);
    return (
        <div>
            <List
                size="small"
                header={<div><b>{people.name}</b></div>}
                footer={editing ? newForm({name: people.name, setEditing, cb: addSentence}) : buttonNew({setEditing})}
                bordered
                dataSource={people.sentences}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            <br />
        </div>
    )
}

export default People;
