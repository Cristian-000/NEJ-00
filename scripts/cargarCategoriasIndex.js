// Función para cargar el JSON de categorías en index
function cargarListaIndex() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('index-categorias');
            lista.innerHTML = `
                <h4 style="color: var(--color-acento);">Categorías disponibles:</h4>
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
document.addEventListener('DOMContentLoaded', cargarListaIndex);
