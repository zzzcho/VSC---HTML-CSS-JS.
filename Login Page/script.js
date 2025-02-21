//Mostrar o ocultar la contraseña 
function togglePassword() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

//Validar formulario
document.querySelector('form').addEventListener('submit', (e) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!email || !password) {
        e.preventDefault(); 
        alert('Por favor, rellene todos los campos.');
    }
});