const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());


app.post("/register", (req, res) => {
    let users = JSON.parse(fs.readFileSync("users.json", "utf-8") || "[]");
    users.push(req.body);
    fs.writeFileSync("users.json", JSON.stringify(users));
    res.sendStatus(200);
});

app.listen(3000);
