document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (!isLoggedIn && !window.location.href.includes('login.html') && !window.location.href.includes('create_account.html')) {
        window.location.href = 'login.html';
    }

    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const voterId = document.getElementById('voter-id').value;
            if (voterId) {
                document.getElementById('positions').style.display = 'block';
            } else {
                alert('Please enter a valid voting ID.');
            }
        });
    }

    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username && password) {
                sessionStorage.setItem('isLoggedIn', true);
                window.location.href = 'index.html';
            } else {
                alert('Please enter valid credentials.');
            }
        });
    }

    const createAccountButton = document.getElementById('create-account-button');
    if (createAccountButton) {
        createAccountButton.addEventListener('click', function() {
            const newUsername = document.getElementById('new-username').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (newPassword === confirmPassword) {
                sessionStorage.setItem('isLoggedIn', true);
                window.location.href = 'index.html';
            } else {
                alert('Passwords do not match.');
            }
        });
    }
});
