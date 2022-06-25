const express = require('express') // Load express library

const router = express.Router() // Load the router function of express into a variable

//GET all workouts
router.get('/', (req, res) => { // Create the get / route
    res.json({mssg: 'GET all workouts'})
})

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router // return all the routes