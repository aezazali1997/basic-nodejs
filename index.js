const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8001;
const app = express();
app.use('/user', (req, res) => {
    res.status(200).send('just testing if this routes is working or not')
})
app.use('/', (req, res) => {
    console.log('app is working great')
    res.status(200).send('hello')
})


app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`)
})
