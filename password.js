// global declaraion of variable
var pwd = document.getElementById("pwd");
const p = document.getElementById("p");
const eye = document.getElementById("eye");

//function from here

function show() {
    // for tppe attribute fro password field
    if (pwd.getAttribute('type') == "password") {
        pwd.setAttribute('type', 'text');
        p.innerHTML = "Hide Password";
        eye.removeAttribute("class", "fas fa-eye-slash");
        eye.setAttribute("class", "fas fa-eye");
    } else {
        pwd.setAttribute('type', 'password');
        p.innerHTML = "Show Password";
        eye.removeAttribute("class", "fas fa-eye");
        eye.setAttribute("class", "fas fa-eye-slash");
    }
    // for innertext ana eyeicon

}