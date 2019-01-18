import React, {Component} from 'react'
import axios from 'axios'

class Create extends Component{
    constructor(){
        super()

        this.state = {
            nameInput:'',
            locationInput: '',
            messageInput: ''
        }
    }

    handleInputName(val){
        this.setState({nameInput: val});
    }

    handleInputLocation(val){
        this.setState({locationInput: val});
    }

    handleInputMessage(val){
        this.setState({messageInput: val});
    }

    handleAddToMessageBoard(){
        const bodyObj = {
            name: this.state.nameInput,
            location: this.state.locationInput,
            message: this.state.messageInput
        }

        axios.post('./api/messageBoard',bodyObj)
        .then(response => {
            console.log(response);
            
        })
    }

    render(){
        return(
            <div>
                <input className="addName"
                onChange={ (e) => this.handleInputName(e.target.value)}
                placeholder="What is your name?"
                />
                <input className="addLocation"
                onChange={ (e) => this.handleInputLocation(e.target.value)}
                placeholder="Where do you live?"
                />
                <input className="addMessage" 
                onChange={ (e) => this.handleInputMessage(e.target.value)}
                placeholder="Enter message here"
                />

                <button>Add Message</button>

            </div>
        )
    }
}

export default Create