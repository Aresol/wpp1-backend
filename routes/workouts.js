const express = require('express') // Load express library
const {
    getWorkouts,
    getWorkout,
    createWorkout,
} = require ('../controllers/workoutController')

const router = express.Router() // Load the router function of express into a variable

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router // return all the routes