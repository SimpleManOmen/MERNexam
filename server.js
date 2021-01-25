const express = require('express')
const app = express()
const cors = require('cors')
const port = 8001
require('./server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./server/routes/main.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) )