const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//set up server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.use(express.json());

//connect to monogoDB
mongoose.connect(
    process.env.MDB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) =>{
    if(err) return console.error(err);
    console.log("Connected to MongoDB");
});

//set up routes
app.use("/auth", require("./routes/userRoute"));
app.use("/client", require("./routes/clientRoute"));