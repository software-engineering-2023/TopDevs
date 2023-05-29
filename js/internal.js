var contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform form submission and success handling here

  // Display success message
  var toastMessage = document.getElementById('toastMessage');
  toastMessage.innerHTML = 'Transfer successful!';
  toastMessage.style.display = 'block';

  // Clear form input values
  contactForm.reset();

  // Hide success message after 3 seconds
  setTimeout(function() {
    toastMessage.style.display = 'none';
  }, 3000);
});
