const loginForm = document.querySelector('.loginForm');

const adminEmail = 'admin@gmail.com';
const adminPassword = 'admin123';

function handleFormSubmit(event) {
  event.preventDefault();
  const { target: { emailInput, passwordInput } } = event;

  if (emailInput.value !== adminEmail) {
    alert('E-mail incorreto!');
    return;
  }

  if (passwordInput.value !== adminPassword) {
    alert('Senha incorreta!')
    return;
  }

  window.location.href = 'admin.html';
}

loginForm.addEventListener('submit', handleFormSubmit);
