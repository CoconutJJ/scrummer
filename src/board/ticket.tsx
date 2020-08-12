import * as React from 'react'
import { Card } from 'antd';

interface IState {
    number: string,
    title: string,
    description: string,
    author: string
}

interface IProp {
    number: string,
    title: string,
    description: string,
    author: string
}

class Ticket extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props);
        this.state = {
            number: this.props.number,
            title: this.props.title,
            description: this.props.description,
            author: this.props.author
        };
    }


    onDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData("text", JSON.stringify(this.state));
    }
    
    render(): React.ReactNode {

        return (
            <>
                <div draggable={true} onDragStart={this.onDragStart}>
                    <Card title={this.state.title}>
                        <p>
                            {this.state.description}
                        </p>
                    </Card>
                </div>
            </>
        )
    }
}
export default Ticket;