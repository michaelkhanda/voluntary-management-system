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
  
	// Send the user's email and password to the server for authentication
	const loginData = { email, password };
	fetch("/login", {
	  method: "POST",
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(loginData),
	})
	  .then((response) => response.json())
	  .then((data) => {
		// Check if the login was successful based on the response from the server
		if (data.success) {
		  // Store the user's name in a cookie (you can modify this to store other user information)
		  Cookies.set("user_name", data.userName);
  
		  // Redirect the user to index.html after successful login
		  window.location.href = "index.html";
		} else {
		  // Show an error message if the login was unsuccessful
		  alert(data.message);
		}
	  })
	  .catch((error) => {
		console.error("Error occurred during login:", error);
	  });
  }
  