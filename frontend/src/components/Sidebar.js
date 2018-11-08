import React, { Component } from "react";
import "../index.css";
import { Badge } from "reactstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const RoomRow = ({ room }) => {
  return <div className="chat_list">
      <div className="chat_people">
        {room.unread && <Badge className="float-right">{room.unread}</Badge>}
        <NavLink activeStyle={{ fontWeight: "bold" }} to={`/rooms/${room._id}`}>
          {room.name}
        </NavLink>
      </div>
    </div>;
};

const RoomList = ({ rooms }) => {
  return (
    <div className="inbox_chat">
      {rooms && rooms.map(room => <RoomRow key={room._id} room={room} />)}
    </div>
  );
};

class Sidebar extends Component {
  render() {
    const { rooms, handleClick } = this.props;

    return (
      <div className="inbox_people">
        <RoomList rooms={rooms} handleClick={handleClick} />
      </div>
    );
  }
}

export default withRouter(Sidebar);
