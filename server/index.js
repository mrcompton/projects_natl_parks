const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const app = express();

app.use( bodyParser.json())

app.get('/api/messageBoard',ctrl.readMessage)
app.post('/api/messageBoard',ctrl.createMessage)
app.put('/api/messageBoard/:id',ctrl.updateMessage)
app.delete('/api/messageBoard/:id',ctrl.deleteMessage)



app.listen(4000,()=>{
    console.log('We are here at 4000');
})