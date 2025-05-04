const express = require('express');
const fs = require('fs');
const app = express();

app.get("/users", (req, res) => {
    fs.readFile("users.json", (e, d) => res.send(d));

})

app.listen(3000);