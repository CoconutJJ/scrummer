import React from 'react';
import { Col, Row, Button, Divider, Modal } from 'antd'

import 'antd/dist/antd.css'
import BoardCol from './boardCol';
import TicketForm from '../ticket/ticketForm';
interface IProps {

}

interface IState {
    cols: Array<JSX.Element>
    ticketCreateModal: boolean
}
class ScrumBoard extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            cols: [],
            ticketCreateModal: false
        }
    }

    addColumn = (title) => {

        this.setState({
            cols: [...this.state.cols, <Col span={4}><BoardCol title={"New Column"} editable={true}/></Col>]
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
                <Divider/>       
                <Modal title="Create Ticket" width={"90%"} visible={this.state.ticketCreateModal} onCancel={this.closeCreateTicketModal} footer={
                    [
                        <Button type="dashed" onClick={this.closeCreateTicketModal}>Cancel</Button>,
                        <Button type="primary">Create</Button>
                    ]
                }>
                    <TicketForm onFormUpdate={() => {}}/>
                </Modal>         
                <Row gutter={16}>
                    {this.state.cols}

                </Row>
            </>
        );
    }

}

export default ScrumBoard;