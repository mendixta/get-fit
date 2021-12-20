const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
      },
      exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter name for exercise!"
            },

            duration: {
                type: Number,
                trim: true,
                required: "Please enter duration!"
            },

            name: {
                type: String,
                trim: true,
                required: "Please enter excercise type!"
            },
            
            distance: {
                type: Number,
                required: "Please enter the distance!"
            },

            time: {
                type: Number,
                default: 0
            },

            weight: {
                type: Number,
                default: 0
            },

            sets: {
                type: Number,
                default: 0
            },

            reps: {
                type: Number,
                default: 0
            },    
        }

      ]
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;