// Función para cargar las frases de la categoría seleccionada
function cargarFrases() {
    const categoriaNombre = localStorage.getItem('categoriaSeleccionada');
    
    if (categoriaNombre) {
        fetch('categorias.json')
            .then(response => response.json())
            .then(data => {
                const categoria = data.categorias.find(cat => cat.nombre === categoriaNombre);
                if (categoria && categoria.frases) {
                    const listaFrases = document.getElementById('lista-frases');
                    listaFrases.innerHTML = ''; // Limpiar el contenido previo

                    // Ordenar las frases por fecha, de la más reciente a la más antigua
                    const frasesOrdenadas = categoria.frases.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

                    frasesOrdenadas.forEach(frase => {
                        const li = document.createElement('li');
                        li.className = 'list-group-item border-0 mb-3 p-3 rounded shadow-sm';
                        li.style.backgroundColor = 'var(--color-secundario)';

                        li.innerHTML = `
                            <a href="${frase.enlace}" class="text-decoration-none" style="color: var(--color-acento); font-weight: bold;">${frase.titulo}</a>
                            <br>
                            <small class="text-muted">Por: ${frase.autor} | Fecha: ${new Date(frase.fecha).toLocaleDateString()}</small>
                        `;
                        listaFrases.appendChild(li);
                    });
                }
            })
            .catch(error => console.error('Error al cargar las frases:', error));
    }
}

// Cargar las frases al cargar la página
document.addEventListener('DOMContentLoaded', cargarFrases);
