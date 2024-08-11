document.addEventListener('DOMContentLoaded', function() {
    const categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada');

    if (categoriaSeleccionada) {
        const rutas = [
            'categorias.json',         // Ruta relativa desde el nivel actual
            '/categorias.json',        // Ruta absoluta desde la raíz del proyecto
            '../categorias.json',      // Ruta relativa subiendo un nivel
            '../../categorias.json',   // Ruta relativa subiendo dos niveles
            '../../../categorias.json' // Ruta relativa subiendo tres niveles
        ];

        // Intentar cargar el archivo desde varias rutas hasta que funcione
        (async function intentarCargar() {
            for (let ruta of rutas) {
                try {
                    const response = await fetch(ruta);
                    if (response.ok) {
                        const data = await response.json();
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
                        return; // Salir de la función si se carga exitosamente
                    }
                } catch (error) {
                    console.error(`Error cargando desde la ruta: ${ruta}`, error);
                }
            }
            console.error('Ninguna de las rutas funcionó');
        })();
    } else {
        console.error('No se ha seleccionado ninguna categoría.');
    }
});
/*document.addEventListener('DOMContentLoaded', function() {
    const categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada');

    if (categoriaSeleccionada) {
        fetch('categorias.json')
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
*/
