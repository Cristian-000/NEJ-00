document.addEventListener('DOMContentLoaded', function() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const listaFrases = document.getElementById('lista-frases');
            listaFrases.innerHTML = ''; // Limpiar el contenido previo

            data.categorias.forEach(categoria => {
                const frasesAutor = categoria.frases.filter(frase => frase.autor === 'Cristian Fernandez');
                frasesAutor.forEach(frase => {
                    const li = document.createElement('li');
                    li.className = 'list-group-item';
                    li.innerHTML = `
                        <a href="${frase.enlace}" class="text-decoration-none" style="color: var(--color-acento); font-weight: bold;">${frase.titulo}</a>
                        <br>
                        <small class="text-muted">Categoría: ${categoria.nombre} | Fecha: ${new Date(frase.fecha).toLocaleDateString()}</small>
                    `;
                    listaFrases.appendChild(li);
                });
            });
        })
        .catch(error => console.error('Error al cargar las frases:', error));
});
