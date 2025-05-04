const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('to-do-list'));
let tasks = [];

app.post('/add', (req, res) => {
    tasks.push(req.body.task);
    res.sendStatus(200);
});

app.post('/delete', (req, res) => {
    tasks.splice(req.body.index, 1);
    res.sendStatus(200);
});

app.get('/list', (req, res) => res.json(tasks));

app.listen(3000);