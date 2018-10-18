import React, { Component } from 'react';
import InboxPeople from './InboxPeople';
import Mesgs from './Mesgs';
import './chat.css';

class Messaging extends Component {
    render() {
        return (
            <div className="container">
                <h3 className=" text-center">Bate Papo</h3>
                <div className="messaging">
                    <div className="inbox_msg">
                        <InboxPeople />
                        <Mesgs />
                    </div>
                     <p className="text-center top_spac"> Design by <a target="_blank" href="jsx-a11y/href-no-hash">Sunil Rajput</a></p>
                </div>
            </div>
        ); 
    }
}
                                                        
export default Messaging;
