import React from 'react';

const Messages = (props) => {

    return(

        <div>

            <h6>"{props.eachMessage.message}" - {props.eachMessage.name} ({props.eachMessage.location})</h6>

        </div>
    )
}

export default Messages