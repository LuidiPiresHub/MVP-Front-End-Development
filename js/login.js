// js/login.js
const loginForm = document.querySelector('.loginForm');

async function handleFormSubmit(event) {
  event.preventDefault();
  const email = event.target.emailInput.value;
  const senha = event.target.passwordInput.value;

  try {
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || 'Credenciais inválidas');
      return;
    }

    // Salvar o token JWT e informações do administrador no localStorage
    localStorage.setItem('@PortalTurismo:token', data.token);
    localStorage.setItem('@PortalTurismo:admin', JSON.stringify(data.admin));

    // Redireciona para o painel administrativo
    window.location.href = 'admin.html';
  } catch (error) {
    console.error('Erro ao conectar ao servidor:', error);
    alert('Erro de conexão com o servidor. Tente novamente mais tarde.');
  }
}

loginForm.addEventListener('submit', handleFormSubmit);

//teste nodemon