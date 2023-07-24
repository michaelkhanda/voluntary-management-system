$(document).ready(function () {
	let fname = Cookies.get('fname');
	if (fname) {
		$(".signup-btn").hide();
		$(".login-btn a").addClass("logged-in").text(fname).attr("href", "http://www.zigglor.xyz/works/volucare");
	}
	
	$(document).on('click', '.logged-in', function(){
		Cookies.remove('fname');
		window.location.replace("http://www.zigglor.xyz/works/volucare");
	});
});