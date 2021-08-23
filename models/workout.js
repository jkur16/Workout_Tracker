const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: String,
        default: Date.now
    },
    exercises: [
        {
            type: String,
            trim: true,
            required: "Enter the name of the exercise"
        },
        
    }]
})

