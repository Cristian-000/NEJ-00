document.addEventListener('DOMContentLoaded', function() {
    const categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada');

    if (categoriaSeleccionada) {
        fetch('../../../categorias.json')
            .then(response => response.json())
            .then(data => {
                const categoria = data.categorias.find(cat => cat.nombre === categoriaSeleccionada);

                if (categoria) {
                    const carousel = document.querySelector('.carousel');
                    categoria.frases.forEach(frase => {
                        const link = document.createElement('a');
                        link.href = frase.enlace;
                        link.textContent = frase.titulo;
                        carousel.appendChild(link);
                    });
                } else {
                    console.error('Categoría no encontrada.');
                }
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    } else {
        console.error('No se ha seleccionado ninguna categoría.');
    }
});

