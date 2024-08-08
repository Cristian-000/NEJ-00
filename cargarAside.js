// Función para cargar el JSON de categorías y generar el aside
function cargarAside() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const aside = document.getElementById('aside-categorias');
            aside.innerHTML = `
                <h5>Categorías</h5>
                <ul class="list-group">
                    ${data.categorias.map(categoria => `<li class="list-group-item"><a href="${categoria.enlace}">${categoria.titulo}</a></li>`).join('')}
                </ul>
            `;
        })
        .catch(error => console.error('Error al cargar las categorías para el aside:', error));
}

// Cargar el aside al cargar la página
document.addEventListener('DOMContentLoaded', cargarAside);
