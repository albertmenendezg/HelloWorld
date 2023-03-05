const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT;
const app = express();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello World")
})