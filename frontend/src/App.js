import React, { Component } from 'react';
import Messaging from './Messaging'
// import Login from './containers/Login'
import './App.css';

/* const Logout = () => {
    return(
      <div>
        {sessionStorage.clear()}
      </div>
    )
}
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 2 - Links para as rotas 
        <Link to="/login">Login</Link>{' '} 
        <Link to="/chat">Chat</Link>{' '} 
        <Link to="/logout">Logout</Link> */}

        <Messaging />

        {/* 1 - definição de rota 
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute path="/chat" component={Messaging} />
        <Redirect to="/login" />  */}
      </div>      
    );
  }
}

export default App;
