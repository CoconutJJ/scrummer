import React from 'react';
import { Col, Row, Button, Divider, Modal, message } from 'antd'

import 'antd/dist/antd.css'
import BoardCol from './boardCol';
import TicketForm from '../ticket/ticketForm';

const { confirm } = Modal;


interface IProps {

}

interface IState {
    cols: Array<JSX.Element>
    ticketCreateModal: boolean
    confirmTicketDelete: boolean
}
class ScrumBoard extends React.Component<IProps, IState> {

    private key = 0;

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            cols: [],
            ticketCreateModal: false,
            confirmTicketDelete: false
        }
        
    }

    addColumn = () => {
        
        let newCol = (
            <Col span={4} key={this.key}>
                <BoardCol title={"New Column"} editable={true} onDelete={() => this.deleteColumn(newCol)} />
            </Col>
        )
        this.setState({
            cols: [...this.state.cols, newCol
            ]
        })
        this.key++;

    }

    deleteColumn = (element: JSX.Element) => {

        confirm({
            title: "Confirm Deletion",
            content: "Are you sure you would like to delete the following column and move its tickets to backlog?",
            onOk: () => {
                this.setState({
                    cols: this.state.cols.filter((v => v !== element))
                })
                message.info("Column has been deleted")
            },
            onCancel: () => {

            }
        })

    }

    openCreateTicketModal = () => {
        this.setState({
            ticketCreateModal: true
        })
    }

    closeCreateTicketModal = () => {
        this.setState({
            ticketCreateModal: false
        })
    }

    render(): React.ReactNode {
        return (
            <>
                <Button type="primary" onClick={this.openCreateTicketModal}>Create Ticket</Button>
                <Button type="dashed" onClick={this.addColumn}>Add Column</Button>
                <Divider />
                <Modal title="Create Ticket" width={"90%"} visible={this.state.ticketCreateModal} onCancel={this.closeCreateTicketModal} footer={
                    [
                        <Button type="dashed" onClick={this.closeCreateTicketModal}>Cancel</Button>,
                        <Button type="primary">Create</Button>
                    ]
                }>
                    <TicketForm onFormUpdate={() => { }} />
                </Modal>

                <Modal title="Confirm Deletion" visible={this.state.confirmTicketDelete} footer={
                    [
                        <Button type="dashed">No</Button>,
                        <Button type="primary">Yes</Button>
                    ]
                }>

                </Modal>

                <Row gutter={16}>
                    {this.state.cols}

                </Row>
            </>
        );
    }

}

export default ScrumBoard;