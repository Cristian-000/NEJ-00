function cargarFormulario() {
    const container = document.getElementById('container_formulario');
    container.innerHTML = `
        <h2>Envía tu Frase</h2>
        <form id="fraseForm">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
            </div>
            <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <select class="form-select" id="categoria" name="categoria" required>
                    <option selected disabled>Selecciona una categoría</option>
                </select>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="reconocimiento" name="reconocimiento">
                <label class="form-check-label" for="reconocimiento">¿Quieres reconocimiento?</label>
            </div>
            <div class="mb-3">
                <label for="frase" class="form-label">Tu Frase</label>
                <textarea class="form-control" id="frase" name="frase" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Frase</button>
        </form>
    `;

    document.getElementById('fraseForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const categoria = document.getElementById('categoria').value;
        const reconocimiento = document.getElementById('reconocimiento').checked ? 'Sí' : 'No';
        const frase = document.getElementById('frase').value;

        const mailtoLink = `mailto:noesjustocanal@gmail.com?subject=Nueva%20Frase%20de%20${nombre}&body=Nombre: ${nombre}%0ACategoría: ${categoria}%0AReconocimiento: ${reconocimiento}%0AFrase:%0A${encodeURIComponent(frase)}`;

        window.location.href = mailtoLink;
    });

    cargarCategorias(); // Llama a la función para cargar las categorías desde el JSON
}

function cargarCategorias() {
    fetch('categorias.json')
        .then(response => response.json())
        .then(data => {
            const selectCategoria = document.getElementById('categoria');
            data.categorias.forEach(categoria => {
                const option = document.createElement('option');
                option.value = categoria.nombre;
                option.textContent = categoria.nombre;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error('Error al cargar las categorías:', error));
}

document.addEventListener('DOMContentLoaded', cargarFormulario);
