'use strict';

const express = require('express');
const app = express();

var metaConversionAPI = require('./metaConversion.js');

// serve files from the public directory
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

var conversionData = {
    "data": [
      {
        "action_source": "website",
        "event_id": 33333,
        "event_name": "Purchase",
        "event_time": 11111,
        "user_data": {
          "client_user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1",
          "em": "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"
        },
        "custom_data": {
          "currency": "USD",
          "value": "142.52",
          "count" : Math.floor(new Date() / 1000) % 10,
        }
      }
    ],
    "test_event_code": "TEST63566"
};

var conversionData2 = {
    "data": [
      {
        "action_source": "website",
        "event_id": 33333,
        "event_name": "Purchase",
        "event_time": 11111,
        "user_data": {
          "client_user_agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.5 Mobile/15E148 Safari/604.1",
          "em": "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"
        },
        "custom_data": {
          "currency": "USD",
          "value": "100"
        }
      }
    ]
};

app.post('/testClick', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'TestEvent', conversionData);
});

app.post('/testClick2', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'TestEvent', conversionData2);
});

app.post('/cartClick', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'Cart', conversionData);
});

app.post('/cartClick2', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'Cart', conversionData2);
});

app.post('/purchaseClick', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'Purchase', conversionData);
});

app.post('/purchaseClick2', (req, res) => {
    const click = {clickTime: new Date()};
    console.log(click);
    res.sendStatus(201);
    metaConversionAPI.send1(req, 'Purchase', conversionData2);
});

app.listen(3000, () => console.log('node app server start'));
