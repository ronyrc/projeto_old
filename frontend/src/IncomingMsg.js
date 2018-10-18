import React, { Component } from 'react'

export default class IncomingMsg extends Component {
    render() {
        return (
            <div className="incoming_msg">
                <div className="incoming_msg_img"> <img src={this.props.image} alt="sunil" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                        <p>{this.props.message}</p>
                        <span className="time_date">{this.props.time_date}</span></div>
                </div>
            </div>
        )
    }
}


