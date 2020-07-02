
interface DraggableComponent {

    onDrag: () => void;
    onDrop: () => void;
}

interface DraggableProp {
    isDragged: boolean;
}

function Draggable(WrappedComponent: React.ReactElement<>) {
    
    interface IState {

    }

    interface IProps {

    }

    return class extends React.Component<IProps, IState> {

        constructor(props: Readonly<{}>) {
            super(props);
        }


    }


}