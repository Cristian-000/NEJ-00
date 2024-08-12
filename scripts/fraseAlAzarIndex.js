fetch('categorias.json')
    .then(response => response.json())
    .then(data => {
        let todasLasFrases = [];
        data.categorias.forEach(categoria => {
            categoria.frases.forEach(frase => {
                todasLasFrases.push(frase);
            });
        });

        function mostrarFraseAleatoria() {
            const fraseAleatoria = todasLasFrases[Math.floor(Math.random() * todasLasFrases.length)];
            document.getElementById('frase-clave').innerHTML = `
                <a href="${fraseAleatoria.enlace}" style="text-decoration: none;">
                    <q>${fraseAleatoria.frase_clave}</q>
                </a>
            `;
        }

        mostrarFraseAleatoria();
        setInterval(mostrarFraseAleatoria, 10000); // Cambia la frase cada 10 segundos
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
