const express = require('express');

const app = express();

const PORT = 2233;
const connectDatabase = require('./config/db')

const Testimonial = require('./controller/upload')

connectDatabase()


app.use('/upload', Testimonial )


app.listen(PORT, (req, res) => {
    console.log(`server Running on : http://localhost:${PORT}`)
})