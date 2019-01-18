let messageBoard = [
    {
        id: 0,
        name: 'Dave',
        location: 'Colorado, USA',
        message: 'Dude, the slot canyons at Zions are siiick!'

    },

    {
        id: 1,
        name: 'Queen Elizabeth',
        location: 'London, UK',
        message: 'I thoroughly enjoyed the views at Arches. They were simply marvelous!'
    },

    {
        id: 2,
        name: 'Ryan',
        location: 'Maine, USA',
        message: 'My family and I had a blast hiking through Bryce Canyon!'
    },

    {
        id: 3,
        name: 'Tanya',
        location: 'Minnasota, USA',
        message: 'I loved seeing all the bighorn sheep at Canyonlands!'
    }

]

module.exports ={
    readMessage: function(req,res){
        // console.log(messageBoard)
        res.status(200).send(messageBoard)

    },
    createMessage: function(req,res){
        const newId = messageBoard[messageBoard.length -1].id+1;
    
        const newMessage = {
            id: newId,
            name: req.body.name,
            location: req.body.location,
            message: req.body.message
        }

        messageBoard.push(newMessage);
        res.status(200).send(messageBoard)
    }
}
