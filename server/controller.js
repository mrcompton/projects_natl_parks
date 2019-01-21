let messageBoard = [
    {
        id: 1,
        name: 'Josh',
        location: 'Colorado, USA',
        message: 'Dude, the slot canyons at Zions are siiick!'

    },

    {
        id: 2,
        name: 'Queen Elizabeth',
        location: 'London, UK',
        message: 'I thoroughly enjoyed the views at Arches. They were simply marvelous!'
    },

    {
        id: 3,
        name: 'Ryan',
        location: 'Maine',
        message: 'My family and I had a blast hiking through Bryce Canyon!'
    },

    {
        id: 4,
        name: 'Shaela',
        location: 'Minnasota, USA',
        message: 'I loved seeing all the bighorn sheep at Canyonlands!'
    }

]

let newId = 5;

starWars ={
    chewName: '',
    chewPlanet: '',
    chewQuote: "Grrrawwwww",
    lukeName: '',
    lukePlanet: '',
    lukeQuote: "May the Force be with you"
}

module.exports ={
    readMessage: function(req,res){
        // console.log(messageBoard)
        res.status(200).send(messageBoard)

    },
    createMessage: function(req,res){
        
        console.log(newId)
        const newMessage = {
            id: newId,
            name: req.body.name,
            location: req.body.location,
            message: req.body.message
        }
        console.log(newMessage)
        
        
        messageBoard.push(newMessage);
        console.log(messageBoard)
        res.status(200).send(messageBoard)
        newId++;


    },

    updateMessage: function(req,res){
        const updateId = +req.params.id;
        console.log(+req.params.id)
        const {name, location, message} = req.body;
        console.log(updateId,name,location,message);

        const messageIndex = messageBoard.findIndex((element) => (element.id === updateId));

        messageBoard[messageIndex].name = name || messageBoard[messageIndex].name;
        messageBoard[messageIndex].location = location || messageBoard[messageIndex].location;
        messageBoard[messageIndex].message = message || messageBoard[messageIndex].location;

        res.status(200).send(messageBoard);

    },

    deleteMessage: function(req,res){
        const deleteId = +req.params.id;
        const messageIndex = messageBoard.findIndex((element) => (element.id === deleteId));
        
        messageBoard = messageBoard.filter((element,index) => (index !== messageIndex))


        res.status(200).send(messageBoard)

    }
}
