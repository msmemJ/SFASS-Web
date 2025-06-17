document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('Please enter both username and password.');
                return;
            }

            // For now, no actual authentication, just redirect to home.html
            window.location.href = 'home.html';
        });
    }
});
