
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
            window.location.href = "./home.html";
        }
    }
}

const fingerprintIcon = document.getElementById('fingerprint-icon');
const popup = document.getElementById('popup');
const closeIcon = document.getElementById('close-icon');

const faceidicon = document.getElementById('faceid-icon');
const popupF = document.getElementById('popupF');
const closeIconF = document.getElementById('close-iconF');


faceidicon.addEventListener('click', () => {
    popupF.style.display = 'block';
  });
  
  closeIconF.addEventListener('click', () => {
    popupF.style.display = 'none';
  });
  


fingerprintIcon.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  popup.style.display = 'none';
});
