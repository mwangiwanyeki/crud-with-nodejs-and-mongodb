const mongoose = require("mongoose");
require("./db/mongoose");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log("You are connected to port: " + port);
});