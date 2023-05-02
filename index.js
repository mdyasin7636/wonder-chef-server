const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/allData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send(chefs);
})

app.get('/', (req, res) => {
    res.send('Server is running');
})

app.listen(port, () => {
    console.log(`Chef API is running on port: ${port}`)
})