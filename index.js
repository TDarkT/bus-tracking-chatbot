const express = require('express');
const app = express();
const path = require('path');
const BOT_TOKEN = 'EAAsbsQXJVEoBAFZAudwR0Xmnl2aHe9V8QnBXUk2UkkW6btOaq4A9ZA9I8gcjZCXfrZCv9h5KfGRu7CjdQb0v7YXgnbqRBoxiubNu88B4zioKzxu9wFC8lliDqEarxFsoCVNvJ3E2NjkafEmI21BSFDnhGpkN9J7czPQ6uBs8pCKNVcZB4ZAln7s3xe3jGiCuwZD'
app.listen(process.env.PORT || 80, () => {
    console.log("Listening on port 8080");
})

app.get("/",  (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.status(200);
})

app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "myultrasecrettoken"
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
      // Checks the mode and token sent is correct
      if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        
        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      
      } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
      }
    }
  });