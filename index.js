const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();
app.get((req, res) => {
    console.log('app is working greate')
    res.status(200).send('hello')
})

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})
