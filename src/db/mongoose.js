const mongoose = require("mongoose");

const connUrl = "mongodb+srv://wanyeki:wanyeki@cluster0.0scyl.mongodb.net/crud?retryWrites=true&w=majority";

mongoose.connect(connUrl, { useNewUrlParser: true, useUnifiedTopology: true });