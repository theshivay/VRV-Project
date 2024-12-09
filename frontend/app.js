const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const port = "https://vrv-project.onrender.com/api/auth/" || "http://localhost:5500/api/auth/"  

    const response = await fetch('https://vrv-project.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, role }),
    });

    const data = await response.json();
    alert(data.message || data.error);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('https://vrv-project.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login successful');
      window.location.href = '/frontend/dashboard.html';
    } else {
      alert(data.message || data.error);
    }
  });
}
