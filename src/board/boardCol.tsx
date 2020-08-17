import React from 'react';
import { Col, Row, Button, Input, Popover } from 'antd'
import {
    EditOutlined, MinusOutlined, CheckOutlined, BgColorsOutlined, HighlightOutlined
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
    bgColor: string

}

class BoardCol extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            title: this.props.title,
            editable: this.props.editable,
            bgColor: "#ebecf0"
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

    onColorChange = (color: string) => {
        this.setState({
            bgColor: color
        })
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
                <div style={{ backgroundColor: this.state.bgColor, padding: "10px", borderRadius: "5px", minHeight: "76vh", boxShadow: "1px 1px 11px 0px rgba(0,0,0,0.30)" }}>

                    <h3 style={{ float: "left" }}>
                        {
                            this.state.editable
                                ? (
                                    <>
                                        <Input.Group compact>
                                            <Input type="text" value={this.state.title} style={{ width: "87%" }} onChange={this.onTitleChange} />
                                            <Button icon={<CheckOutlined />} onClick={this.onSave}></Button>
                                        </Input.Group>

                                    </>
                                )
                                : this.state.title
                        }
                    </h3>

                    {
                        !this.state.editable ? (<>
                            <Button style={{ float: "right" }} icon={<EditOutlined />} onClick={this.setEditable}></Button>
                            <Button style={{ float: "right" }} icon={<MinusOutlined />} onClick={this.props.onDelete}></Button>
                            <Popover title="Change Background Color" content={
                                <>
                                    <Button
                                        type='default'
                                        onClick={() => this.onColorChange("#ebecf0")}
                                        style={{ backgroundColor: "#ebecf0", width: "30px" }}
                                        icon={
                                            <HighlightOutlined />
                                        }
                                    >
                                    </Button>
                                    <Button
                                        type='default'
                                        onClick={() => this.onColorChange("red")}
                                        style={{ backgroundColor: "red", width: "30px" }}
                                        icon={
                                            <HighlightOutlined style={{ color: "white" }} />
                                        }
                                    >
                                    </Button>
                                    <Button
                                        type='default'
                                        onClick={() => this.onColorChange("blue")}
                                        style={{ backgroundColor: "blue", width: "30px" }}
                                        icon={
                                            <HighlightOutlined style={{ color: "white" }} />
                                        }
                                    >
                                    </Button>
                                    <Button
                                        type='default'
                                        onClick={() => this.onColorChange("green")}
                                        style={{ backgroundColor: "green", width: "30px" }}
                                        icon={
                                            <HighlightOutlined style={{ color: "white" }} />
                                        }
                                    ></Button>
                                </>
                            }>
                                <Button style={{ float: "right" }} icon={<BgColorsOutlined />}></Button>
                            </Popover>
                        </>) : null
                    }

                    < div onDrop={this.onDrop} onDragOver={this.onDragOver} style={{ clear: "both" }}>


                    </div>
                </div>
            </>
        );
    }

}

export default BoardCol;