const express = require('express');
const cors = require('cors');

const { rules, validate } = require('./validation');
const simulation = require('./simulation');

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.listen(port, (err) => {
    if (err) {
        return console.log('Something went wrong', err)
    }
    console.log(`Server is listening on ${port}`)
});

app.post('/simulation', rules(), validate, (req, res) => {
    const { amount, switchDoor } = req.body;
    const games = simulation.create(amount, switchDoor);
    return res.send(games);
});
