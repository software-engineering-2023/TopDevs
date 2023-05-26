function getSelectedValue(){

    let dropdown = document.getElementById("id-list");
    let val = dropdown.value;

    console.log(val);
}

function alertMe(event){
    alert("Hi");
}

function createForm(){
    
}

function onRegBtn(){
    var success = verifyInputs();


    if(success){
        event.preventDefault();
        window.location.href = "../index.html";
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

function insertAtIndex(parentElement, newElement, index) {
    var referenceElement = parentElement.children[index];
    parentElement.insertBefore(newElement, referenceElement);
}

function createRegInputDiv(id, type, name){
    var input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = name;
    // input.required = true;
    // input.className = "input-full-width glow";

    var div = document.createElement("div");
    div.className = "input-full-width glow";
    div.appendChild(input);

    return div;
}

function verifyInputs(){
    var inputsDiv = document.getElementById('inputs-div');
    // console.log(inputsDiv.children.length);

    var success = true;

    for(i = 0; i < inputsDiv.children.length; i++){
        currDiv = inputsDiv.children[i];
        currInput = currDiv.children[0];
        
        if(currInput.value === ""){
            var par = document.createElement("p");
            par.style = "color: red;";
            par.textContent = "Please fill out required fields";
            currDiv.appendChild(par);
            success = false;
        }
    }    

    return success;
}