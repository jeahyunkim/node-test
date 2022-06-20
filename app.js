const express = require('express');
const app = express();

// serve files from the public directory
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/clicked', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
  });

app.listen(3000, () => console.log('node app server start'));