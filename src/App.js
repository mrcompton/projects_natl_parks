import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


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
    return (
      <div className="App">
        <p>{this.state.messageBoard}</p>
      </div>
    );
  }
}

export default App;
