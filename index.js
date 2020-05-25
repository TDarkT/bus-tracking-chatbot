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