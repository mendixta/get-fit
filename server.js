// modules required to run the fitness tracker 
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// setting up the PORT and the express app
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
});


// api routes needed to run the fitness tracker 
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"))

app.listen(PORT, () => {
    console.log(`Fitness Tracker running on port ${PORT}!`)
})