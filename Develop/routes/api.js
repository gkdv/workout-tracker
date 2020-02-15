const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, {
    $push: { exercises: body },
  })
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}, (err, stats) => {
    if (err) {
      res.json(err);
    } else {
      res.json(stats);
    }
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, stats) => {
    if (err) {
      res.json(err);
    } else {
      res.json(stats);
    }
  });
});

module.exports = router;