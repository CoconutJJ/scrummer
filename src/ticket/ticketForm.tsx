import React from 'react';
import { Col, Row, Form, Input, Button, Select, Upload } from 'antd'
import 'antd/dist/antd.css'
import {ITicket} from '../interfaces/Ticket.interface'

const { TextArea } = Input;
const { Option } = Select;

interface IProps {
    onFormUpdate: (c: keyof IState, v: any) => void
}
interface IState extends ITicket {

}
class TicketForm extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            title: "",
            assignee: "",
            description: "",
            due_date: "",
            issue_type: "",
            priority: "",
            reporter: "",
            story_points: "",
            attachments: [],
        }
    }

    updateTicketField = (column: keyof IState) => {

        let f = (value: any) => {
            this.setState({
                [column]: value
            } as Pick<IState, keyof IState>)

            this.props.onFormUpdate(column, value)
        }

        return f
    }


    render(): React.ReactNode {
        return (
            <Form>
                <Form.Item label="Title">
                    <Input type="text" placeholder="Title" onChange={this.updateTicketField("title")} />
                </Form.Item>
                <Row gutter={16}>
                    <Col span={16}>
                        <Form.Item label="Issue Type">
                            <Select onChange={this.updateTicketField("issue_type")}>
                                <Option value="story">User Story</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Assignee">
                            <Select onChange={this.updateTicketField("assignee")}></Select>
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item label="Story Points">
                            <Input type="number" min="0" onChange={this.updateTicketField("story_points")} />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item label="Description">
                    <TextArea rows={4} onChange={this.updateTicketField("description")} />
                </Form.Item>

                <Form.Item label="Priority">
                    <Select onChange={this.updateTicketField("priority")}></Select>
                </Form.Item>
                <Form.Item label="Due Date">
                    <Input type="date" onChange={this.updateTicketField("due_date")} />
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