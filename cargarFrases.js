// Función para cargar las frases de la categoría seleccionada
function cargarFrases(categoriaNombre) {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const categoria = data.categorias.find(cat => cat.nombre === categoriaNombre);
            if (categoria && categoria.frases) {
                const listaFrases = document.getElementById('lista-frases');
                const frasesOrdenadas = categoria.frases.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
                frasesOrdenadas.forEach(frase => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.innerHTML = `
                        <a href="${frase.enlace}" class="text-decoration-none">${frase.titulo}</a>
                        <br>
                        <small>Por: ${frase.autor} | Fecha: ${new Date(frase.fecha).toLocaleDateString()}</small>
                    `;
                    listaFrases.appendChild(li);
                });
            }
        })
        .catch(error => console.error('Error al cargar las frases:', error));
}
