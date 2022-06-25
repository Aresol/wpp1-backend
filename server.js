require('dotenv').config() // Allow the app to use environmental variables

const express = require('express') // Add the express package that was installed
const workoutRoutes = require('./routes/workouts')

// create the express app and load into a variable
const app = express()

// Middleware that will run for all requests
app.use(express.json()) // looks if the request has some data
app.use((req, res, next)=> {
    console.log(req.path, req.method) // log the path and the method used
    next() // move to the next function for the request
})

// Connect all routes to the app
app.use('/api/workouts', workoutRoutes) // Append the api/workouts to the beginning of all requests

// listen to requests on a port number
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})