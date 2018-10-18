import React, { Component } from 'react';
import './chat.css';

export default class InboxChat extends Component {
    render() {
        const classChat = this.props.active_chat ? "chat_list active_chat" : "chat_list"; 
        return (
            <div className={classChat}>
                <div className="chat_people">
                    <div className="chat_ib">
                        <h1>{this.props.name}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

