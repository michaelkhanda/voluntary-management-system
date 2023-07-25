const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB (Replace 'mongodb://localhost:27017/volucare' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/volucare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a Mongoose Schema and Model for the user
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));


// Handle form submission
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Create a new user object
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Redirect the user to the homepage (login.html) after successful signup
    res.redirect('http://localhost:3000/login.html');
  } catch (err) {
    // If an error occurs, respond with an error message
    res.status(500).json({ error: 'Error creating user' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
