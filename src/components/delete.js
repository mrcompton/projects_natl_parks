import React, { Component } from 'react';

class Delete extends Component{
    constructor(props){
        super(props)

        this.state = {
            id: this.props.id,
            name: this.props.name,
            location: this.props.location,
            message: this.props.message,
    
        }

    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Delete