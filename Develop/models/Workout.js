const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose   


// day: new Date().setDate(new Date().getDate()-10),
// exercises: [
//   {
//     type: "resistance",
//     name: "Bicep Curl",
//     duration: 20,
//     weight: 100,
//     reps: 10,
//     sets: 4
//   }
// ]

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
    }]
})

// const User = mongoose.model("User", UserSchema);

// module.exports = User;

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;