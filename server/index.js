const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const app = express();

app.use( bodyParser.json())

app.get('/api/messageBoard',ctrl.readMessage)

app.listen(4000,()=>{
    console.log('We are here at 4000');
})