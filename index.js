const express = require('express');
const app = express();

const BOT_TOKEN = 'EAAsbsQXJVEoBAFZAudwR0Xmnl2aHe9V8QnBXUk2UkkW6btOaq4A9ZA9I8gcjZCXfrZCv9h5KfGRu7CjdQb0v7YXgnbqRBoxiubNu88B4zioKzxu9wFC8lliDqEarxFsoCVNvJ3E2NjkafEmI21BSFDnhGpkN9J7czPQ6uBs8pCKNVcZB4ZAln7s3xe3jGiCuwZD'
app.listen(8080, () => {
    console.log("Listening on port 8080");
})

app.get("/", async (req, res) => {
    res.send("Hello, World");
})