// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to buttons
  const signupBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn"); // Changed to getElementById
  const browseOppBtn = document.querySelector(".browseopp-btn");
  const joinUsBtn = document.querySelector(".joinus-btn");

  signupBtn.addEventListener("click", handleSignup);
  loginBtn.addEventListener("click", handleLogin);
  browseOppBtn.addEventListener("click", handleBrowseOpportunities);
  joinUsBtn.addEventListener("click", handleJoinUs);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the user's name from the cookie
  const userName = Cookies.get("user_name");

  // Check if the user's name exists in the cookie
  if (userName) {
    // If the user's name exists, display it instead of the "Sign Up" and "Login" buttons
    const userNameContainer = document.getElementById("user-name-container");
    userNameContainer.textContent = `Welcome, ${userName}!`;
    // Hide the "Sign Up" and "Login" buttons
    const signUpBtn = document.getElementById("signup-btn");
    const loginBtn = document.getElementById("login-btn");
    signUpBtn.style.display = "none";
    loginBtn.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the user's name from the cookie
  const userName = Cookies.get("user_name");

  // Check if the user's name exists in the cookie
  if (userName) {
    // If the user's name exists, display it instead of the "Sign Up" and "Login" buttons
    const userNameContainer = document.getElementById("user-name-container");
    userNameContainer.textContent = `Welcome, ${userName}!`;

    // Add a click event listener to the user's name container to handle sign-out
    userNameContainer.addEventListener("click", handleSignOut);
  }
});

function handleSignOut() {
  // Remove the user's name cookie to sign them out
  Cookies.remove("user_name");

  // Redirect the user to the login page after signing out (you can change the URL as needed)
  window.location.href = "login.html";
}

// Function to show the "Sign Up" and "Login" buttons
function showSignUpAndLoginButtons() {
  const userNameContainer = document.getElementById("user-name-container");
  userNameContainer.textContent = ""; // Clear the user's name container
  const signUpBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn");
  signUpBtn.style.display = "inline-block"; // Show the "Sign Up" button
  loginBtn.style.display = "inline-block"; // Show the "Login" button
}

// Call this function on page load to ensure the "Sign Up" and "Login" buttons are displayed correctly
showSignUpAndLoginButtons();


// Function to handle Sign Up button click
function handleSignup() {
  // Navigate to signup.html
  window.location.href = "signup.html";
}

// Function to handle Login button click
function handleLogin() {
  // Navigate to login.html
  window.location.href = "login.html"; // Redirect to the login page
}

// Function to handle Browse Opportunities button click
function handleBrowseOpportunities() {
  // Replace this with your desired action for Browse Opportunities
  alert("Browse Opportunities button clicked!");
}

// Function to handle Join Us button click
function handleJoinUs() {
  // Replace this with your desired action for Join Us
  alert("Join Us button clicked!");
}
