const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get('serverPort')

app.use(express.json({ extended: true }))
app.use('api/meetings', require('./routes/meetings.routes'))

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log('Server Error', e.message)
    }
}

start()