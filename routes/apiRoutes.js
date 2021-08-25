const router = require("express").Router();
const Workout = require("../models/workout.js")


// get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        res.json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
    Workout.create()
        .then(data => {
            res.json(data)
        })
        .catch (err => {
            res.json(err);
        });
});

