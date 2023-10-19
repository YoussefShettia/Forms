document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the input field element
  const inputField = document.getElementById("inputField");

  // Add an event listener to the form submit event
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Regular expression pattern for alphanumeric input
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    const inputValue = inputField.value;

    if (alphanumericPattern.test(inputValue)) {
      // Valid input: display confirmation message
      alert("Form submitted successfully!");
    } else {
      // Invalid input: display error message
      const errorElement = document.createElement("div");
      errorElement.textContent = "Error: Input must be alphanumeric.";
      errorElement.style.color = "red";
      form.appendChild(errorElement);
    }
  });
});