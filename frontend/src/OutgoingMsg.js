import React, { Component } from 'react'

export default class OutgoingMsg extends Component {
  render() {
    return (
      <div class="outgoing_msg">
        <div class="sent_msg">
          <p>{this.props.message}</p>
          <span class="time_date">{this.props.time_date}</span> </div>
      </div>
    )
  }
}

