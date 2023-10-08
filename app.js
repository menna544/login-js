var emailfield = document.getElementById("email-field");
var emailerror = document.getElementById("email-error");
var emaillabel = document.getElementById("email-label");
var passerror = document.getElementById("password-error");
var passwordlabel = document.getElementById("password-label");
var signin = document.getElementById("submit")
function validateEmail() {
    emaillabel.style.bottom = "45px";
    if (!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = "Email is not valid";
        emailfield.style.borderBottomColor = "red";
        emailerror.style.top = "120"
        return false;
    }
    emailerror.innerHTML = "";
    emailfield.style.borderBottomColor = "green";
    return true;
}
function verifyPassword() {
    var passfield = document.getElementById("password-field").value;
    passwordlabel.style.bottom = "45px";
    if (passfield.length < 6) {
        document.getElementById("password-error").innerHTML = "Password is not valid";
        return false;
    }
    passerror.innerHTML = "";
    return true;
}
document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault()
});
function validateAll() {
    if (validateEmail() == true && verifyPassword() == true) {
        signin.innerHTML = "All fields are valid"
        signin.style.color = "green";

    }
}

