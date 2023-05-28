const firstDiv = document.getElementById("firstQuestion");
const secondDiv = document.getElementById("secondQuestion");
const thirdDiv = document.getElementById("thirdQuestion");
const forthDiv = document.getElementById("fourthQuestion");


function toggleExpansion(element, answer) {
    const expanded = element.getAttribute("aria-expanded") === "true";
    element.setAttribute("aria-expanded", ! expanded);
    const id = element.id;

    if (! expanded) {
        const newButton = document.createElement("button");
        newButton.className = "faq_button Accordion_accordionButtonContent__2UNtF";
        newButton.id = "content";
        newButton.textContent = answer
        newButton.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3), 0px -2px 0px rgba(0, 0, 0, 0)";
        newButton.style.fontWeight = 400;
        
        

    
        switch (id) {
            case "b1": firstDiv.appendChild(newButton);
                break;
            case "b2": secondDiv.appendChild(newButton);
                break;
            case "b3": thirdDiv.appendChild(newButton)
                break;
            case "b4": forthDiv.appendChild(newButton)
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
