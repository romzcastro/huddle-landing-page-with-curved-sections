function validateForm() {
  var emailInput = document.getElementById("email").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

  if (emailInput === "") {
    alert("Please enter an email address.");
    return false;
  }

  if (!emailRegex.test(emailInput)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If the email is valid, you can continue with form submission or other actions.
  // For this example, we'll just alert a success message.
  alert("Email is valid. Form can be submitted.");
  return true;
}
