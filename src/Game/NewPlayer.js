import React from "react";
import {Modal, Form, Input, Row, Col, Checkbox} from "antd";

function NewPlayer({visible, showAddPlayerModal, addPlayer, peoples}) {
    const [form] = Form.useForm();

    const onCancel = () => {
        showAddPlayerModal(false);
    }

    const onOk = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                addPlayer(values);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    return (
        <div>
            <Modal
                title="Nouveau joueur"
                visible={visible}
                okText="Jouer"
                cancelText="Annuler"
                onCancel={onCancel}
                onOk={onOk}
            >
                <Form
                    form={form}
                    name="basic"
                >
                    <Form.Item
                        className="col-xss-16"
                        label="Pseudo"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item name="peoplesSelected" label="Grilles disponibles">
                        <Checkbox.Group>
                            <Row>
                                {
                                    peoples.map(people =>
                                        <Col key={people}>
                                            <Checkbox value={people} style={{lineHeight: '32px'}}>
                                                {people}
                                            </Checkbox>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default NewPlayer;
