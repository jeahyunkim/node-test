'use strict';
const axios = require('axios');
const pixel_id = '1198443017647573';
  
module.exports = {
    send1: function (access_token, req, eventName, conversionData) {
        conversionData.data[0].event_time = Math.floor(new Date() / 1000);
        conversionData.data[0].event_name = eventName;
        conversionData.data[0].event_id = Math.floor(new Date() / 1000) % 100;
        conversionData.data[0].user_data.client_user_agent = req.get('User-Agent');
        console.log(conversionData);

        axios
            .post('https://graph.facebook.com/v14.0/1198443017647573/events?access_token=' + access_token, 
                conversionData
            )
            .then(res => {
                console.log(`statusCode: ${res.status}`);
            })
            .catch(error => {
                console.error(error);
            });
        
    }
  };