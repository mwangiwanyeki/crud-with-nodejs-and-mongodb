const express = require("express");
const User = require("../models/user");
const router = new express.Router();


router.post("/users", async(req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(400), send(err)
    }
});

router.get("/users", async(req, res) => {
    try {
        const user = await User.find({})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
});

router.patch("/users/:id", async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'city', 'age']
    const isValidUpdates = updates.every(update => allowedUpdates.includes(update))
    if (!isValidUpdates) {
        res.status(400).send()
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(400).send(err)
    }
})


module.exports = router;