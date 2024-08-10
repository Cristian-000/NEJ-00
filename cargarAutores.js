document.addEventListener('DOMContentLoaded', function() {
    fetch('autores.json')
        .then(response => response.json())
        .then(data => {
            const listaAutores = document.getElementById('lista-autores');
            listaAutores.innerHTML = ''; // Limpiar contenido previo

            data.autores.forEach(autor => {
                const li = document.createElement('li');
                li.className = 'list-group-item border-0 mb-3 p-3 rounded shadow-sm';
                li.style.backgroundColor = 'var(--color-secundario)';

                li.innerHTML = `
                    <a href="${autor.enlace}" class="text-decoration-none" style="color: var(--color-acento); font-weight: bold;">${autor.nombre}</a>
                `;
                listaAutores.appendChild(li);
            });
        })
        .catch(error => console.error('Error al cargar los autores:', error));
});
