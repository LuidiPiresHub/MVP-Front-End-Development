const loginForm = document.querySelector('.loginForm');

const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin123';

function handleFormSubmit(event) {
  event.preventDefault();
  const { target: { emailInput, passwordInput } } = event;

  if (emailInput.value !== adminEmail || passwordInput.value !== adminPassword) {
    alert('Credenciais inválidas');
    return;
  }

  window.location.href = 'admin.html';
}

loginForm.addEventListener('submit', handleFormSubmit);
