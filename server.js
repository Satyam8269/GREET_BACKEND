const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const greetRouter = require("./routes/name.router");

const connectDB = require("./dbConfig/dbConfig");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
    res.send("Hello World!!");
})

app.use("/api/greet", greetRouter);


mongoose.connection.once("open", () => {
    console.log("Connection is open!");
    app.listen(PORT, () => {
        console.log("Server is up and running!!");
    });
})


