//first step we access element in particular variable 
var form = document.getElementById('form');
var error = document.getElementsByClassName('text-danger');
// anynomous arrow function
const clr = () => {
    // var error = document.getElementsByClassName('text-danger');
    for(let i of error){
        i.innerHTML = "";
    }
}
//console.log(clr());                                  
// accessing input element
let names = document.getElementById("name");
var contact = document.getElementById("number");                                  ;
var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm = document.getElementById("cpassword"); 
// function 
function errorText(index, setEtxt) {
    error[index].innerHTML = `${setEtxt}`;
}
// validation from here

/*
creteria for email validation
1 - not blank
2 - included @
3- domain
4 - . included
5- @ not at beginiging
6 - . will not be last
7 -for length
for valid email = abc@abc.c   
*/

//isemail("prince@gmail.com");




const isemail = (email) =>{
    let at = email.indexOf("@");
    let dot = email.lastIndexOf('.');
    if(email.length < 1){
        errorText(2, "Email field is required!");
        return false;
    }
    else if(at <= -1){
        errorText(2, "Include @ in email field");
        return false;
    }
    else if(at == 0){
        errorText(2, "You can't include @ at beginning of email field");
        return false;
    }
    else if(dot === email.length - 1){
        errorText(2, "You can't include . at last of email field");
        return false;
    }
    else if(email.length < 10){
        errorText(2, "Email filed length is too short");
        return false;
    }
    else if(dot <= at + 3){
        errorText(2, "Please chose a valid domain name for email field");
        return false;
    }
    else{
        return true;
    }
}






const ispassword = (password, confirm_val="cnf") =>{
    if(password.length < 1){
        errorText(3, "Password field is required!");
        return false;
    }
    
    else if(password.length < 9){
        errorText(3, "Password should be of atleast 8 characters!");
        return false;
    }
    else if(confirm_val != password_val){
        errorText(3, "Password should be match!");
        return false;
    }
    else{
        return true;
    }
}

// const isconfirm = (cpassword) =>{
//     if(cpassword.length < 1){
//         errorText(4, "Confirm-Password field is required!");
//         return false;
//     }
//     else if(cpassword!=password)
// {
//     errorText(4, "Confirm-Password doesn't match!");
//     return false;
// }
        
//     else{
//         return true;
//     }
// }


//console.log(isemail("pr@g.com"));

function validate() {
    //at beginning we have called clr function
    clr();
    let flag = true;
    // accessing input element of form from the collection of forms array
    const names_val = document.forms['form']['name'].value;
    const contact_val = document.forms['form']['number'].value;
    const email_val = document.forms['form']['email'].value;
    const password_val = document.forms['form']['password'].value;
    const confirm_val = document.forms['form']['cpassword'].value;

    //console.log(names.length);
    //name field
    if (names_val == "") {
        errorText(0, " Name is required field");
        flag = false;
    } else if (names_val.length < 3) {
        errorText(0, "Name lenth is too short");
        flag =  false;
    } else {
        names.style.borderBlockColor = "green";
        flag = false;
    }

    if (contact_val == "") {
        errorText(1, "Contact is required field");
        flag =  false;
    } else if (contact_val.length < 10) {
        errorText(1, "contact should be equal length of 10");
        flag =  false;
    } else {
        contact.style.borderBlockColor = "green";
        flag =  false;
    }

    if(isemail(email_val)==true){
        email.style.borderBlockColor = "green";
        flag = false;
    }
    else{
        flag = false;
    }

    if(ispassword(password_val)==true){
        password.style.borderBlockColor = "green";
        flag = false;
    }
    else{
        flag = false;
    }

    if(ispassword(password_val,confirm_val)==true){
        confirm.style.borderColor = "green";
        flag = false;
    }
    else{
        flag=false;
    }

    return flag;
}
