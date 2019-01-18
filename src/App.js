import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Messages from './components/Messages'


class App extends Component {
  constructor(){
    super()

    this.state = {
      messageBoard: [],
      nameInput:'',
      locationInput: '',
      messageInput: ''
    }

  }

  componentDidMount(){
    axios.get('/api/messageBoard')
    .then(response => {
      // console.log('get response data', response);
      this.setState({messageBoard: response.data})
    })
  }

  render() {
    const mappedMessages = this.state.messageBoard.map((eachMessageObj) => {
      return(
        <Messages key = {eachMessageObj.id} eachMessage={eachMessageObj}/>
      ) 
    })
    return (
      <div className="App">
        <p>{mappedMessages}</p>
      </div>
    );
  }
}

export default App;
