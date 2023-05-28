var pageStack = []; // Array to store the visited pages

// Function to navigate backward
function goBack() {

    let oldStrHistory = sessionStorage.getItem('history');
    let history = oldStrHistory.split(',');

    history.pop();

    if (history.length >= 1) {
        let previousPage = history.pop();

        newStrHistory = history.join(',');
        sessionStorage.setItem('history', newStrHistory);

        window.location.href = previousPage;
    }
}

// Function to track visited pages
function trackPage() {
    const currPage = window.location.href;

    let history;
    let oldStrHistory = sessionStorage.getItem('history');


    if(!oldStrHistory)
        history = [];
    else
        history = oldStrHistory.split(',');
    

    if (history.length == 0 || history[history.length - 1] !== currPage) {
        history.push(currPage);

        let newStrHistory = history.join(',');
        sessionStorage.setItem('history', newStrHistory);
    }

    console.log(history);
}

// Call the trackPage function on page load
window.addEventListener('load', trackPage);
