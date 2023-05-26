

function onRegBtn(){
    var success = verifyInputs();

    if(success){
        event.preventDefault();
        window.location.href = "./index.html";
    }    

}

function onDropdownChange(){

    var form = document.getElementById("reg-form");
    var inputsDiv = document.getElementById('inputs-div');

    var dropdown = document.getElementById("id-dropdown");
    var value = dropdown.value;

    var usernameDiv = createRegInputDiv('username', 'text', 'Username');
    var passwordDiv = createRegInputDiv('password', 'password', 'Password');
    var confirmPasswordDiv = createRegInputDiv('conf-password', 'password', 'Confirm Password');
    var emailDiv = createRegInputDiv('email', 'text', 'Email');
    var banDiv = createRegInputDiv('ban', 'text', 'Bank Account Number');
    var nidDiv = createRegInputDiv('nid', 'text', 'National ID Number');
    var dobDiv = createRegInputDiv('dob', 'text', 'Date of Birth');


    inputsDiv.innerHTML = "";

    if(value === "existing"){
        
        inputsDiv.appendChild(banDiv);
        inputsDiv.appendChild(usernameDiv);
        inputsDiv.appendChild(passwordDiv);
        inputsDiv.appendChild(confirmPasswordDiv);

    }else if(value === 'new'){

        inputsDiv.appendChild(nidDiv);
        inputsDiv.appendChild(usernameDiv);
        inputsDiv.appendChild(passwordDiv);
        inputsDiv.appendChild(confirmPasswordDiv);
        inputsDiv.appendChild(emailDiv);
        inputsDiv.appendChild(dobDiv);
    }

}

function createRegInputDiv(id, type, name){
    var input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = name;
    // input.required = true;
    // input.className = "input-full-width glow";

    var div = document.createElement("div");
    div.className = "glow";
    div.appendChild(input);

    var bigDiv = document.createElement('div');
    bigDiv.className = "input-full-width";
    bigDiv.appendChild(div);

    return bigDiv;
}

function verifyInputs(){
    var inputsDiv = document.getElementById('inputs-div');
    // console.log(inputsDiv.children.length);

    var success = true;

    for(i = 0; i < inputsDiv.children.length; i++){
        bigDiv = inputsDiv.children[i];
        smallDiv = bigDiv.children[0];
        currInput = smallDiv.children[0];
        
        if(currInput.value === ""){

            success = false;

            if(bigDiv.children.length > 1)
                continue;            

            var par = document.createElement("p");
            par.style = "color: red;";
            par.textContent = "Please fill out required fields";
            bigDiv.appendChild(par);
        }else{
            if(bigDiv.children.length > 1)
                bigDiv.removeChild(bigDiv.children[1]);
        }
    }    

    return success;
}

function insertAtIndex(parentElement, newElement, index) {
    var referenceElement = parentElement.children[index];
    parentElement.insertBefore(newElement, referenceElement);
}