function cargarFormulario() {
    const container = document.getElementById('container_formulario');
    container.innerHTML = `
        <h2 id="toggleFormulario" class="text-center cursor-pointer mb-4" style="margin-top: 1rem; font-size: 1.5rem; color: var(--color-acento);">
            Envía tu frase
            <i class="fas fa-chevron-down"></i>
        </h2>

        <!-- Contenedor del formulario -->
        <div id="formContainer" style="display: none;">
            <form id="fraseForm" class="p-4 border rounded shadow-sm bg-light" style="background-color: var(--color-secundario); color: var(--color-texto);">
                <div class="mb-3">
                    <label for="nombre" class="form-label" style="color: var(--color-texto);">Nombre</label>
                    <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label" style="color: var(--color-texto);">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Ingresa tu correo electrónico" required>
                </div>
                <div class="mb-3">
                    <label for="categoria" class="form-label" style="color: var(--color-texto);">Categoría</label>
                    <select class="form-select" id="categoria" name="categoria" required>
                        <option selected disabled>Selecciona una categoría</option>
                    </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="reconocimiento" name="reconocimiento">
                    <label class="form-check-label" for="reconocimiento" style="color: var(--color-texto);">¿Quieres reconocimiento?</label>
                </div>
                <div class="mb-3">
                    <label for="frase" class="form-label" style="color: var(--color-texto);">Tu Frase</label>
                    <textarea class="form-control" id="frase" name="frase" rows="4" placeholder="Escribe tu frase aquí" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100" style="background-color: var(--color-acento); border-color: var(--color-acento);">Enviar Frase <i class="fas fa-envelope"></i></button>
            </form>
        </div>
    `;

    const toggleButton = document.getElementById('toggleFormulario');
    const formContainer = document.getElementById('formContainer');

    // Evento para mostrar/ocultar el formulario
    toggleButton.addEventListener('click', function() {
        if (formContainer.style.display === 'none') {
            formContainer.style.display = 'block';
            toggleButton.innerHTML = `
                Muchas Gracias 
                <i class="fas fa-chevron-up"></i>
            `;
        } else {
            formContainer.style.display = 'none';
            toggleButton.innerHTML = `
                Envía tu frase
                <i class="fas fa-chevron-down"></i>
            `;
        }
    });

    document.getElementById('fraseForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const categoria = document.getElementById('categoria').value;
        const reconocimiento = document.getElementById('reconocimiento').checked ? 'Sí' : 'No';
        const frase = document.getElementById('frase').value;

        // Crear el enlace mailto
        const mailtoLink = `mailto:noesjustocanal@gmail.com?subject=Nueva%20Frase%20de%20${nombre}&body=Nombre: ${nombre}%0ACorreo: ${email}%0ACategoría: ${categoria}%0AReconocimiento: ${reconocimiento}%0AFrase:%0A${encodeURIComponent(frase)}`;

        // Redirigir a mailto
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
