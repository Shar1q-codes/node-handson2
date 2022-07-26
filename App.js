const express = require('express')
const app = express()
app.get('/api/main', function(req,res){
    res.send('Welcome to Express')
    res.send('<h1>I am Shariq</h1>')
    res.send({
        name: 'Shariq',
        course : 'MERN'

    })
    res.end()
})
app.listen(8000, function(){
    console.log('Application is running');
})