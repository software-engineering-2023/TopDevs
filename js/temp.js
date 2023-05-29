  // Add event listener to resolved buttons
const resolvedButtons = document.querySelectorAll('.resolved-btn');

resolvedButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the parent row of the button
    const row = button.parentNode.parentNode;

    // Update the status to "Resolved"
    const statusCell = row.querySelector('td:nth-child(3)');
    statusCell.textContent = 'Resolved';

    // Disable the button
    button.disabled = true;
  });
});


