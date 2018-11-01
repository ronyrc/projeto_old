import React, { Component } from 'react';
import './chat.css';

export default class ChatPeople extends Component {
    render() {
        const classChat = this.props.active_chat ? "chat_list active_chat" : "chat_list"; 
        return (
            <div className={classChat} onClick={() => this.props.handleClick(this.props.room)} >
                <div className="chat_people">
                    <div className="chat_ib">
                        <h1>{this.props.name}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

