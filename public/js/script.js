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
  