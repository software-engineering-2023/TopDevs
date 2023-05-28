const firstDiv = document.getElementById("firstQuestion");
const secondDiv = document.getElementById("secondQuestion");
const thirdDiv = document.getElementById("thirdQuestion");
const forthDiv = document.getElementById("fourthQuestion");


function toggleExpansion(element) {
    const expanded = element.getAttribute("aria-expanded") === "true";
    element.setAttribute("aria-expanded", ! expanded);
    const id = element.id;

    if (! expanded) {
        const newButton = document.createElement("button");
        newButton.className = "faq_button Accordion_accordionButtonContent__2UNtF";
        newButton.id = "content";
        newButton.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3), 0px -2px 0px rgba(0, 0, 0, 0)";
        newButton.style.fontWeight = 400;
        
        

    
        switch (id) {
            case "b1": firstDiv.appendChild(newButton);
                newButton.textContent = "Your transaction history is updated in real-time. Any new transactions or changes will be reflected immediately."
                break;
            case "b2": secondDiv.appendChild(newButton);
                newButton.textContent = "Yes, you can download a copy of your transaction history. Simply click on the 'Download' button to save it as a file on your device."
                break;
            case "b3": thirdDiv.appendChild(newButton)
                newButton.textContent = "The transfer limits can vary based on factors such as your account type, transaction method, and the destination of the transfer. ";
                break;
            case "b4": forthDiv.appendChild(newButton)
                newButton.textContent = "You can view your transaction history for the past 12 months. If you need records beyond that period, please contact our customer support."
        }

    } else {
        switch (id) {
            case "b1": firstDiv.removeChild(firstDiv.children[1]);
                break;
            case "b2": secondDiv.removeChild(secondDiv.children[1]);
                break;
            case "b3": thirdDiv.removeChild(thirdDiv.children[1]);
                break;
            case "b4": forthDiv.removeChild(forthDiv.children[1]);

        }

    }

}
