

// Register page

const userStorage = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};


document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();


    const username = document.getElementById('userName').value;
    const password = document.getElementById('passWord').value;


    if (userStorage[username]) {
        alert('Username already exist. Please choose another')
    }
    else {
        userStorage[username] = password;
        localStorage.setItem('users', JSON.stringify(userStorage));
        alert('Registration successful! Redirecting to login page...')

        window.location.href = "login.html"
    }
})





document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();


    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;


    const userStorage = JSON.parse(localStorage.getItem('users'))

    if (userStorage[username] && userStorage[username] === password) {
        alert('Login Successful! Redirectin.....');
        window.location.href = 'index.html';
    }
    else {
        alert('Invalid username or password.');
    }
})