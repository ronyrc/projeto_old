import React, { Component } from 'react';
import './chat.css';
import ChatPeople from './ChatPeople';

export default class InboxChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomSelected: null,
            rooms: props.rooms
        }
    }

    componentWillReceiveProps(props) {
        this.setState({rooms: props.rooms});
    }

    handleClick(room) {
        this.setState({roomSelected: room});
    }

    render() {
        const { rooms, roomSelected } = this.state;
        return (
            <div className="inbox_chat">
                {
                    rooms && rooms.map(room =>
                        // Sempre que fizer um map setar a propriedade "key" no componenet
                        <ChatPeople key={room._id}
                            room={room}
                            name={room.name}
                            active_chat={roomSelected && roomSelected._id === room._id}
                            handleClick={this.handleClick.bind(this)} />
                    )
                }
            </div>
        )
    }
}
