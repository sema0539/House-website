function openForm() {
    myPopup.classList.add("show");
}
  
function closeForm() {
    myPopup.classList.remove("show");
}

function loginFunc() {
    var isloggedin = login.getAttribute("value");
    if(isloggedin === "false"){
        login.setAttribute("value", "true");
    } else {
        login.setAttribute("value", "false");
    }
}

function isLoggedIn(){
    var loggedIn = login.getAttribute("value");
    if (loggedIn === "true") {
        document.getElementById("login").innerHTML = "Log out";
    } else {
        document.getElementById("login").innerHTML = "Log in";
    }
}