import { onAuthStateChange, logOut } from './auth.js';

// DOM Elements
const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication state
    onAuthStateChange((user) => {
        updateAuthButtons(user);
    });

    // Add click events to auth buttons
    loginBtn.addEventListener('click', handleAuthButtonClick);
    signupBtn.addEventListener('click', handleAuthButtonClick);
});

// Update auth buttons based on user state
function updateAuthButtons(user) {
    if (user) {
        // User is logged in
        loginBtn.textContent = 'LOGOUT';
        loginBtn.onclick = handleLogout;
        signupBtn.textContent = 'PROFILE';
        signupBtn.onclick = () => {
            // You can implement a profile page later
            alert('Profile page coming soon!');
        };
    } else {
        // User is not logged in
        loginBtn.textContent = 'LOG IN';
        loginBtn.onclick = () => window.location.href = 'login.html';
        signupBtn.textContent = 'SIGN UP';
        signupBtn.onclick = () => window.location.href = 'login.html';
    }
}

// Handle auth button clicks
function handleAuthButtonClick(e) {
    e.preventDefault();
    window.location.href = 'login.html';
}

// Handle logout
async function handleLogout(e) {
    e.preventDefault();
    
    const result = await logOut();
    
    if (result.success) {
        // Refresh the page to update the UI
        window.location.reload();
    } else {
        alert('Error logging out. Please try again.');
    }
}

// Add some basic interactivity to the existing elements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    const aboutLink = document.getElementById('about_us');
    const shopLink = document.getElementById('shop');
    
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Scroll to about section (you can add this later)
            console.log('About us clicked');
        });
    }
    
    if (shopLink) {
        shopLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Scroll to shop section
            const shopSection = document.querySelector('.container1');
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});