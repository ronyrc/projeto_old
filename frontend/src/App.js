import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import ChatRoom from "./components/ChatRoom";
import PrivateRoute from "./components/PrivateRoute";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import LoginChat from "./containers/LoginChat";
import instance from "./axios";
import io from "socket.io-client";
import { Row, Col, Container } from "reactstrap";
import jwt from "jsonwebtoken";
const socket = io("http://localhost:3001");

class App extends Component {
  state = {
    rooms: []
  };

  async componentDidMount() {
    try {
      const result = await instance.get("/rooms");
      const rooms = result.data.map(r => ({
        ...r,
        messages: []
      }));

      const token = sessionStorage.getItem("token")
      const decode = jwt.decode(token);
    
        
      rooms.forEach(room => {
        socket.on(room._id, (data) => {
          const include = this.props.location.pathname.includes(room._id);
          this.setState(previousState => ({
            rooms: previousState.rooms.map(r => {
              const username = decode.username;
              if (r._id === room._id)
                return {
                  ...r,
                  messages: username !== data.username ? [...r.messages, { receiving: true, ...data }] : r.messages,
                  unread: !include ? (r.unread || 0) + 1 : null
                };
              return r
            })
          }))
        });
      })
      
        
      
      this.setState({ rooms });
    } catch (error) {
      console.error(error);
    }

  }

  sendMessageClick(roomId, message) {
    
    const token = sessionStorage.getItem("token")
    const { username, color } = jwt.decode(token);
    const data = { message, username, color };
    console.log(roomId, data);
    socket.emit(roomId, data);

    this.setState(previousState => ({
      rooms: previousState.rooms.map(r => {
        if (r._id === roomId) return { ...r, messages: [...r.messages, { message, username, color }] };
        return r;
      })
    }));
  }

  render() {
    const { rooms } = this.state;
    console.log(rooms)
    return <Container>
        <div className="messaging m-3">
          <div className="inbox_msg">
            <Row>
              <Col xs={3}>
                <Sidebar rooms={rooms} />
              </Col>
              <Col xs={9}>
                <Switch>
                  <Route path="/login" component={LoginChat} />
                  <PrivateRoute path="/rooms/:id" rooms={rooms} handleSendMessage={this.sendMessageClick.bind(this)} component={ChatRoom} />
                  <Redirect to="/login" />
                </Switch>
              </Col>
            </Row>
          </div>
        </div>
      </Container>;
  }
}

export default withRouter(App);
