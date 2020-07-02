import React from 'react';
import { Col, Row, Button, Divider } from 'antd'

import 'antd/dist/antd.css'
import BoardCol from './boardCol';

interface IProps {

}

interface IState {
    cols: Array<JSX.Element>
}
class ScrumBoard extends React.Component<IProps, IState> {

    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            cols: []
        }
    }

    addColumn = (title) => {

        this.setState({
            cols: [...this.state.cols, <Col span={4}><BoardCol title={"New Column"} editable={true}/></Col>]
        })
        
    }



    render(): React.ReactNode {
        return (
            <>
                <Button type="primary">Create Ticket</Button>
                <Button type="dashed" onClick={this.addColumn}>Add Column</Button>
                <Divider/>                
                <Row gutter={16}>
                    {this.state.cols}

                </Row>
            </>
        );
    }

}

export default ScrumBoard;