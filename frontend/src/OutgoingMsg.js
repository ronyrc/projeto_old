import React, { Component } from 'react'

export default class OutgoingMsg extends Component {
  render() {
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{this.props.message}</p>
          <span className="time_date">{this.props.time_date}</span> </div>
      </div>
    )
  }
}

