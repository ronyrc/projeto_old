import React, { Component } from 'react';
import HeadingSrch from './HeadingSrch';
import InboxChat from './InboxChat';
import './chat.css';

export default class InboxPeople extends Component {
  render() {
    return (
      <div className="inbox_people">
        <HeadingSrch />
        <InboxChat rooms={this.props.rooms} />
      </div>
    )
  }
}
