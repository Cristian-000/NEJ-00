// Función para cargar el JSON de categorías y generar el navbar
function cargarNavbar() {
    const rutas = [
        'categorias.json',         // Ruta relativa desde el nivel actual
        '/categorias.json',        // Ruta absoluta desde la raíz del proyecto
        '../categorias.json',      // Ruta relativa subiendo un nivel
        '../../categorias.json',   // Ruta relativa subiendo dos niveles
        '../../../categorias.json' // Ruta relativa subiendo tres niveles
    ];

    // Intentar cargar el archivo desde varias rutas hasta que funcione
    (async function intentarCargar() {
        for (let ruta of rutas) {
            try {
                const response = await fetch(ruta);
                if (response.ok) {
                    const data = await response.json();
                    const navbar = document.getElementById('navbar');
                    navbar.innerHTML = `
                        <div class="container-fluid">
                            <a class="navbar-brand fw-bold" href="index.html" style="color: var(--color-acento);">No es Justo</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="color: var(--color-acento);">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="autores.html">Autores</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contacto.html">Contacto</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categorías
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: var(--color-secundario); border: 1px solid var(--color-acento);">
                                            ${data.categorias.map(categoria => 
                                                `<li><a class="dropdown-item" href="${categoria.enlace}" onclick="guardarCategoria('${categoria.nombre}')">${categoria.nombre}</a></li>`
                                            ).join('')}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    `;
                    return; // Salir de la función si se carga exitosamente
                }
            } catch (error) {
                console.error(`Error cargando desde la ruta: ${ruta}`, error);
            }
        }
        console.error('Ninguna de las rutas funcionó');
    })();
}

// Función para guardar la categoría seleccionada en localStorage
function guardarCategoria(nombreCategoria) {
    localStorage.setItem('categoriaSeleccionada', nombreCategoria);
}

// Cargar el navbar al cargar la página
document.addEventListener('DOMContentLoaded', cargarNavbar);
// Función para cargar el JSON de categorías y generar el navbar
/*function cargarNavbar() {
    fetch('../categorias.json')
        .then(response => response.json())
        .then(data => {
            const navbar = document.getElementById('navbar');
            navbar.innerHTML = `
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold" href="index.html" style="color: var(--color-acento);">No es Justo</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="color: var(--color-acento);">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto" >
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="autores.html">Autores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contacto.html">Contacto</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorías
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" style="background-color: var(--color-secundario); border: 1px solid var(--color-acento);">
                                    ${data.categorias.map(categoria => 
                                        `<li><a class="dropdown-item" href="${categoria.enlace}" onclick="guardarCategoria('${categoria.nombre}')">${categoria.nombre}</a></li>`
                                    ).join('')}
                                </ul>
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
*/
