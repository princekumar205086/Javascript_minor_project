//setInterval, settimeout
// greet = () => {
//     document.write("Hello,  Anshika");
// }

// setInterval(greet, 2000);

// upper case  converter

// let bt = document.getElementById("cnvrt");
// let textarea = document.getElementById("txt");
// let para = document.getElementById('para');

// bt.addEventListener('click', convert);

// function convert() {
//     para.innerHTML = textarea.value.toUpperCase();
// }

//form validation from here
// firststep - aceess elemet by creating variable
let form = document.getElementById("form");
let names = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let address = document.getElementById("address");
let err = document.getElementById("error-msg");
// 2nd step - function decleration
validate = (e) => {
    // e.preventDefault();
    if (
        names.value == "" ||
        email.value == "" ||
        contact.value == "" ||
        address.value == ""
    ) {
        err.innerHTML = "This is requred field, you must have to fill";
        return false;
    } else {
        let bd = document.getElementsByClassName('form-control');
        bd.style.borderColor = "green";
        // names.style.borderColor = "green";
        // email.style.borderColor = "green";
        // contact.style.borderColor = "green";
        // address.style.borderColor = "green";
        return false;
    }
};

// 3nd step - define event listener and function prototype

// form.addEventListener('submit', validate());

//end form validation from here