const tutoriales = {
  tutorial1: `
    <h2>Crear tu primer repositorio</h2>
    <p>Aprende cómo crear y clonar tu primer repositorio en GitHub paso a paso:</p>
    <ol>
      <li>Ve a <a href="https://github.com" target="_blank">GitHub</a> y entra a tu cuenta.</li>
      <li>Haz clic en "New Repository".</li>
      <li>Nombre del repositorio: <strong>mi-primer-repo</strong>.</li>
      <li>Opcional: marca "Add a README".</li>
      <li>Haz clic en "Create repository".</li>
      <li>Clona el repositorio en tu computadora:</li>
    </ol>
    <pre><code>git clone https://github.com/tu-usuario/mi-primer-repo.git</code></pre>
  `,
  tutorial2: `
    <h2>Commits bien hechos</h2>
    <p>Cómo hacer commits claros y organizados:</p>
    <pre><code>
git add .
git commit -m "feat: agregar página de inicio"
git push origin main
    </code></pre>
    <ul>
      <li>Haz commits pequeños y frecuentes.</li>
      <li>Escribe mensajes claros.</li>
    </ul>
  `,
  tutorial3: `
    <h2>Uso de ramas (branches)</h2>
    <p>Trabajar con ramas sin afectar main:</p>
    <pre><code>
git checkout -b nombre-de-la-rama
git add .
git commit -m "feat: nueva funcionalidad"
git push origin nombre-de-la-rama
    </code></pre>
    <ul>
      <li>Cada funcionalidad en su propia rama.</li>
      <li>Evita trabajar directamente en <strong>main</strong>.</li>
    </ul>
  `,
  tutorial4: `
    <h2>Pull Requests</h2>
    <p>Cómo abrir un Pull Request para fusionar tu rama al proyecto principal:</p>
    <ol>
      <li>Sube tu rama a GitHub con <code>git push origin nombre-de-la-rama</code>.</li>
      <li>Ve al repositorio en GitHub y haz clic en "Compare & pull request".</li>
      <li>Escribe título y descripción claros.</li>
      <li>Haz clic en "Create Pull Request".</li>
    </ol>
    <p>Esto permite que otros revisen tu código antes de unirlo a main.</p>
  `,
  tutorial5: `
    <h2>README profesional</h2>
    <p>Cómo crear un README que explique tu proyecto claramente:</p>
    <pre><code>
# Nombre del proyecto

Descripción corta

## Instalación
git clone URL_del_repo

## Uso
Instrucciones básicas

## Tecnologías
- Git
- GitHub
- HTML/CSS/JS

## Licencia
MIT
    </code></pre>
    <p>Mantén tu README limpio, organizado y fácil de entender.</p>
  `
};

// Función para abrir tutorial
function abrirTutorial(id) {
  document.getElementById('cards-container').parentElement.style.display = 'none';
  document.getElementById('tutorial-completo').classList.remove('hidden');
  document.getElementById('contenido-tutorial').innerHTML = tutoriales[id];
}

// Función para cerrar tutorial
function cerrarTutorial() {
  document.getElementById('tutorial-completo').classList.add('hidden');
  document.getElementById('cards-container').parentElement.style.display = 'block';
}
