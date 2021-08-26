const router = require("express").Router();
const Workout = require("../models/workout.js")


// get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        res.json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(data => {
            res.json(data)
        })
        .catch (err => {
            res.json(err);
        });
});

// create an exercise
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(data => {
            res.json(data)
        })
        .catch (err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration"}
            }
        }
    ])
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        res.json(err);
    });
});

module.exports = router
