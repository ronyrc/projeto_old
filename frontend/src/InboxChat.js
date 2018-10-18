import React, { Component } from 'react';
import './chat.css';
import ChatPeople from './ChatPeople';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'foobar' }
})

export default class InboxChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    async componentDidMount() {
        try {
            const result = await instance.get('/rooms');
            console.log(result);
            this.setState({
                rooms: result.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { rooms } = this.state;
        return (
            <div className="inbox_chat">
                {
                    rooms && rooms.map(room =>
                        // Sempre que fizer um map setar a propriedade "key" no componenet
                        <ChatPeople key={room._id}
                            name={room.name}
                            active_chat="true" />
                    )
                }
            </div>
        )
    }
}
