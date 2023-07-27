const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

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
  unhashedPassword: String, // unhashed password is stored temporarily for password validation
});

const User = mongoose.model('User', userSchema);

// Function to validate the password
function isPasswordValid(password) {
  const letterPattern = /[a-zA-Z]/;
  const numberPattern = /[0-9]/;
  const symbolPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

  return (
    letterPattern.test(password) &&
    numberPattern.test(password) &&
    symbolPattern.test(password)
  );
}

// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Handle form submission
app.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      unhashedPassword: password,
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


app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email in the database
    const user = await User.findOne({ email });

    if (!user) {
      // If the user is not found, respond with an error message
      return res.json({ success: false, message: 'Invalid email or password.' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // If the password doesn't match, respond with an error message
      return res.json({ success: false, message: 'Invalid email or password.' });
    }

    // If email and password match, login is successful
    // You can include other user information here if needed
    const userData = { userName: user.firstName };

    // Respond with a success message and user data
    res.json({ success: true, ...userData });
  } catch (err) {
    // If an error occurs, respond with an error message
    res.status(500).json({ success: false, message: 'Error during login' });
  }
});

//email sending
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/opp.html');
  });

app.post('/', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'rhonnahmkenda@gmail.com',
          pass: 'hwsfpdwuztniqjwv'
      }
  });
  const mailOptions = {
      from: req.body.email,
      to: 'michaelkhanda006@gmail.com',
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
}
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.log(error);
      res.send('error');
  } else {
      console.log('Email sent: ' + info.response);
      res.send('success');
  }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
