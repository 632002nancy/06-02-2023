const express = require('express')
const path = require('path')
const app = express()
const port = 4000


const myMiddleware = (req, res, next) => {
    console.log(req);
    next();    //whenever we want the next middleware to work
}
app.use(express.static(path.join(__dirname, "public")))  //it is a middleware , functions used for request , response 

app.get('/hello/:name', (req, res) => {       //request and response alternate to the request
    res.send('hello world!' + req.params.name)
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));      //using html file here
    res.json({ "nancy": 67 })
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})