// Cargar los tutoriales desde JSON y mostrarlos en tarjetas
fetch('data/tutoriales.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cards-container');
    data.tutoriales.forEach(t => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${t.titulo}</h3>
        <p>${t.descripcion}</p>
        <a href="${t.link}" target="_blank">Ver tutorial</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error cargando los tutoriales:', error));
