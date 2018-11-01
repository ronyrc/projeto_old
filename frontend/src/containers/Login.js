import React, { Component } from 'react';
import axios from '../axios';
import logo from '../logo.svg';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            password: ""
        };

        this.handleClick = this.handleClick.bind(this);
    }

    validateForm() {
        return this.state.user.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleClick() {
        console.log(this.state);
        const {user, password} = this.state; 
        axios.post('/auth/login', {
            email: user,
            password: password
        })
        .then((result) => {
            console.log(result);
            sessionStorage.setItem('token', result.data.token);
            // redirecionando para o chat se está tudo OK
            this.props.history.push('/chat');
        })
        .catch((err) => {
            console.log(err);
            alert('Erro!');
        });
    }

    render() {
        return (
            <div class="container">
                    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chat</h1>
        </header>

                <br />
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-5 col-form-label col-form-label-sm">Usuário</label>
                        <div class="col-sm-3">
                            <input type="email" class="form-control form-control-sm" id="user"
                                value={this.state.user} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="colFormLabelSm" class="col-sm-5 col-form-label col-form-label-sm">Senha</label>
                        <div class="col-sm-3">
                            <input type="password" class="form-control form-control-sm" id="password"
                                value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit" class="col-sm-1 btn btn-primary" onClick={ this.handleClick } >Login</button>
                </form>
            </div>
        )
    }
}
