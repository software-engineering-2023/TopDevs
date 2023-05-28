
function onLogin() {
    var u = document.getElementById("username").value;
    var p = document.getElementById("password").value;
    event.preventDefault();
    if (u === "" || p === "") {
        var par = document.createElement("p");
        par.style = "color: red;";
        par.textContent = "Please fill out required fields";
        var ld = document.getElementById("logindiv");

        if (ld.children.length > 0)
            ld.removeChild(ld.lastChild)

        ld.appendChild(par);

    }

    else{

        sessionStorage.setItem('username', u);
        sessionStorage.setItem('password', p);


        if (u === "admin") {
            window.location.href = "./admin-home.html";
        } else if (u === "banker") {
            window.location.href = "./banker-home.html";
        } else {
            window.location.href = "./client-home.html";
        }
    }
}

