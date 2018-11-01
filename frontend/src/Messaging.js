import React, { Component } from 'react';
import InboxPeople from './InboxPeople';
import Mesgs from './Mesgs';
import './chat.css';
import PrivateRoot from './components/PrivateRoot';
import {Route} from 'react-router-dom';
import Login from './containers/Login'

class Messaging extends Component {
    render() {
        return (
            <div className="container">
                <h3 className=" text-center">Bate Papo</h3>
                <div className="messaging">
                    <div className="inbox_msg">
                        <InboxPeople />
                        <PrivateRoot path='/chat' component={Mesgs} />
                        {/* Quando usa o render precisa passar o history */}
                        <Route path='/login' render={({history}) => {
                            return <Login history={history} />
                        }} />
                    </div>
                     <p className="text-center top_spac"> Design by <a target="_blank" href="jsx-a11y/href-no-hash">Sunil Rajput</a></p>
                </div>
            </div>
        ); 
    }
}
                                                        
export default Messaging;