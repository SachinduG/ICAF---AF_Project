const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

//set up server
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["http://localhost:1234"],
        credentials: true,
    })
);

//connect to monogoDB
mongoose.connect(
    process.env.MDB_CONNECT_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) return console.error(err);
        console.log("Connected to MongoDB");
    });

//set up routes
app.use("/auth", require("./routes/adminRoute"));
app.use("/researcher", require("./routes/researcherRoute"));
app.use("/presenter", require("./routes/presenterRoute"));
app.use("/attendee", require("./routes/attendeeRoute"));