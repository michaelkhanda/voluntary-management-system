$(document).ready(function () {
	// Listen to form submit event
	$(".signup-form").submit(function(e) {
		e.preventDefault();
		// Capture input data
		let fname = $("#firstName").val();
		let lname = $("#lastName").val();
		let email = $("#email").val();
		let paswd = $("#password").val();
		
		// Create a function for validating email
		function isEmail(email) {
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
		
		// Validate all input fields
		if (fname != "" && lname != "" && isEmail(email) && paswd != "") {
			if ($('input#subscribe').is(':checked')) {
				$("#signup").css({"pointer-events":"none","cursor":"default"}).text("SIGNING UP •••");
				// Submit input data to database using the jQuery Load function
				$(".form-loader").load("php/signup.php", {
					fname: fname,
					lname: lname,
					email: email,
					paswd: paswd
				}, function() {
					$("#signup").text("ALREADY SIGNED UP");
				});
			} else {
				alert("Please accept the Terms and Conditions");
			}
		} else {
			alert("Please enter a valid email address");
		}
		
		
	});
});