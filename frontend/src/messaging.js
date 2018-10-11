import React, { Component } from 'react';
import InboxPeople from './InboxPeople';
import Mesgs from './Mesgs';
import './chat.css';

class Messaging extends Component {
    render() {
        return (
            <div class="container">
                <h3 class=" text-center">Messaging</h3>
                <div class="messaging">
                    <div class="inbox_msg">
                        <InboxPeople />
                        <Mesgs />
                    </div>
                     <p class="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>
                </div>
            </div>
        );
    }
}
                                                        
export default Messaging;
