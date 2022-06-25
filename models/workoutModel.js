const mongoose = require('mongoose')

const Schema = mongoose.Schema // Load mongoose schema function

const workoutSchema = new Schema({ // Create a new instance of Schema for workouts
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        rquired: true
    }
}, { timestamps: true}) // Automatically add timestamps, created/updated

module.exports = mongoose.model('Workout', workoutSchema) // Automatically creates collection using schema