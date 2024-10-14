document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    login(email);
});

function login(email) {
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Login successful');
            // Redirect to another page or perform further actions
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function googleLogin() {
    alert('Google login functionality coming soon!');
}

function appleLogin() {
    alert('Apple login functionality coming soon!');
}
