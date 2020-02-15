const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose   


const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: 'Must have an exercises type.',
            trim: true
        },
        name: {
            type: String,
            required: 'Must have a workout name',
            trim: true
        },
        duration: {
            type: Number,
            required: 'Must have a workout deration'
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
    {

        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }

    }
)

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;