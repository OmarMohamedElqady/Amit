// Mockup user data
const registeredUser = {
    username: "user123",
    password: "password123",
};

// Get DOM elements
const loginForm = document.getElementById("login-form");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const profileLink = document.getElementById("profile-link");
const logoutLink = document.getElementById("logout-link");
const errorMessage = document.getElementById("error-message");

// Login form submit event
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    if (
        enteredUsername === registeredUser.username &&
        enteredPassword === registeredUser.password
    ) {
        // Successful login
        errorMessage.style.display = "none";
        loginLink.style.display = "none";
        registerLink.style.display = "none";
        profileLink.style.display = "inline-block";
        logoutLink.style.display = "inline-block";
    } else {
        // Failed login
        errorMessage.style.display = "block";
        errorMessage.innerText = "Invalid username or password";
    }
});

// Logout link event
logoutLink.addEventListener("click", function () {
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";
    profileLink.style.display = "none";
    logoutLink.style.display = "none";
});
// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username && password) {
        // Store user data in session storage
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('password', password);

        // Redirect to profile page
        window.location.href = 'profile.html';
    } else {
        // Show error message
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
    }
});
