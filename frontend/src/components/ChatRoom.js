import React, { Component } from "react";
import { Button, InputGroup, InputGroupAddon, Input } from "reactstrap";

const Message = ({ receiving, m }) => {
  return (
    <div className={receiving ? "incoming_msg" : "outgoing_msg"}>
      <div className={receiving ? "received_msg" : "sent_msg"}>
        <div className="received_withd_msg">
          <span className="time_date" style={{ color: `${m.color || "red"}` }}>
            {m.username || "username"}
          </span>{" "}
          <p>{m.message}</p>
        </div>
      </div>
    </div>
  );
};

export default class ChatRoom extends Component {
  state = {
    messages: ""
  };

  render() {
    const { message } = this.state;
    const { handleSendMessage, rooms, color } = this.props;
    console.log(rooms)
    // if (!rooms) return <div/>
    const roomsFilter = rooms.filter(r => r._id === this.props.match.params.id);
    const room = roomsFilter[0];
    if (!room) return <div/>
      return <div className="mesgs">
        <div className="msg_history">
          {room.messages &&
            room.messages.map((m, i) => (
              <Message key={i} receiving={m.receiving} m={m} />
            ))}
        </div>
        <InputGroup>
          <Input type="text" id="username" placeholder="Type a message" defaultValue={message} onChange={e => {
              this.setState({ message: e.target.value });
            }} />
          <InputGroupAddon addonType="append">
            <Button style={{ background: `${color}` }} onClick={() => handleSendMessage(this.props.match.params.id, message)}>
              Enviar
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>;
  }
}
