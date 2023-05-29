
function onClick(button){
    // Get the parent row of the button
    const row = button.parentNode.parentNode;

    // Update the status to "Resolved"
    const statusCell = row.querySelector('td:nth-child(6)');
    statusCell.textContent = 'Resolved';

    // Disable the button
    button.disabled = true;
}
