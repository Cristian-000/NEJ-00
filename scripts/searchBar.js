let data = {};

// Cargar los datos desde el JSON
fetch('categorias.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    if (query) {
        let results = [];

        // Iterar sobre cada categoría y frase para buscar coincidencias
        data.categorias.forEach(categoria => {
            categoria.frases.forEach(frase => {
                if (frase.titulo.toLowerCase().includes(query) || frase.frase_clave.toLowerCase().includes(query) || frase.autor.toLowerCase().includes(query)) {
                    results.push(`
                        <a href="${frase.enlace}">
                            <strong>${frase.titulo}</strong> - ${frase.frase_clave} <em>(${frase.autor})</em>
                        </a>
                    `);
                }
            });
        });

        if (results.length > 0) {
            resultsContainer.innerHTML = results.join('');
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
        }
    } else {
        resultsContainer.style.display = 'none';
    }
});

// Ocultar resultados al hacer clic fuera de la barra de búsqueda
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('searchResults').style.display = 'none';
    }
});
