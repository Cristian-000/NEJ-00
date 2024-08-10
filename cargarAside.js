// Función para cargar el JSON de categorías y generar el aside
function cargarAside() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const aside = document.getElementById('aside-categorias');
            aside.innerHTML = `
                <h5 style="color: var(--color-acento);">Categorías</h5>
                <ul class="list-group" style="padding: 0; list-style-type: none;">
                    ${data.categorias.map(categoria => 
                        `<li class="list-group-item" style="background-color: var(--color-secundario); color: var(--color-texto); border: 1px solid var(--color-borde);">
                            <a href="${categoria.enlace}" onclick="guardarCategoria('${categoria.nombre}')" style="color: var(--color-acento); text-decoration: none;">${categoria.nombre}</a>
                        </li>`
                    ).join('')}
                </ul>
            `;
        })
        .catch(error => console.error('Error al cargar las categorías para el aside:', error));
}

// Función para guardar la categoría seleccionada en localStorage
function guardarCategoria(nombreCategoria) {
    localStorage.setItem('categoriaSeleccionada', nombreCategoria);
}

// Cargar el aside al cargar la página
document.addEventListener('DOMContentLoaded', cargarAside);
