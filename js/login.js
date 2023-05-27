

function onLogin(){
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    event.preventDefault();
    if(u==="" || p===""){
        var par = document.createElement("p");
        par.style = "color: red;";
        par.textContent = "Please fill out required fields";
        var ld= document.getElementById("logindiv");

        if(ld.children.length>0)
            ld.removeChild(ld.lastChild)
            
        ld.appendChild(par);

    }
    else
        window.location.href = "./index.html";

}