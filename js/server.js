// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://raghava:<db_password>@raghava.xepe3.mongodb.net/?retryWrites=true&w=majority&appName=Raghava, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email } = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (err) {
            res.status(500).json({ success: false, message: 'Server error' });
        } else if (!user) {
            res.status(400).json({ success: false, message: 'User not found' });
        } else {
            res.json({ success: true, message: 'Login successful' });
        }
    });
});

app.listen(PORT, () => {
    console.log(Server is running on port ${PORT});
});
