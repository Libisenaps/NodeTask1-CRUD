
const express = require('express');
const app = express();
const studentRoute = require('./Routes/student.route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());

app.use("/api/students", studentRoute);

app.get('/', (req, res) => {
    res.send('Student API is running successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Connection Failed!', err);
  });
