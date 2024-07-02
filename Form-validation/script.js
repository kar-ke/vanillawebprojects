const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    customValidation();
});


const setError = (element, message) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

const setSuccess = (element) => {
    const formControl = element.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}


function customValidation() {
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // username validation 
    if (usernameValue === '') {
        setError(username, 'username field cannot be empty');
    } else {
        setSuccess(username);
    };

    // email validation 
    if (emailValue === '') {
        setError(email, 'username field cannot be empty');
    } else if (!isEmail(emailValue)) {
        setError(email, 'Invalid e-mail address');
    } else {
        setSuccess(email);
    };

    // password validation 
    if (passwordValue === '') {
        setError(password, 'password foeld cannot be empty');
    } else if (passwordValue.length < 5) {
        setError(password, 'password is too short');
    } else {
        setSuccess(password);
    };

    //confirm password validation
    if (password2Value === '') {
        setError(password2, 'password field cannot be empty');
    } else if (passwordValue.length < 5) {
        setError(password2, 'password is too short');
    } else if (passwordValue !== password2Value) {
        setError(password2, 'password not matching');
    } else {
        setSuccess(password2);
    };

};