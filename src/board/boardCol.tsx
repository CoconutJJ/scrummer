import React from 'react';
import { Col, Row, Button, Input } from 'antd'
import {
    EditOutlined, MinusOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'

interface IProps {
    title: string
    editable: boolean
    onDelete: () => void
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

    onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.target.value
        })
    }

    setEditable = () => {
        this.setState({
            editable: true
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", minHeight: "70vh" }}>

                    <h3 style={{ float: "left" }}>
                        {
                            this.state.editable
                                ? <Input type="text" value={this.state.title} onChange={this.onTitleChange} />
                                : this.state.title
                        }
                    </h3>

                    {
                        !this.state.editable
                            ? <>
                                <Button style={{ float: "right" }} icon={<EditOutlined />} onClick={this.setEditable}></Button>
                                <Button style={{ float: "right" }} icon={<MinusOutlined />} onClick={this.props.onDelete}></Button>
                            </>
                            : (null)
                    }

                    <div onDrop={this.onDrop} onDragOver={this.onDragOver} style={{ clear: "both" }}>


                        {this.state.editable ? <Button type="primary" onClick={this.onSave}>Save</Button> : (null)}
                    </div>
                </div>
            </>
        );
    }

}

export default BoardCol;