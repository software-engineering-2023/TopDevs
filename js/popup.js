function popup(popupDivId) {

    var popupDiv = document.getElementById(popupDivId);
    popupDiv.style.display = "block";
    setTimeout(function () {
        popupDiv.classList.add("show");
    }, 10);

}

function popoff(popupDivId){
    console.log('Popping off');
    var popupDiv = document.getElementById(popupDivId);
    popupDiv.classList.remove("show");
    setTimeout(function () {
        popupDiv.style.display = "none";
    }, 300);
}