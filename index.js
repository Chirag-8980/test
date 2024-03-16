// Import necessary modules
const express = require('express');
const connection = require('./db');
const User = require('./model');
var bodyParser = require('body-parser')

// Set up the Express app
const app = express();
app.use(bodyParser.json())

app.get("/", async (req, res) => {
    try {
        const userData = await User.find()
        res.status(200).json({
            status: true,
            data: userData,
            message: "Success"
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Somthing Went Wrong ...!"
        })
    }

})

app.post("/add", async (req, res) => {
    try {
        const { name, email, mno } = req.body
        const insertData = await User.insertMany([{
            name, email, mno
        }])
        res.status(200).json({
            status: true,
            insertData: insertData,
            message: "Success"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: false,
            message: "Somthing Went Wrong ...!"
        })
    }

})


// Set up the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
