const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()



//Middleware
app.use(cors())  
app.use(morgan('dev'))
app.use(bodyParser.json())

//Routes
app.use('/users', require('./routes/users'))  // route à change pour le projet Open ClassRoom : http://localhost:3000/api/auth/signup

//Star the server
const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server running on port ${port}`)

