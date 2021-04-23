const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
});

module.exports = Task;