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

    }
}
