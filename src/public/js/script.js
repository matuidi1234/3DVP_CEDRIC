document.addEventListener('DOMContentLoaded', () => {
  // Gestion de la navigation
  const loadContent = async (path) => {
    const contentDiv = document.getElementById('content');
    
    switch(path) {
      case '/services':
        const services = await fetch('/api/services').then(res => res.json());
        contentDiv.innerHTML = `
          <h2 class="mb-4">Nos Services</h2>
          <div class="row" id="services-container">
            ${services.map(service => `
              <div class="col-md-4 mb-4">
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">${service.name}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="text-primary fw-bold">$${service.price.toFixed(2)}/mois</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        break;

      case '/status':
        const status = await fetch('/api/status').then(res => res.json());
        contentDiv.innerHTML = `
          <div class="card">
            <div class="card-header">
              <h2>Statut du Serveur</h2>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Status:</strong> <span class="badge bg-success">${status.status}</span></li>
                <li class="list-group-item"><strong>Dernière mise à jour:</strong> ${new Date(status.timestamp).toLocaleString()}</li>
                <li class="list-group-item"><strong>Uptime:</strong> ${Math.floor(status.uptime / 60)} minutes</li>
              </ul>
            </div>
          </div>
        `;
        break;

      default:
        contentDiv.innerHTML = `
          <div class="text-center">
            <h1>Bienvenue chez CloudNinja Corp</h1>
            <p class="lead">Votre partenaire DevOps de confiance</p>
            <img src="https://via.placeholder.com/800x400?text=CloudNinja+Banner" class="img-fluid rounded my-4">
          </div>
        `;
    }
  };

  // Gestion des clics sur la navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const path = new URL(e.target.href).pathname;
      history.pushState({}, '', path);
      loadContent(path);
    });
  });

  // Gestion du retour en arrière
  window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
  });

  // Chargement initial
  loadContent(window.location.pathname);
});