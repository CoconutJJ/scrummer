import React from 'react';
import { Col, Row, Button, Input } from 'antd'
import {
    EditOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'

interface IProps {
    title: string
    editable: boolean
}

interface IState {
    editable: boolean
    title: string

}

class BoardCol extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            title: this.props.title,
            editable: this.props.editable
        }
    }

    onSave = () => {
        this.setState({
            editable: false
        })
    }

    onDrop = () => {

    }

    onDragOver = () => {

    }

    render(): React.ReactNode {
        return (
            <>
                <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", minHeight: "70vh" }}>

                    <h3 style={{ float: "left" }}>{this.state.editable ? <Input type="text" value={this.state.title} /> : this.props.title}</h3>

                    {!this.state.editable ? <Button style={{ float: "right" }} icon={<EditOutlined />}></Button> : (null)}

                    <div onDrop={this.onDrop} onDragOver={this.onDragOver} style={{ clear: "both" }}>


                        {this.state.editable ? <Button type="primary" onClick={this.onSave}>Save</Button> : (null)}
                    </div>
                </div>
            </>
        );
    }

}

export default BoardCol;