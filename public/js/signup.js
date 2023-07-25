const { MongoClient } = require("mongodb");

// MongoDB connection string
const uri = "mongodb://localhost:27017/volucare"; // Replace this with your MongoDB connection string

// Function to handle sign-up form submission
async function handleSignUpFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const form = event.target;
  const formData = new FormData(form);
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  // Add any additional form fields you may have

  // Perform input field validation
  if (!isValidName(firstName)) {
    alert("Please enter a valid first name.");
    return;
  }

  if (!isValidName(lastName)) {
    alert("Please enter a valid last name.");
    return;
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Please enter a valid password. It must be at least 8 characters long and contain one number.");
    return;
  }

  try {
    // Process the form data and send it to the server
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    // Parse the response JSON
    const data = await response.json();

    // Check if the server response indicates success
    if (response.status === 200) {
      // Show an alert for successful signup
      alert(data.message);

      // Redirect the user to the homepage (index.html) after successful signup
      window.location.href = "index.html";
    } else {
      // Show an alert for any error message from the server
      alert(data.error);
    }
  } catch (error) {
    console.error("Error connecting to server:", error);
    // Handle the error
  }
}

// Rest of the validation functions remain the same as before
