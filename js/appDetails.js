const div = document.getElementById("wrapper");
function onReject() {
    var alertDiv = document.getElementById("alertDiv");
    alertDiv.style.display = "block";
 
   
   

    var alert = document.getElementById("alert");
    alert.textContent = "Application Rejected Successfully!"

    setTimeout(function() {
        alertDiv.style.display = "none";
      }, 3000); // Adjust the duration in milliseconds (e.g., 3000 = 3 seconds)
}

function onSuccess() {

    var alertDiv = document.getElementById("alertDiv");
    alertDiv.style.display = "block";
    var alert = document.getElementById("alert");
    alert.textContent = "Application Approved Successfully!"

    setTimeout(function() {
        alertDiv.style.display = "none";
      }, 3000); // Adjust the duration in milliseconds (e.g., 3000 = 3 seconds)
}


function showAlert() {
    var alertDiv = document.getElementById("floatingAlert");
    alertDiv.style.display = "block";
  
    setTimeout(function() {
      alertDiv.style.display = "none";
    }, 3000); // Adjust the duration in milliseconds (e.g., 3000 = 3 seconds)
  }
