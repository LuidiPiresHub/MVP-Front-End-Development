const API = 'http://localhost:5000';

const Visitante = {
  getToken() {
    return localStorage.getItem('@PortalTurismo:visitanteToken');
  },

  getPerfil() {
    const data = localStorage.getItem('@PortalTurismo:visitante');
    return data ? JSON.parse(data) : null;
  },

  salvarSessao(data) {
    localStorage.setItem('@PortalTurismo:visitanteToken', data.token);
    localStorage.setItem('@PortalTurismo:visitante', JSON.stringify(data.visitante));
  },

  logout() {
    localStorage.removeItem('@PortalTurismo:visitanteToken');
    localStorage.removeItem('@PortalTurismo:visitante');
    window.location.href = 'index.html';
  },

  async request(path, options = {}) {
    const token = this.getToken();
    const headers = { 'Content-Type': 'application/json', ...options.headers };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${API}${path}`, { ...options, headers });
    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || 'Erro na requisição');
    }

    return data;
  },

  estaLogado() {
    return !!this.getToken();
  },

  redirecionarSeNaoLogado() {
    if (!this.estaLogado()) {
      window.location.href = 'visitante-login.html';
      return false;
    }
    return true;
  }
};
