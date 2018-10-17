import React, { Component } from 'react';
import './chat.css';
import ChatPeople from './ChatPeople';

export default class InboxChat extends Component {
    render() {
        return (
            <div class="inbox_chat">
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof." active_chat="true" />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
                <ChatPeople image="https://ptetutorials.com/images/user-profile.png" name="Sunil Rajput" date="Dec 25" 
                            message="Test, which is a new approach to have all solutions astrology under one roof."  />
            </div>
        )
    }
}
