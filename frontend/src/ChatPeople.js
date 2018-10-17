import React, { Component } from 'react';
import './chat.css';

export default class InboxChat extends Component {
    render() {
        const classChat = this.props.active_chat ? "chat_list active_chat" : "chat_list"; 
        return (
            <div class={classChat}>
                <div class="chat_people">
                    <div class="chat_img"> <img src={this.props.image} alt="sunil" />
                    </div>
                    <div class="chat_ib">
                        <h5>{this.props.name} <span class="chat_date">{this.props.date}</span></h5>
                        <p>{this.props.message}</p>
                    </div>
                </div>
            </div>
        )
    }
}

