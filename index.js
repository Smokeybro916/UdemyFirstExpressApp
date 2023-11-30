const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("We got a new request!")
})

app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    res.send("This is a subreddit!")
})

app.get('/', (req, res) => {
    res.send("This is the home page!")
})

app.post('/cats', (req, res) => {
    res.send("Post request to /cats! This is different than a get request!!")
})

app.get('/cats', (req, res) => {
    res.send("Meoww!")
})

app.get('/dogs', (req, res) => {
    res.send("Woof!")
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`<h1>Search results for: {q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path `)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

