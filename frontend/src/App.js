import React, { Component } from 'react';
import Messaging from './Messaging'
import './App.css';
/*import io from 'socket.io-client';
const socket = io('http://localhost:3001'); */

class App extends Component {
 /* componentDidMount() {
    socket.on('connection', () => {
      console.log('Conectou ao backend');
    });

    socket.on('evento1', (data) => {
      console.log(data);
    });

    socket.on('disconnect', () => {
      //alert('Backed desconectado');
    });
  }
*/

  render() {
    return (
      <div className="App">
        <Messaging />
      </div>      
    );
  }
}

export default App;
