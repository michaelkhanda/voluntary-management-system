// signup.js
$(document).ready(() => {
  // Validate the signup form on form submission
  $('.signup-form').on('submit', (event) => {
    const password = $('#password').val();

    // Check if the password is valid
    if (!isPasswordValid(password)) {
      event.preventDefault(); // Prevent form submission
      showPasswordErrorPopup('Password must contain at least one letter, one number, one symbol, and one special character.');
    }
  });

  // Function to validate the password
  function isPasswordValid(password) {
    // Check if the password contains at least one letter, one number, one symbol, and one special character
    const letterPattern = /[a-zA-Z]/;
    const numberPattern = /[0-9]/;
    const symbolPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-=/\\|]/;

    return (
      letterPattern.test(password) &&
      numberPattern.test(password) &&
      symbolPattern.test(password)
    );
  }

  // Function to show the password error popup
  function showPasswordErrorPopup(errorMessage) {
    const passwordErrorElement = $('#password-error');
    passwordErrorElement.text(errorMessage);
    passwordErrorElement.show();

    // Hide the error popup after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      passwordErrorElement.hide();
    }, 5000); // 5000 milliseconds (5 seconds)
  }
});
