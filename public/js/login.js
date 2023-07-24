$(document).ready(function () {
	// Listen to form submit event
	$(".login-form").submit(function(e) {
		e.preventDefault();
		
		let email = $("#email").val();
		let paswd = $("#password").val();
		
		$(".form-loader").load("php/login.php", {
			email: email,
			paswd: paswd
		}, function() {
			if ($(".user-fname").length != 0) {
				$("#login").text("ALREADY LOGGED IN");
				$(".login-btn a").text($(".user-fname").text()).attr("href", "http://www.zigglor.xyz/works/volucare");
				Cookies.set('fname', $(".user-fname").text(), { expires: 7 });
				Cookies.set('email', email, { expires: 7 });
				window.location.replace("http://www.zigglor.xyz/works/volucare");
				return false; 
			} else if ($(".invalid-paswd").length != 0) {
				alert("You have entered an invalid password");
				return false; 
			} else if ($(".absent-user").length != 0) {
				alert("The account was not found");
				return false; 
			}
		});
	});
});