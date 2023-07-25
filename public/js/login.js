document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.querySelector(".login-form");
	loginForm.addEventListener("submit", handleLoginSubmit);
  });
  
  function handleLoginSubmit(event) {
	event.preventDefault();
  
	const emailInput = document.getElementById("email");
	const passwordInput = document.getElementById("password");
  
	const email = emailInput.value.trim();
	const password = passwordInput.value.trim();
  
	// Perform any validation you want here
	// For example, check if email and password are not empty
	if (email === "" || password === "") {
	  alert("Please enter both email and password.");
	  return;
	}
  
	// Replace this block with your actual login logic
	// For now, we'll just assume the login is successful and set a user name
	const userName = "John Doe";
  
	// Store the user's name in a cookie
	Cookies.set("user_name", userName);
  
	// Redirect the user to index.html after successful login
	window.location.href = "index.html";
  }
  
  