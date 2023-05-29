function myalert(msg) {
    // Create the div dynamically
    // event.preventDefault();

    var div = document.createElement('div');
    div.innerText = msg;
    div.className = 'slide-up';
    div.style.marginLeft = '500px';
    div.style.width = '50%';

    div.classList.add('alert-success', 'alert');
    div.role = 'alert';

    var alertsDiv = document.getElementById('alerts-div');
    alertsDiv.appendChild(div);

    // Add click event listener to the button
    var slideUpDiv = document.querySelector('.slide-up');

    // Reset animation classes
    slideUpDiv.classList.remove('show');
    slideUpDiv.classList.remove('hide');
    void slideUpDiv.offsetWidth; // Trigger reflow
    slideUpDiv.classList.add('show');

    // Wait for 3 seconds and then remove the div
    setTimeout(function () {
        slideUpDiv.classList.remove('show');
        slideUpDiv.classList.add('hide');

        // Remove the div from the DOM after fade out
        setTimeout(function () {
            slideUpDiv.parentNode.removeChild(slideUpDiv);
        }, 500); // Fade out duration
    }, 4000);
}