
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit = document.querySelector(".login-btn");

username.addEventListener("focusout", checkUsername);
username.addEventListener("focusout", validate);
password.addEventListener("focusout", checkPassword);   
password.addEventListener("focusout", validate);

function checkUsername() {
    if (username.value) {
        if (username.classList.contains('error')) {
            username.classList.remove('error');
        }
        username.classList.add('ash');
    } else if (!username.value) {
        if (!username.classList.contains('error')) {
            username.classList.add('error');
        }
        username.classList.remove('ash');
    }
}

function checkPassword() {
    if (password.value) {
        if (password.classList.contains('error')) {
            password.classList.remove('error');
        }
        password.classList.add('ash');
    } else if (!password.value) {
        if (!password.classList.contains('error')) {
            password.classList.add('error');
        }
        password.classList.remove('ash');
    }
}

function validate() {
    if (username.value && password.value) {
        if (!submit.classList.contains('true-btn')) {
            submit.classList.add('true-btn');
        }
        submit.disabled = false;
    } else {
        submit.classList.remove('true-btn');
        submit.disabled = true;
    }
}
