import { signUp, signIn, logOut, onAuthStateChange } from './auth.js';

// DOM Elements
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginFormElement = document.getElementById('login-form-element');
const signupFormElement = document.getElementById('signup-form-element');
const showSignupLink = document.getElementById('show-signup');
const showLoginLink = document.getElementById('show-login');
const loadingOverlay = document.getElementById('loading-overlay');
const messageContainer = document.getElementById('message-container');

// Header buttons
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    onAuthStateChange((user) => {
        if (user) {
            // User is signed in, redirect to main page
            window.location.href = 'index.html';
        }
    });

    // Form switching
    showSignupLink.addEventListener('click', showSignupForm);
    showLoginLink.addEventListener('click', showLoginForm);
    
    // Header button events
    loginBtn.addEventListener('click', showLoginForm);
    signupBtn.addEventListener('click', showSignupForm);

    // Form submissions
    loginFormElement.addEventListener('submit', handleLogin);
    signupFormElement.addEventListener('submit', handleSignup);
});

// Show signup form
function showSignupForm() {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
}

// Show login form
function showLoginForm() {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

// Handle login
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    showLoading(true);
    
    const result = await signIn(email, password);
    
    showLoading(false);
    
    if (result.success) {
        showMessage('Login successful! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showMessage(result.error, 'error');
    }
}

// Handle signup
async function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    if (!name || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }
    
    showLoading(true);
    
    const result = await signUp(email, password, { name });
    
    showLoading(false);
    
    if (result.success) {
        showMessage('Account created successfully! Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        showMessage(result.error, 'error');
    }
}

// Show loading overlay
function showLoading(show) {
    if (show) {
        loadingOverlay.classList.remove('hidden');
    } else {
        loadingOverlay.classList.add('hidden');
    }
}

// Show message
function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    messageContainer.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}