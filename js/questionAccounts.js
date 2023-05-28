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
                newButton.textContent = "Non-residents can open Savings Account with the bank. As per guidelines issued by The Central Bank of EGY, GCC nationals are allowed to open Current Account."
                break;
            case "b2": secondDiv.appendChild(newButton);
                newButton.textContent = "For transaction details please login to Mashreq Online or Mashreq Mobile or you can contact us on +9714-424-4444"
                break;
            case "b3": thirdDiv.appendChild(newButton)
                newButton.textContent = "Yes, with Online Banking, you have access to your account information and transactions at any time it is convenient for you.";
                break;
            case "b4": forthDiv.appendChild(newButton)
                newButton.textContent = "Yes. Thanks to the convenience of Debit Cards, Online Banking, Bill Payments, Automatic Transfers, everyday banking activities can be performed on your own time and convenience."
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
