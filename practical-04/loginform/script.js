// Get elements

let firstName = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let contact = document.getElementById("number");

let firstNameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let passwordError = document.getElementById("passwordError");
let contactError = document.getElementById("numberError");


// Regular expressions

let namePattern = /^[A-Za-z ]+$/;
let contactPattern = /^[0-9]{10}$/;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// ---------------- First Name ----------------

firstName.addEventListener("blur", function () {

    let value = firstName.value.trim();

    if (value === "") {
        firstNameError.textContent = "First name is required";
        return;
    }

    if (!namePattern.test(value)) {
        firstNameError.textContent =
            "First name should contain characters only";
        return;
    }

    firstNameError.textContent = "";
});


// ---------------- Email ----------------

email.addEventListener("blur", function () {

    let value = email.value.trim();

    if (value === "") {
        emailError.textContent = "Email is required";
        return;
    }

    if (!emailPattern.test(value)) {
        emailError.textContent =
            "Enter a valid email address";
        return;
    }

    emailError.textContent = "";
});


// ---------------- Password ----------------

password.addEventListener("blur", function () {

    let value = password.value;

    if (value === "") {
        passwordError.textContent = "Password is required";
        return;
    }

    if (value.length < 6) {
        passwordError.textContent =
            "Password must contain at least 6 characters";
        return;
    }

    passwordError.textContent = "";
});


// ---------------- Contact Number ----------------

contact.addEventListener("blur", function () {

    let value = contact.value.trim();

    if (value === "") {
        contactError.textContent = "Contact number is required";
        return;
    }

    if (!contactPattern.test(value)) {
        contactError.textContent =
            "Contact number should contain exactly 10 digits";
        return;
    }

    contactError.textContent = "";
});


// ---------------- Submit ----------------

document.getElementById("loginForm").addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Form submitted successfully!");

});