const Workout = require('../models/workoutModel') // Import the Workout model so we can interact with the database as a model
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params // grab id from the URL

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Workout.findById(id) // use the id and use a method provided by Mongoose

    if(!workout) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body // grab properties from request body
    
    // adds doc to the db
    try{
        const workout = await Workout.create({title, load, reps}) // Create a new document on the Workout collection and await is used to wait because it's asynchronous
        res.status(200).json(workout)
    } catch(error){ // catches the error returned by MongoDB
        res.status(400).json({error: error.message}) // if unable to create workout then return error
    }
}

// delete a workout


// update a workout

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}