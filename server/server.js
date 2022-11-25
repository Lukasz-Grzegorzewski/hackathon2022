const express = require("express");
const fs = require("fs").promises;
const users = require("./data/users.json")
var cors = require('cors');
const { json } = require("react-router-dom");


var app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send(users)
})
app.get('/registration', (req, res) => {
    res.send(req.body)
})



app.post("/registration", async (req, res) => {

    var body = req.body;
    // console.log("body: ", body);

    const file = await fs.readFile('./data/users.json');
    const json = JSON.parse(file);
    let lengthUsers = json.length;    
    body = {...body, userId: Number(json[json.length - 1].userId) + 1}
    
    json.push(body);
    await fs.writeFile('./data/users.json', JSON.stringify(json, null, 4));
    // res.send(json);
    res.redirect('http://localhost:3000/');
})

app.post("/user", async (req, res) => {

    var body = req.body;
    // console.log("body: ", body);

    
    const file = await fs.readFile('./data/users.json');
    const json = JSON.parse(file);
    let lengthUsers = json.length;
    const userIndex = json.findIndex((item) => {
        body.name === item.name
    }) 
    json[userIndex] = {...json[userIndex], ...body}
    await fs.writeFile('./data/users.json', JSON.stringify(json, null, 4));
    res.send(json);
    // res.redirect('http://localhost:3000/');
})

app.listen(5010, () => console.log('server is running on port 5010'));
