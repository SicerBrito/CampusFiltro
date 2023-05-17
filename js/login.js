const API_URL = 'http://localhost:3000/users';

// Registro de usuario
let registerForm = document.querySelector('#registerForm');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  let response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  let result = await response.json();
  console.log(result);
  alert('Usuario registrado correctamente');
  registerForm.reset();
});

// Inicio de sesión
let loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let response = await fetch(API_URL + `?username=${data.username}&password=${data.password}`);
    let result = await response.json();
    if (result.length > 0) {
      alert('Inicio de sesión exitoso');
      loginForm.reset();
      // Redirigir a la página de inicio
      window.location.href = '../html/datos.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
  const userForm = document.getElementById('user-form');