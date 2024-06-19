import express from "express"
const path = require('path');

import api from "./api"

const app = express();
const PORT = 5000;

app.use("/api", api)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/', function(req, res) {
    res.sendFile(pat.join(__dirname, '../fronted/dist/index.html'));
});

app.get('*', function(req, res) {
    res.sendFile(pat.join(__dirname, '../fronted/dist/index.html'));
});


app.listen(PORT, () => console.log(`${PORT}번 포트에서 서버 구동중.`))

