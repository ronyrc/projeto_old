import React, { Component } from 'react'

export default class IncomingMsg extends Component {
    render() {
        return (
            <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src={this.props.image} alt="sunil" /> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        <p>{this.props.message}</p>
                        <span class="time_date">{this.props.time_date}</span></div>
                </div>
            </div>
        )
    }
}


