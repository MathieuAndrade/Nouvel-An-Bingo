import React from "react";
import {Button, Form, Input} from "antd";

const newForm = ({name, setEditing, cb}) => (
    <Form
        name="new_sentence"
        onFinish={({sentence}) => {
            if (sentence && sentence !== "" && sentence.trim() !== "") {
                cb(name, sentence)
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

export default newForm
