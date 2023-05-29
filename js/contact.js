
function displayCreditCardDetails() {
  var selectElement = document.getElementById('selectIssueType');
  var cardDetails = document.getElementById('cardDetails');
  var value = selectElement.value;

  // Clear existing content
  cardDetails.innerHTML = '';

  if (value === 'option2') {
    var cardOwner = document.createElement('input');
    cardOwner.type = 'text';
    cardOwner.placeholder = 'Cardholder Name..';

    var cardNo = document.createElement('input');
    cardNo.type = 'text';
    cardNo.placeholder = 'Card Number..';
    
    document.getElementById('applyForReplacementContainer').style.display = 'flex';

    cardDetails.appendChild(cardOwner);
    cardDetails.appendChild(cardNo);
  }
  else{
    document.getElementById('applyForReplacementContainer').style.display = 'none';
  }
}

function onContactSubmit() {
  event.preventDefault();
  // Get form input values
  var name = document.querySelector('input[placeholder="Name.."]').value;
  var email = document.querySelector('input[placeholder="Email.."]').value;
  var description = document.querySelector('textarea[placeholder="Description.."]').value;
  var selectIssueType = document.getElementById('selectIssueType').value;
  var cont = document.getElementById('messageContainer');


  var errorMessage = document.getElementById('errorMessage');


  // Perform form validation
  if (name.trim() === '' || email.trim() === '' || description.trim() === '' || selectIssueType === 'option1') {
    
    errorMessage.innerHTML = 'Please fill in all the required fields.';
    errorMessage.style.display = 'block';

    // Clear error message after 3 seconds
    setTimeout(function() {
      errorMessage.style.display = 'none';
    }, 2000);


    return false;
  }


  if(selectIssueType === 'option2'){
    var cardOwner = document.querySelector('input[placeholder="Cardholder Name.."]').value;
    var cardNo = document.querySelector('input[placeholder="Card Number.."]').value;
    if(cardOwner.trim() === '' || cardNo.trim() === ''){
      errorMessage.innerHTML = 'Please fill in your credit card details.';
      errorMessage.style.display = 'block';
      
      setTimeout(function() {
        errorMessage.style.display = 'none';
      }, 2000);
  
      return false;
  
    }

  }  


  // Display success message
  var successMessage = document.getElementById('successMessage');
  successMessage.innerHTML = 'Your message has been sent successfully!';
  successMessage.style.display = 'block';

  // Clear form input values
  document.querySelector('input[placeholder="Name.."]').value = '';
  document.querySelector('input[placeholder="Email.."]').value = '';
  document.querySelector('textarea[placeholder="Description.."]').value = '';
  document.getElementById('selectIssueType').value = '';
  if(selectIssueType === 'option2'){
    document.querySelector('input[placeholder="Cardholder Name.."]').value = '';
    document.querySelector('input[placeholder="Card Number.."]').value = '';
  }

  // Clear success message after 3 seconds
  setTimeout(function() {
    successMessage.style.display = 'none';
  }, 2000);

  return false; // Prevent form submission
}