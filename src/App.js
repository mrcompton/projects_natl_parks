import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Messages from './components/Messages'
import Create from './components/Create'
import Update from './components/Update'
import Map from './Map.png'



class App extends Component {
  constructor() {
    super()

    this.state = {
      messageBoard: [],
      dadJoke:'',
      chewName: '',
      chewPlanet: '',
      chewQuote: "Grrrawwwww",
      lukeName: '',
      lukePlanet: '',
      lukeQuote: "May the Force be with you"

    }
    this.handleSetStateMessage = this.handleSetStateMessage.bind(this)
  }

  componentDidMount() {
    axios.get('/api/messageBoard')
      .then(response => {
        // console.log('get response data', response);
        this.setState({ messageBoard: response.data })
      })
    axios.get('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain'
    }
    })
    .then((response) => {
      this.setState({dadJoke: response.data})
    })
    axios.get('https://swapi.co/api/people/13/')
    .then((response) => {
      this.setState({chewName: response.data.name})
    })
    axios.get('https://swapi.co/api/planets/14/')
    .then((response) => {
      this.setState({chewPlanet: response.data.name})
    })
    axios.get('https://swapi.co/api/people/1/')
    .then((response) => {
      this.setState({lukeName: response.data.name})
    })
    axios.get('https://swapi.co/api/planets/1/')
    .then((response) => {
      this.setState({lukePlanet: response.data.name})
    })
    
  }

  handleSetStateMessage(val) {
    this.setState({ messageBoard: val })
  }
  render() {
    const mappedMessages = this.state.messageBoard.map((eachMessageObj) => {
      return (
        <Messages key={eachMessageObj.id} eachMessage={eachMessageObj} />
      )

    })
    return (




      <div className="App">
        <div id="mainWindow">
          <div id="title">Visit Utah's Amazing National Parks - Arches, Canyonlands, Capital Reef, Bryce Canyon, and Zion</div>
          <div id="bottom_stuff">
          {/* <link rel="stylesheet" href="https://js.arcgis.com/4.10/esri/css/main.css"></link> */}
              <img id="map" src={Map} alt='map'/>
          
            <div id="rightPane">

              <div id="photos">
                <img src="https://media.deseretdigital.com/file/0f22569411?crop%3Dtop%3A0%7Cleft%3A0%7Cwidth%3A640%7Cheight%3A420%26resize%3Dheight%3A420%26order%3Dresize%2Ccrop%26c%3D14%26a%3Dc394d636" alt="zion np" />
                <img src="https://winnebagolife.com/wp-content/uploads/2018/07/utah-national-parks-winnebago1-895x570.jpg" alt="arches np" />
                <img src="https://www.myutahparks.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTQ4MzM1NjgyNTI4MDI4NDA0/bryce-boat-mtn-from-sunrise-pt_courtesy_680.jpg" alt="arches np" />
              </div>
              <div id="quote">"Like Picasso’s blue period, Utah national parks are variations
                  on a theme — petrified Jurassic sediments sculpted by wind, water and time —
                  but each one exhilarates in its own way." -Utah.com
              </div>
              <div id="survey">Utah National Parks Message Board
                <div id="messages">
                  <p>{mappedMessages}</p>
                  <p id='starWars'>"{this.state.chewQuote}" - {this.state.chewName} ({this.state.chewPlanet})</p>
                  <p id='starWars'>"{this.state.lukeQuote}" - {this.state.lukeName} ({this.state.lukePlanet})</p>
                </div>
                <Create messageBoardFn={this.handleSetStateMessage} />
                <div id="edit_delete">
                  <h4>Quote Editor - Admin only</h4>
                  {
                    this.state.messageBoard.map((message) => {
                      return (
                        <div id = 'Update'>
                          <Update messageBoardFnUp={this.handleSetStateMessage}
                          key = {message.id}
                          id={message.id}
                          name={message.name}
                          location={message.location}
                          message={message.message}
                          messageBoard = {this.state.messageBoard}
                          />
                        </div>
                      ) 
                    })
                  }
                  <p id="joke">Random Dad Joke: {this.state.dadJoke}</p>
                </div>

                

              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
