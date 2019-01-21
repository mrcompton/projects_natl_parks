import React, { Component } from 'react';
import axios from 'axios'

class Delete extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            name: this.props.name,
            location: this.props.location,
            message: this.props.message,
            messageBoard: this.props.messageBoard
    
        }

    }
    handleDelete(){

        const bodyObj = {
            id: this.state.id,
            name: this.state.name,
            location: this.state.location,
            message: this.state.message
        }

        axios.delete(`/api/messageBoard/${this.state.id}`,bodyObj)
        .then(response => {this.props.messageBoardFnDl(response.data)})


    }
    render(){
        return(
            <div>
                <button onClick={() => this.handleDelete()}>Delete</button>
            </div>
        )
    }
}

export default Delete