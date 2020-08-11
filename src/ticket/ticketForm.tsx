import React from 'react';
import { Col, Row, Divider, Form, Input, Button, Select, Upload } from 'antd'
import 'antd/dist/antd.css'

const { TextArea } = Input;
const { Option } = Select;

interface IProps {

}

interface IState {
    cols: Array<JSX.Element>
}
class TicketForm extends React.Component<IProps, IState> {

    render(): React.ReactNode {
        return (
            <Form>
                <Form.Item label="Issue Type">
                    <Select>
                        <Option value="story">User Story</Option>
                    </Select>
                </Form.Item>
                <Row gutter={16}>
                    <Col span={16}>
                        <Form.Item label="Title">
                            <Input type="text" placeholder="Title" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Assignee">
                            <Select></Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Story Points">
                            <Input type="number" min="0" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Description">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Priority">
                    <Select></Select>
                </Form.Item>
                <Form.Item label="Due Date">
                    <Input type="date" />
                </Form.Item>
                <Form.Item label="Add Attachment">
                    <Upload>
                        <Button type="default">Upload File</Button>
                    </Upload>
                </Form.Item>
            </Form>
        );
    }

}
export default TicketForm;