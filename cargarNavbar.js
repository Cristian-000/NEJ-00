// Función para cargar el JSON de categorías y generar el navbar
function cargarNavbar() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const navbar = document.getElementById('navbar');
            navbar.innerHTML = `
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="index.html" style="color: var(--color-acento);">No es Justo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html" style="color: var(--color-texto);">Inicio</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--color-texto);">
                                    Categorías
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: var(--color-secundario);">
                                    ${data.categorias.map(categoria => 
                                        `<li><a class="dropdown-item" href="${categoria.enlace}" onclick="guardarCategoria('${categoria.nombre}')" style="color: var(--color-texto);">${categoria.nombre}</a></li>`
                                    ).join('')}
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="autores.html" style="color: var(--color-texto);">Autores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contacto.html" style="color: var(--color-texto);">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            `;
        })
        .catch(error => console.error('Error al cargar las categorías para el navbar:', error));
}

// Función para guardar la categoría seleccionada en localStorage
function guardarCategoria(nombreCategoria) {
    localStorage.setItem('categoriaSeleccionada', nombreCategoria);
}

// Cargar el navbar al cargar la página
document.addEventListener('DOMContentLoaded', cargarNavbar);
