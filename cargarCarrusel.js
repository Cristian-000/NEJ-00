document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre de la página actual

    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            let categoriaActual = null;
            data.categorias.forEach(categoria => {
                const fraseEncontrada = categoria.frases.find(frase => frase.enlace === currentPage);
                if (fraseEncontrada) {
                    categoriaActual = categoria;
                }
            });

            if (categoriaActual) {
                const carousel = document.querySelector('.carousel');
                categoriaActual.frases.forEach(frase => {
                    const link = document.createElement('a');
                    link.href = frase.enlace;
                    link.textContent = frase.titulo;
                    carousel.appendChild(link);
                });
            } else {
                console.error('Categoría no encontrada para la página actual.');
            }
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});
