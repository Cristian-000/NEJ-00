// Función para cargar el JSON de categorías
function cargarCategorias() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            generarNavbar(data.categorias);
            generarAside(data.categorias);
        })
        .catch(error => console.error('Error al cargar las categorías:', error));
}

// Función para generar el navbar
function generarNavbar(categorias) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">No es Justo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            ${categorias.map(categoria => `<li><a class="dropdown-item" href="${categoria.enlace}">${categoria.nombre}</a></li>`).join('')}
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    `;
}

// Función para generar el aside
function generarAside(categorias) {
    const aside = document.getElementById('aside-categorias');
    aside.innerHTML = `
        <h5>Categorías</h5>
        <ul class="list-group">
            ${categorias.map(categoria => `<li class="list-group-item"><a href="${categoria.enlace}">${categoria.nombre}</a></li>`).join('')}
        </ul>
    `;
}

// Llamar a la función para cargar las categorías cuando se cargue la página
document.addEventListener('DOMContentLoaded', cargarCategorias);
