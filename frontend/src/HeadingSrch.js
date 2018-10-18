import React, { Component } from 'react';
import './chat.css';

export default class HeadingSrch extends Component {
    render() {
        return (
            <div className="headind_srch">
                <div className="recent_heading">
                    <h4>Salas</h4>
                </div>
                <div className="srch_bar">
                    <div className="stylish-input-group">
                        <input type="text" className="search-bar" placeholder="Busca" />
                        <span className="input-group-addon">
                            <button type="button"> <i className="fa fa-search" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div>
                </div>


            </div>
        )
    }
}
