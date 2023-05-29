document.getElementById('transferForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate form inputs
  var isValid = validateForm();

  if (isValid) {
    // Show success message
    showMessage('Transfer successful!');

    // Reset form
    this.reset();
  } else {
    // Show error message
    showMessage('Please fill in all fields.', true);
  }
});

function validateForm() {
  var inputs = document.querySelectorAll('#transferForm input, #transferForm select, #transferForm textarea');
  var isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];

    if (!input.value.trim()) {
      // Mark field as invalid
      input.classList.add('invalid');
      isValid = false;
    } else {
      // Remove invalid class if present
      input.classList.remove('invalid');
    }
  }

  return isValid;
}

function showMessage(message, isError = false) {
  var toastMessage = document.getElementById('successMessage');
  toastMessage.textContent = message;

  if (isError) {
    toastMessage.classList.add('error');
  } else {
    toastMessage.classList.remove('error');
  }

  toastMessage.classList.add('show');

  // Hide the message after 3 seconds
  setTimeout(function() {
    hideMessage();
  }, 3000);
}

function hideMessage() {
  var toastMessage = document.getElementById('successMessage');
  toastMessage.classList.remove('show');
}