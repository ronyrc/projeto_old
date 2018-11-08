import React, { Component } from "react";
import axios from "../axios";
import {
  Button,
  InputGroupAddon,
  Input,
  InputGroup
} from "reactstrap";
import { SliderPicker } from "react-color";
export default class LoginChat extends Component {
  state = { username: "", color: "#ba68c8" };

  handleClick() {
    const { username, color } = this.state;
    console.log(this.state);

    axios
      .post("/auth/jwt", { username, color })
      .then(result => {
        console.log(result);
        sessionStorage.setItem("token", result.data.token);
        this.props.history.push("/chat");
      })
      .catch(err => {
        console.log(err);
        alert("erro");
      });
  }

  render() {
    const { username, color } = this.state;
    return (
      <div className="m-3">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <Button
              style={{ background: `${color}` }}
              onClick={() => this.handleClick()}
            >
              Entrar
            </Button>
          </InputGroupAddon>
          <Input
            style={{ color: `${color}` }}
            type="text"
            id="username"
            defaultValue={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </InputGroup>
        <SliderPicker
          className="my-2"
          color={this.state.color}
          onChangeComplete={color => this.setState({ color: color.hex })}
        />
      </div>
    );
  }
}
