const mongoose = require("mongoose");
const express = require("express");
const Task = require("../models/task");
const router = new express.Router();

router.post("/tasks", async(req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.send(task)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.get("/tasks", async(req, res) => {
    try {
        const tasks = await Task.find({})
        if (!tasks) {
            res.status(404).send()
        }
        res.send(tasks)
    } catch (err) {
        res.status(400).send(err)
    }
});

router.patch("/tasks/:id", async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidUpdate = updates.every(update => allowedUpdates.includes(update))
    if (!isValidUpdate) {
        res.status(400).send()
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router;