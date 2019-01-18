import React, {Component} from 'react'
import axios from 'axios';

class Update extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            name: this.props.name,
            location: this.props.location,
            message: this.props.message,

        }
    }

    editName(val){
        this.setState({name: val})
    }
    editLocation(val){
        this.setState({location: val})
    }

    editMessage(val){
        this.setState({message: val})
    }
    updateName(id,name){
        axios.put(`/api/messageBoard/${id}/${name}`)
        .then((response) => {
            console.log(response)
            this.props.messageBoardFnUp(response.data)
        })
    }
    updateLocation(id,location){
        axios.put(`./api/messageBoard?id=${id}`,{location})
        .then((response) => {
            console.log(response)
            this.props.messageBoardFnUp(response.data)
        })
    }
    updateMessage(){
        const bodyObj = {
            name: this.state.name,
            location: this.state.location,
            message: this.state.message
        }
        axios.put(`./api/messageBoard/${this.state.id}`, bodyObj)
        .then((response) => {
            console.log(response)
            this.props.messageBoardFnUp(response.data)
        })
    }
    render(){
        return(
            <section>   
                <textarea value={this.state.name} onChange={(e) => this.editName(e.target.value)}></textarea>
                <button onClick={()=>this.updateMessage()}>Edit</button>
                <button>Delete</button>
                <textarea value={this.state.location} onChange={(e) => this.editLocation(e.target.value)}></textarea>
                <button>Edit</button>
                <button>Delete</button>
                <textarea value={this.state.message} onChange={(e) => this.editMessage(e.target.value)}></textarea>
                <button>Edit</button>
                <button>Delete</button>


            </section>
        )
    }
}

export default Update