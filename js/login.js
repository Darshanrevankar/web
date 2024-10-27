const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const responseMessage = document.querySelector('.response-message');


function displayMessage(message, type) {
    responseMessage.innerHTML = `<p class="${type}-message">${message}</p>`;
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const loginId = loginForm.loginId.value;
    const loginPassword = loginForm.loginPassword.value;

    if (loginId === "test" && loginPassword === "password") {
        displayMessage('Login successful!', 'success');
    } else {
        displayMessage('Invalid login credentials!', 'error');
    }
});


signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const signupName = signupForm.signupName.value;
    const signupEmail = signupForm.signupEmail.value;
    const signupBranch = signupForm.signupBranch.value;
    const signupPhoneNumber = signupForm.signupPhoneNumber.value;
    const signupId = signupForm.signupId.value;
    const signupPassword = signupForm.signupPassword.value;

    if (signupName && signupEmail && signupBranch && signupPhoneNumber && signupId && signupPassword) {
        displayMessage('Signup successful! Please log in.', 'success');
    } else {
        displayMessage('Please fill all the fields!', 'error');
    }
});